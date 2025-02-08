import {navigation} from '@navigation';
import {useIsFocused} from '@react-navigation/native';

import {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Keyboard, KeyboardEvent} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useAppDispatch} from './redux.hook';
import DocumentPicker from 'react-native-document-picker';

export const useBack = (onBack: () => void) => {
  const back = () => {
    onBack();
    navigation.goBack();
  };

  return {back};
};

export const useTimer = (
  defaultTime: number,
  start: boolean,
  stop: boolean,
  resetTime?: number,
) => {
  const [time, setTime] = useState(defaultTime);
  const interval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // reset time if show new guide
    setTime(defaultTime);
  }, [resetTime]);

  useEffect(() => {
    if (start) {
      interval.current = setInterval(() => {
        setTime(data => {
          if (data <= 0) return 0;
          return data - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval.current);
    };
  }, [start]);

  useEffect(() => {
    if (stop) {
      clearInterval(interval.current);
    }
  }, [stop]);

  const min = Math.floor(time / 60);
  const sec = time - min * 60;
  const showText = `${min.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}:${sec.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}`;

  return {showText, time};
};

export const useKeyboard = () => {
  const {t} = useTranslation();
  useEffect(() => {
    const keyboardDidHideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      () => Keyboard.dismiss(),
    );

    return () => {
      keyboardDidHideSubscription?.remove();
    };
  }, []);
};

export const useAppConfig = () => {
  useEffect(() => {
    // google
    // GoogleSignin.configure({
    //   scopes: ['email'],
    //   webClientId: config.google.clientId,
    //   offlineAccess: true,
    // });
    // // request APP_TRACKING_TRANSPARENCY
    // setTimeout(async () => {
    //   await PermissionUtilities.requestPermissionTransparency();
    // }, 500);
  }, []);
};

export const useKeyboardHeight = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  function onKeyboardDidShow(e: KeyboardEvent) {
    setKeyboardHeight(e.endCoordinates.height);
  }

  function onKeyboardDidHide() {
    setKeyboardHeight(0);
  }

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardDidShow,
    );
    const hideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      onKeyboardDidHide,
    );
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return {keyboardHeight};
};

export const useOpacityAnimated = () => {
  /** state */
  const [showOpacity, setShowOpacity] = useState(true);

  // animate cho background image
  const isShow = useSharedValue(true);
  const opacityStyle = useAnimatedStyle(() => ({
    opacity: withTiming(isShow.value ? 1 : 0),
  }));

  useEffect(() => {
    isShow.value = !!showOpacity;
  }, [showOpacity]);

  const onShowOpacity = () => setShowOpacity(true);
  const onHideOpacity = () => setShowOpacity(false);

  return {opacityStyle, onShowOpacity, onHideOpacity};
};

export const useBottomSheetAnimated = (isShowBTS: boolean, height: number) => {
  const isShow = useSharedValue(true);
  const animBTSStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withTiming(isShow.value ? 0 : height, {
          duration: 100,
        }),
      },
    ],
  }));

  useEffect(() => {
    isShow.value = !!isShowBTS;
  }, [isShowBTS]);

  return {animBTSStyle};
};

export const useScrollToTop = (isScrollToTop?: boolean) => {
  const scrollRef = useRef<ScrollView>(null);

  const scrollToTop = () =>
    scrollRef?.current?.scrollTo({x: 0, y: 0, animated: true});

  const scrollToBottom = () =>
    scrollRef?.current?.scrollToEnd({animated: true});

  useEffect(() => {
    if (!!isScrollToTop) {
      scrollToTop();
    }
  }, [isScrollToTop]);

  return {scrollRef, scrollToTop, scrollToBottom};
};

export const useFocus = () => {
  const isFocus = useIsFocused();

  let timeout = useRef<NodeJS.Timeout>();
  const [interactionsComplete, setinteractionsComplete] = useState(false);

  useEffect(() => {
    if (isFocus) {
      timeout.current && clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        setinteractionsComplete(true);
      }, 100);
    } else {
      setinteractionsComplete(false);
    }

    return () => timeout.current && clearTimeout(timeout.current);
  }, [isFocus]);

  return {isNonFocus: !interactionsComplete};
};

export const useDocumentPicker = () => {
  const [fileUri, setFileUri] = useState('');

  const pickPdf = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setFileUri(result[0].uri); // Update parent state
    } catch (err) {
      console.warn('File picking cancelled', err);
    }
  };

  const clearImg = () => setFileUri('');

  return {fileUri, pickPdf, clearImg};
};
