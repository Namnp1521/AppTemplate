import {Text} from '@components';
import {Colors} from '@constants';
import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Block from './Block';

const DEFAULT_HEIGHT = 7;

export interface ProgressProps {
  text?: string;
  height?: number;
  color?: string;
  bgColor?: string;
  value: number;
  grandient?: boolean;
}

export default function Progress(props: ProgressProps) {
  const {text, height, color, bgColor, value, grandient} = props;

  return (
    <Block
      height={height || DEFAULT_HEIGHT}
      row
      center
      sx={{
        backgroundColor: bgColor || Colors.white,
        borderRadius: height || DEFAULT_HEIGHT,
        overflow: 'hidden',
      }}>
      <Block
        height={height || DEFAULT_HEIGHT}
        flex={value}
        overflow
        radius={height || DEFAULT_HEIGHT}
        bgcolor={color || Colors.secondary}
        sx={
          {
            // borderTopLeftRadius: height || DEFAULT_HEIGHT,
            // borderBottomLeftRadius: height || DEFAULT_HEIGHT,
          }
        }>
        {grandient && (
          <Block absolute sx={StyleSheet.absoluteFill}>
            <LinearGradient
              colors={[Colors.linear_bg1, Colors.linear_bg2]}
              style={{flex: 1}}
              useAngle={true}
              angle={90}
              angleCenter={{x: 0.6, y: 0.5}}
            />
          </Block>
        )}
      </Block>
      <Block center absolute width={'100%'}>
        {text && (
          <Text small color={'white'}>
            {text}
          </Text>
        )}
      </Block>
    </Block>
  );
}
