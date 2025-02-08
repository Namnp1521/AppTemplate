import React from 'react';
import Animated, {FadeInRight, FadeOutLeft} from 'react-native-reanimated';

export interface SwipeWrapProps {
  children?: any;
  exiting?: any;
}

export default function SwipeWrap(props: SwipeWrapProps) {
  const {children, exiting} = props;

  /** render */
  return (
    <Animated.View
      entering={FadeInRight}
      exiting={exiting || FadeOutLeft}
      style={{
        flex: 1,
      }}>
      {children}
    </Animated.View>
  );
}
