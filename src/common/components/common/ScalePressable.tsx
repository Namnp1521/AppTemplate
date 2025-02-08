import {CommonUtilities} from '@utils';
import React from 'react';
import {Pressable, PressableProps, StyleProp, ViewStyle} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export interface IScalePressableProps extends PressableProps {
  children?: any;
  sx?: StyleProp<ViewStyle>; //customStyle
  noFlex?: boolean;
}

export default function ScalePressable(props: IScalePressableProps) {
  const {children, sx, noFlex} = props;

  // animate scale
  const scaleValue = useSharedValue(1);
  const buttonAnimStyle = useAnimatedStyle(() => ({
    transform: [{scale: withTiming(scaleValue.value)}],
  }));

  return (
    <Pressable
      onPressIn={() => {
        CommonUtilities.vibrate();
        scaleValue.value = 0.95;
      }}
      onPressOut={() => (scaleValue.value = 1)}
      {...props}>
      <Animated.View style={[buttonAnimStyle, {flex: !!noFlex ? 0 : 1}, sx]}>
        {children}
      </Animated.View>
    </Pressable>
  );
}
