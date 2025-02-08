import React, {useEffect, useState} from 'react';
import {Block, Text, Button} from '@components';
import {Colors, HEIGHT_SCREEN} from '@constants';
import {Platform, StyleSheet} from 'react-native';
import {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export interface ModalProps {
  titleOK?: string;
  titleCancel?: string;
  detail: string;
  onCancel?: () => void | undefined;
  onOK?: () => void | undefined;
}

export default function Modal(props: ModalProps) {
  /** props */
  const {titleCancel, titleOK, detail, onCancel, onOK} = props;

  /** state */
  const [shouldRenderBlur, setShouldRenderBlur] = useState(
    Platform.OS === 'android' ? false : true,
  );

  /** animated */
  const animatedValue = useSharedValue(0);

  const containerAnimatedStyles = useAnimatedStyle(() => ({
    opacity: interpolate(animatedValue.value, [0, 1], [0, 1]),
  }));

  const contentAnimatedStyles = useAnimatedStyle(() => ({
    opacity: interpolate(animatedValue.value, [0, 1], [0, 1]),
    transform: [
      {
        translateY: interpolate(
          animatedValue.value,
          [0, 1],
          [HEIGHT_SCREEN, 0],
        ),
      },
    ],
  }));

  /** effect */
  useEffect(() => {
    // https://github.com/Kureev/react-native-blur/issues/368#issuecomment-1024443562
    setTimeout(() => setShouldRenderBlur(true), 0);
    animatedValue.value = withSpring(1);
  }, []);

  /** callback */
  const handleOK = () => {
    animatedValue.value = withSpring(0, {}, () => {
      onOK && runOnJS(onOK)();
    });
  };

  const handleCancel = () => {
    animatedValue.value = withSpring(0, {}, () => {
      onCancel && runOnJS(onCancel)();
    });
  };

  /** render */
  return (
    <Block
      animated
      sx={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor:
            Platform.OS === 'ios' ? Colors.backgroundModal : Colors.transparent,
          ...containerAnimatedStyles,
        },
      ]}
      center
      middle>
      <Block
        animated
        shadow
        sx={contentAnimatedStyles}
        width={'90%'}
        color={'white'}
        padding={[38, 0]}
        radius={20}>
        <Block center middle>
          <Block margin={[0, 50]}>
            <Text small size={24} center color={'black'}>
              {detail}
            </Text>
          </Block>
          <Block center margin={[30, 0, 0, 0]}>
            {!!titleCancel && (
              <Button gradient onPress={handleCancel}>
                <Text color={'white'} caption>
                  {titleCancel}
                </Text>
              </Button>
            )}
            {!!titleOK && (
              <Block margin={[5, 0, 0, 0]}>
                <Text h4 onTouchableOpacity={handleOK}>
                  {titleOK}
                </Text>
              </Block>
            )}
          </Block>
        </Block>
      </Block>
    </Block>
  );
}
