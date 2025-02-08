import {CommonUtilities} from '@utils';
import React from 'react';
import {TouchableOpacity} from 'react-native';

export interface IOpacityPressableProps {
  children?: any;
  onPress?: () => void;
  disabled?: boolean;
}

export default function OpacityPressable(props: IOpacityPressableProps) {
  const {children, onPress, disabled} = props;

  // animate scale

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      disabled={disabled}
      onPress={() => {
        CommonUtilities.vibrate();
        !!onPress && onPress();
      }}>
      {children}
    </TouchableOpacity>
  );
}
