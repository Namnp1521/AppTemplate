import {Colors} from '@constants';
import React, {useEffect, useState} from 'react';
import {
  DimensionValue,
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Block, Loader} from '.';
import {CommonUtilities} from '@utils';

export type Color =
  | 'primary'
  | 'secondary'
  | 'white'
  | 'gray'
  | 'danger'
  | 'black'
  | 'transparent'
  | 'dark';

export type Status = 'normal' | 'active' | 'disabled';

export interface IScaleButtonProps extends PressableProps {
  color?: Color;
  shadow?: boolean;
  width?: DimensionValue | number;
  status?: Status;
  sx?: StyleProp<ViewStyle>; //customStyle
  children?: any;
  height?: DimensionValue | number;
  borderRadius?: number;
  round?: boolean;
  gradient?: boolean;
  roundCorner?: boolean;
  loading?: boolean;
  linearColors?: string[];
  bgcolor?: string;
  angle?: number;
}

export default function ScaleButton(props: IScaleButtonProps) {
  const {
    sx: customStyle,
    color,
    shadow,
    width,
    children,
    status,
    height,
    round,
    gradient,
    loading,
    roundCorner = false,
    linearColors,
    angle,
    bgcolor,
    borderRadius,
  } = props;

  const buttonStyles: StyleProp<ViewStyle>[] = [
    round ? [styles.btn, styles.roundBtn] : styles.btn,
    // shadow && styles.shadow,
    roundCorner && styles.roundCorner,
    !!height && {
      height: typeof height === 'number' ? height : height,
    },
    !!borderRadius && {
      borderRadius: borderRadius,
    },
    !!width && {
      width: typeof width === 'number' ? width : width,
    },
    status && styles[status],
    color && styles[color], // predefined styles colors for backgroundColor
    loading && styles.loading,
    bgcolor ? {backgroundColor: bgcolor} : {},
    customStyle,
  ];

  // animate scale
  const scaleValue = useSharedValue(1);
  const buttonAnimStyle = useAnimatedStyle(() => ({
    transform: [{scale: withTiming(scaleValue.value)}],
  }));

  /** prevent double tap */
  const [disabledDoubleTap, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (!disabledDoubleTap) {
      // timeout elapsed, nothing to do
      return;
    }

    // isDisabled was changed to true, set back to false after 500ms
    const handle = setTimeout(() => {
      setDisabled(false);
    }, 500);
    return () => clearTimeout(handle);
  }, [disabledDoubleTap]);

  const onPress = (event: GestureResponderEvent) => {
    if (!disabledDoubleTap) {
      setDisabled(true);
      props.onPress && props.onPress(event);
    }
  };

  /** render */
  return (
    <Block>
      <Pressable
        disabled={status === 'disabled' || loading}
        onPressIn={() => {
          CommonUtilities.vibrate();
          scaleValue.value = 0.95;
        }}
        onPressOut={() => (scaleValue.value = 1)}
        {...props}
        onPress={onPress}>
        {/* shadow */}
        {/* {status !== 'disabled' && !loading && (
          <Animated.View
            pointerEvents="none"
            style={[
              buttonAnimStyle,
              {
                position: 'absolute',
                // height: 141,
                left: -11,
                right: -11,
                top: -14,
                bottom: -65,
              },
            ]}>
            <Image
              source={
                shadow
                  ? Images.COMMON.btnShadow3
                  : status
                  ? Images.COMMON.btnShadow2
                  : Images.COMMON.btnShadow
              }
              full
              stretch
            />
          </Animated.View>
        )} */}

        <Animated.View
          entering={FadeInDown.duration(300)}
          style={[buttonStyles, buttonAnimStyle]}>
          {gradient && (
            <Block
              absolute
              width={'100%'}
              height={'100%'}
              bgcolor={Colors.yellow}>
              <LinearGradient
                colors={linearColors || [Colors.white66, Colors.yellow100]}
                style={{flex: 1}}
                useAngle={true}
                angle={angle || 90}
                angleCenter={{x: 0.6, y: 0.5}}
              />
            </Block>
          )}
          {/* {!status && <NoiseEffect />} */}
          {/* {status === 'disabled' && (
            <Block
              sx={[StyleSheet.absoluteFillObject, {opacity: 0.35}]}
              color="white"
            />
          )} */}
          {loading ? <Loader loading color="white" /> : children}
        </Animated.View>
      </Pressable>
    </Block>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 36,
    borderRadius: 16,
    backgroundColor: Colors.primary,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundBtn: {
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  roundCorner: {
    borderRadius: 100,
  },

  primary: {backgroundColor: Colors.primary},
  secondary: {backgroundColor: Colors.secondary},
  black: {backgroundColor: Colors.black},
  white: {backgroundColor: Colors.white},
  gray: {backgroundColor: Colors.gray},
  dark: {backgroundColor: Colors.dark},
  danger: {backgroundColor: Colors.danger},
  transparent: {backgroundColor: Colors.transparent},
  normal: {
    backgroundColor: Colors.primary,
  },
  active: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    // backgroundColor: Colors.secondary,
    backgroundColor: Colors.dark100,
    // opacity: 0.2,
  },
  loading: {
    backgroundColor: Colors.dark100,
  },
});
