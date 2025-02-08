import React from 'react';
import {Colors} from '@constants';
import {Block} from '.';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';

export interface BackgroundProps {
  opacity?: number;
  color?: string;
  bgcolor?: string;
  linearColors?: string[];
  angle?: number;
  radius?: number;
  linearOpacity?: number;
}

export default function Background(props: BackgroundProps) {
  const {opacity, color, linearColors, angle, radius, bgcolor, linearOpacity} =
    props;

  return (
    <Block
      flex
      absolute
      overflow
      sx={[
        StyleSheet.absoluteFill,
        {
          opacity: opacity || 1,
          backgroundColor: bgcolor || Colors.transparent,
        },
        !!radius && {borderRadius: radius},
      ]}>
      {color ? (
        <Block sx={{flex: 1, backgroundColor: color}} />
      ) : angle ? (
        <LinearGradient
          colors={linearColors || [Colors.linear_bg1, Colors.linear_bg2]}
          style={{flex: 1, opacity: linearOpacity || 1}}
          useAngle={true}
          angle={angle || 220}
          angleCenter={{x: 0.7, y: 0.5}}
        />
      ) : (
        <LinearGradient
          colors={linearColors || [Colors.linear_bg1, Colors.linear_bg2]}
          style={{flex: 1}}
          start={{x: 0.85, y: 0.3}} // toạ độ điểm đầu thanh grandient
          end={{x: 0.5, y: 0.7}} // toạ độ điểm cuối thanh grandient
        />
      )}
    </Block>
  );
}
