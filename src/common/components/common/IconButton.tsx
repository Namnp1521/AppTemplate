import {Colors} from '@constants';
import {CommonUtilities} from '@utils';
import React from 'react';
import Animated, {ZoomInRotate} from 'react-native-reanimated';
import Block from './Block';
import Loader from './Loader';
import OpacityPressable from './OpacityPressable';
import SVGImage from './SVGImage';
import ScalePressable from './ScalePressable';
import {Text} from '.';

export interface IIconButtonProps {
  icon?: string;
  onPress?: () => void;
  disabled?: boolean;
  color?: string;
  bgcolor?: string;
  disabledOnlyUI?: boolean;
  isPrimary?: boolean;
  alwaysShowShadow?: boolean;
  isNoShadow?: boolean;
  isKeepDimemsion?: boolean;
  isOpacity?: boolean;
  size?: number;
  width?: number;
  radius?: number;
  badge?: number;
  loading?: boolean;
}

export default function IconButton(props: IIconButtonProps) {
  const {
    icon,
    onPress = () => {},
    disabled,
    color = Colors.white,
    bgcolor,
    disabledOnlyUI,
    isPrimary,
    alwaysShowShadow,
    isNoShadow = true,
    isKeepDimemsion = false,
    size,
    width,
    radius,
    loading,
    isOpacity,
    badge,
  } = props;

  const onClickPress = () => {
    CommonUtilities.vibrate();
    onPress();
  };

  if (!!isNoShadow && !isKeepDimemsion) {
    if (isOpacity) {
      return (
        <OpacityPressable onPress={onClickPress} disabled={disabled}>
          <Animated.View entering={ZoomInRotate.duration(300)}>
            <Block>
              <SVGImage
                source={icon}
                width={size || 24}
                height={size || 24}
                color={isPrimary ? Colors.white : color}
              />
              {!!badge && (
                <Block
                  center
                  middle
                  padding={[3.5, 4]}
                  radius={32}
                  color="primary"
                  absolute
                  sx={{
                    top: -10,
                    left: 10,
                  }}>
                  <Text size={12} height={14}>
                    {badge}
                  </Text>
                </Block>
              )}
            </Block>
          </Animated.View>
        </OpacityPressable>
      );
    }

    return (
      <ScalePressable onPress={onClickPress} disabled={disabled}>
        <Animated.View entering={ZoomInRotate.duration(300)}>
          <SVGImage
            source={icon}
            width={size || 24}
            height={size || 24}
            color={isPrimary ? Colors.white : color}
          />
        </Animated.View>
      </ScalePressable>
    );
  }

  return (
    <ScalePressable onPress={onClickPress} disabled={disabled}>
      {/* {(alwaysShowShadow || (!disabledOnlyUI && !disabled)) && !isNoShadow && (
        <Shadow
          source={
            isPrimary
              ? Images.COMMON.iconPrimaryBtnShadow
              : Images.COMMON.iconBtnShadow
          }
          height={(96 * (width || 44)) / 44}
          width={(96 * (width || 44)) / 44}
          left={(-28 * (width || 44)) / 44}
          top={0}
          sx={{
            opacity: (0.5 * (width || 48)) / 48,
          }}
        />
      )} */}
      <Block
        width={width || 48}
        height={width || 48}
        middle
        center
        overflow
        radius={radius || 48}
        sx={{
          backgroundColor:
            bgcolor ||
            (isPrimary ? Colors.primary : bgcolor || Colors.backgroundDark),
          opacity: disabledOnlyUI || disabled ? 0.7 : 1,
        }}>
        {loading ? (
          <Loader loading color={Colors.secondary} />
        ) : (
          <SVGImage
            source={icon}
            width={size || 24}
            height={size || 24}
            color={isPrimary ? Colors.white : color}
          />
        )}
      </Block>
    </ScalePressable>
  );
}
