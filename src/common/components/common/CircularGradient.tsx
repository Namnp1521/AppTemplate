import React from 'react';
import Svg, {Defs, LinearGradient, Stop, Circle} from 'react-native-svg';
import {Colors} from '@constants';
import Block from './Block';
import {StyleSheet} from 'react-native';

interface ICircularGradientProps {
  size: number;
}

export default function CircularGradient(props: ICircularGradientProps) {
  const {size} = props;

  const strokeWidth = 4;
  const cx = size / 2;
  const cy = size / 2;
  const r = (size - strokeWidth) / 2;
  const circleLength = r * 2 * Math.PI;

  return (
    <Block width={size} height={size} sx={styles.container}>
      {/* <Svg width={size} height={size}> */}
      <Svg width={'100%'} height={'100%'}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
            <Stop offset="0" stopColor={Colors.linear_bg1} />
            <Stop offset="1" stopColor={Colors.linear_bg2} />
          </LinearGradient>
        </Defs>
        <Circle
          stroke={Colors.light500}
          fill="none"
          cx={cx}
          cy={cy}
          r={r}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke="url(#grad)"
          fill="none"
          cx={cx}
          cy={cy}
          r={r}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circleLength}, ${circleLength}`}
          strokeLinecap="round"
        />
      </Svg>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    transform: [{rotate: '-90deg'}],
  },
});
