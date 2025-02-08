import {Colors} from '@constants';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, {Circle, Defs, LinearGradient, Stop} from 'react-native-svg';
import Block from './Block';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface ICircularPogressProps {
  size: number;
  progress: number;
  textColor?: string;
  circlePercentTotal?: number;
  sw?: number;
}

export default function CircularPogress(props: ICircularPogressProps) {
  const {size, progress, textColor, sw, circlePercentTotal} = props;

  const strokeWidth = sw || 4;
  const cx = size / 2;
  const cy = size / 2;
  const r = (size - strokeWidth) / 2;
  const circleLength = r * 2 * Math.PI;
  const circleRealLength = circleLength * (circlePercentTotal || 1);

  /** animated */
  const progressSharedValue = useSharedValue(0);
  const circleAnimatedProps = useAnimatedProps(() => ({
    strokeDashoffset: circleLength * (1 - progressSharedValue.value),
  }));

  useEffect(() => {
    progressSharedValue.value = withTiming(progress, {duration: 2000});
  }, [progress]);

  return (
    <Block>
      <Block
        width={size}
        height={size}
        sx={{
          transform: [
            {
              rotate: `${
                -90 +
                (!circlePercentTotal ? 0 : (1 - circlePercentTotal) * 360) / 2
              }deg`,
            },
          ],
        }}>
        {/* <Svg width={size} height={size} rotation={-90}> */}
        <Svg width={'100%'} height={'100%'}>
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
              <Stop offset="0" stopColor={Colors.primary} />
              <Stop offset="1" stopColor={Colors.primary} />
            </LinearGradient>
          </Defs>
          <Circle
            stroke={Colors.dark900}
            fill="none"
            cx={cx}
            cy={cy}
            r={r}
            strokeWidth={strokeWidth}
            strokeDasharray={`${circleRealLength}, ${circleRealLength}`}
            strokeLinecap="round"
          />
          <AnimatedCircle
            stroke="url(#grad)"
            fill="none"
            cx={cx}
            cy={cy}
            r={r}
            strokeWidth={strokeWidth}
            strokeDasharray={`${circleLength}, ${circleLength}`}
            strokeLinecap="round"
            animatedProps={circleAnimatedProps}
          />
        </Svg>
      </Block>
      {/* <Block
        width={size}
        center
        sx={{
          position: 'absolute',
          top: size / 4 + 2.5,
          left: size / 4 - 12,
        }}>
        <Text size={12} bold sx={{color: textColor}}>
          {Math.round(progress * 100)}%
        </Text>
      </Block> */}
    </Block>
  );
}
