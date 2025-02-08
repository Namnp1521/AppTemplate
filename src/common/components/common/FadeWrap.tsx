import React from 'react';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';

export interface FadeWrapProps {
  children?: any;
  exiting?: any;
}

export default function FadeWrap(props: FadeWrapProps) {
  const {children, exiting} = props;

  /** render */
  return (
    <Animated.View
      entering={FadeIn}
      exiting={exiting || FadeOut}
      style={{
        flex: 1,
      }}>
      {children}
    </Animated.View>
  );
}
