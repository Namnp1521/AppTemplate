import {useIsFocused} from '@react-navigation/native';
import React from 'react';

export interface FocusWrapProps {
  children: any;
}

export default function FocusWrap(props: FocusWrapProps) {
  const {children} = props;
  const isFocus = useIsFocused();

  return (
    <React.Fragment key={`FocusComp_${isFocus}`}>{children}</React.Fragment>
  );
}
