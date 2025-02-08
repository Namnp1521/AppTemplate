import {Colors} from '@constants';
import React, {useEffect} from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Block from './Block';
import Loader from './Loader';
import ScalePressable from './ScalePressable';

export interface SwitchInputProps {
  isActive: boolean;
  loading?: boolean;
  onChange: (value: boolean) => void;
  inactiveBg?: string;
}

export default function SwitchInput(props: SwitchInputProps) {
  const {isActive, onChange, loading, inactiveBg} = props;

  const sharedValue = useSharedValue(false);
  const leftStyle = useAnimatedStyle(() => ({
    left: withTiming(sharedValue.value ? 44 - 4 - 16 : 4),
  }));
  const bgStyle = useAnimatedStyle(() => ({
    backgroundColor: withTiming(
      sharedValue.value ? Colors.primary : inactiveBg || Colors.dark100,
    ),
  }));
  const bgPointStyle = useAnimatedStyle(() => ({
    backgroundColor: withTiming(
      sharedValue.value ? Colors.dark100 : Colors.primary,
    ),
  }));

  useEffect(() => {
    sharedValue.value = isActive;
  }, [isActive]);

  return (
    <ScalePressable
      onPress={() => {
        if (loading) return;
        onChange(!isActive);
      }}>
      {/* {isActive && (
        <Shadow
          source={Images.COMMON.chipPrimaryShadow}
          top={0}
          left={'-12%'}
          right={'-12%'}
          bottom={'-80%'}
        />
      )} */}

      <Block animated width={44} height={24} radius={24} sx={bgStyle}>
        {loading ? (
          <Loader loading color={isActive ? Colors.white : Colors.primary} />
        ) : (
          <Block
            animated
            absolute
            width={16}
            height={16}
            radius={16}
            color="white"
            sx={[
              {
                top: 4,
                left: 4,
              },
              leftStyle,
              bgPointStyle,
            ]}
          />
        )}
      </Block>
    </ScalePressable>
  );
}
