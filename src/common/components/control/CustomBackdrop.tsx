import React from 'react';
import {BottomSheetBackdropProps} from '@gorhom/bottom-sheet';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {Colors} from '@constants';

const CustomBackdrop = ({
  animatedIndex,
  style,
  isShowBTS,
  hideBTS,
}: BottomSheetBackdropProps & {isShowBTS: boolean; hideBTS: () => void}) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [-1, 0],
      [0, 0.7],
      Extrapolate.CLAMP,
    ),
  }));

  const containerStyle = [
    style,
    {
      backgroundColor: Colors.black,
    },
    containerAnimatedStyle,
  ];

  return (
    <Animated.View
      style={containerStyle}
      pointerEvents={isShowBTS ? 'auto' : 'none'}
      onTouchStart={hideBTS}
    />
  );
};

export default CustomBackdrop;
