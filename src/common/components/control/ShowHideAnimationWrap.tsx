import React, {useEffect} from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Block} from '../common';

export interface ShowHideAnimationWrapProps {
  children?: any;
}

export default function ShowHideAnimationWrap(
  props: ShowHideAnimationWrapProps,
) {
  const {children} = props;

  const sharedValue = useSharedValue(1);
  const animStyle = useAnimatedStyle(() => ({
    opacity: withTiming(sharedValue.value),
  }));

  useEffect(() => {
    setTimeout(() => {
      sharedValue.value = 0;
    }, 500);
  }, []);

  return (
    <Block animated pointerEvents="none" sx={animStyle}>
      {children}
    </Block>
  );
}
