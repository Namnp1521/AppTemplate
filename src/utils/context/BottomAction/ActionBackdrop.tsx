import {Block} from '@components';
import {Colors} from '@constants';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const ActionBackdrop = ({
  isShowBTS,
  hideBTS,
}: {
  isShowBTS: boolean;
  hideBTS: () => void;
}) => {
  const [show, setShow] = useState(false);

  const animatedIndex = useSharedValue(0);
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(
      interpolate(animatedIndex.value, [0, 1], [0, 0.7], Extrapolate.CLAMP),
    ),
  }));

  const containerStyle = [
    {
      backgroundColor: Colors.black,
    },
    containerAnimatedStyle,
    StyleSheet.absoluteFill,
  ];

  useEffect(() => {
    if (isShowBTS) {
      setShow(true);
      animatedIndex.value = 1;
    } else {
      animatedIndex.value = 0;
      const timeout = setTimeout(() => {
        setShow(false);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [isShowBTS]);

  if (!show) return <></>;

  return (
    <Block
      animated
      absolute
      sx={containerStyle}
      pointerEvents={isShowBTS ? 'auto' : 'none'}
      onTouchStart={hideBTS}
    />
  );
};

export default ActionBackdrop;
