import {Colors} from '@constants';
import React from 'react';
import {StyleSheet} from 'react-native';
import Background from './Background';
import Block from './Block';
import SVGImage from './SVGImage';
import ScalePressable from './ScalePressable';

export interface RoundIconButtonProps {
  icon?: string;
  onPress?: () => void;
  disabled?: boolean;
  color?: string;
  bgcolor?: string;
  disabledOnlyUI?: boolean;
  isPrimary?: boolean;
  alwaysShowShadow?: boolean;
  width?: number;
  iconSize?: number;
  onlyBgColor?: string;
}

export default function RoundIconButton(props: RoundIconButtonProps) {
  const {
    icon,
    onPress = () => {},
    disabled,
    color = Colors.white,
    bgcolor = Colors.backgroundModal,
    disabledOnlyUI,
    isPrimary,
    alwaysShowShadow,
    width,
    onlyBgColor,
    iconSize,
  } = props;

  return (
    <ScalePressable onPress={onPress} disabled={disabled}>
      {/* {(alwaysShowShadow || (!disabledOnlyUI && !disabled)) && (
        <Shadow
          source={Images.COMMON.circleShadow}
          width={100}
          height={80}
          top={0}
          left={-22}
        />
      )} */}
      <Block
        width={width || 56}
        height={width || 56}
        middle
        center
        overflow
        radius={width || 56}
        bgcolor={onlyBgColor || Colors.transparent}
        sx={{
          // backgroundColor: Colors.transparent70,
          opacity: disabledOnlyUI || disabled ? 0.7 : 1,
        }}>
        {!onlyBgColor && (
          <Block absolute sx={[StyleSheet.absoluteFill]}>
            <Block absolute sx={[StyleSheet.absoluteFill, {opacity: 0.5}]}>
              <Background
                linearColors={[bgcolor, bgcolor]}
                // linearColors={[Colors.black, Colors.white]}
                angle={70}
              />
            </Block>
          </Block>
        )}
        <SVGImage
          source={icon}
          width={iconSize || 24}
          height={iconSize || 24}
          color={color || Colors.white}
        />
      </Block>
    </ScalePressable>
  );
}
