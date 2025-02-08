import {Block} from '@components';
import {useFocus} from '@utils';
import React from 'react';

export interface CounterProps {
  children: any;
  LoaderComponent?: React.FC | ((props: any) => JSX.Element);
}

export default function FocusContainer(props: CounterProps) {
  const {children, LoaderComponent} = props;
  const {isNonFocus} = useFocus();

  if (isNonFocus) {
    if (!!LoaderComponent) {
      return (
        <Block flex color="white">
          <LoaderComponent />
        </Block>
      );
    }

    return <Block flex color="white" />;
  }

  return (
    <Block flex color="white">
      {/* <Animated.View
        key={`Animated_${isNonFocus}`}
        entering={
          !isNonFocus ? FadeInDown.duration(400) : FadeOutUp.duration(400)
        }
        style={{flex: 1}}> */}
      <Block flex color="white">
        {children}
      </Block>
      {/* </Animated.View> */}
    </Block>
  );
}
