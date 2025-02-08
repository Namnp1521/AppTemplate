import {BOTTOM_BAR_HEIGHT, Colors} from '@constants';
import React, {forwardRef, useEffect} from 'react';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {Block, SVGImage, Text} from '../common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export interface ToastProps {
  bottom?: number;
  toastInfo: {
    icon: string | undefined;
    text: string;
    type: 'success' | 'error';
  };
  onHide: () => void;
}

const Toast = forwardRef((props: ToastProps, ref) => {
  /** props */
  const {toastInfo, onHide} = props;

  const {bottom} = useSafeAreaInsets();

  useEffect(() => {
    setTimeout(() => {
      onHide();
    }, 3000);
  }, []);

  /** render */
  return (
    <Animated.View entering={FadeInDown.duration(400)}>
      <Block
        center
        sx={{
          shadowColor: Colors.grey,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.7,
          shadowRadius: 10.0,
          elevation: 18,
        }}>
        <Block
          row
          bgcolor={
            toastInfo.type === 'success'
              ? Colors.green
              : toastInfo.type === 'error'
              ? Colors.red
              : Colors.darkBlue
          }
          center
          overflow
          // height={40}
          radius={16}
          padding={[12, 16]}
          absolute
          sx={{
            bottom: bottom + 16,
            left: 16,
            right: 16,
            // right: 80,
          }}>
          {!!toastInfo.icon && (
            <Block mr={8}>
              <SVGImage source={toastInfo.icon} height={24} width={24} />
            </Block>
          )}
          <Text size={14} color="white">
            {toastInfo.text}
          </Text>
        </Block>
      </Block>
    </Animated.View>
  );
});

Toast.displayName = 'Toast';
export default Toast;
