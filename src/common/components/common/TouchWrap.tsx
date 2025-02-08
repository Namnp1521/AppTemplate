import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';

export interface TouchWrapProps {
  children?: any;
}

// Đôi khi view bị lỗi ko chạm để scroll được
// thì bọc component này
export default function TouchWrap(props: TouchWrapProps) {
  const {children} = props;

  return (
    <TouchableWithoutFeedback>
      <View>{children}</View>
    </TouchableWithoutFeedback>
  );
}
