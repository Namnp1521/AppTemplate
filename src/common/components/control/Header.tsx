import {Colors, Images} from '@constants';
import {navigation} from '@navigation';
import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Background, Block, IconWrap, OpacityPressable, Text} from '../common';

export interface HeaderProps {
  title?: string | JSX.Element;
  leftView?: JSX.Element;
  disabledLeft?: boolean;
  handlePressLeft?: () => void;
  rightView?: JSX.Element;
  disabledRight?: boolean;
  handlePressRight?: () => void;
  statusHidden?: boolean;
  shadow?: boolean;
  transparent?: boolean;
  absolute?: boolean;
  bgColor?: string;
  isBack?: boolean;
}

export default function Header(props: HeaderProps) {
  const {
    shadow,
    leftView,
    title,
    rightView,
    disabledLeft,
    disabledRight,
    handlePressLeft = () => {},
    handlePressRight = () => {},
    statusHidden,
    transparent = true,
    absolute = true,
    isBack,
    bgColor,
  } = props;
  const {top} = useSafeAreaInsets();

  return (
    <Block
      absolute={absolute}
      sx={[
        {zIndex: 999},
        absolute
          ? {
              top: 0,
              right: 0,
              left: 0,
              zIndex: 99,
            }
          : {},
        bgColor
          ? {
              backgroundColor: bgColor,
            }
          : {},
      ]}
      // shadow={shadow}
      // height={statusHidden ? HEADER_HEIGHT + top : HEADER_HEIGHT + top}
      // padding={[statusHidden ? top : top, 0, 0, 0]}
      pb={30}
      color={transparent ? 'transparent' : 'white'}>
      <Background
        linearColors={[
          Colors.white,
          Colors.white,
          Colors.white,
          Colors.white,
          Colors.white,
          Colors.white10,
          Colors.white10,
        ]}
        angle={180}
      />

      <Block
        margin={[top + 16, 20, 0, 20]}
        row
        center
        space="between"
        // width={WIDTH_SCREEN - 32}
      >
        {isBack && (
          <Block mr={16}>
            <Animated.View entering={FadeIn.duration(400)}>
              <OpacityPressable onPress={navigation.goBack}>
                <Block
                  width={36}
                  height={36}
                  middle
                  center
                  radius={36}
                  color="primary">
                  <IconWrap icon={Images.ICON.Back} color={Colors.white} />
                </Block>
              </OpacityPressable>
            </Animated.View>
          </Block>
        )}
        {title && (
          <Animated.View entering={FadeIn.duration(400)}>
            <Text size={20} weight="600" color="black">
              {title}
            </Text>
          </Animated.View>
        )}

        <Block width={36} sx={[styles.rightView]}>
          {rightView}
        </Block>
      </Block>
      {/* <Block sx={[styles.leftView, {top: top}]}>
        <ScalePressable disabled={disabledLeft} onPress={handlePressLeft}>
          {leftView}
        </ScalePressable>
      </Block> */}
    </Block>
  );
}

const styles = StyleSheet.create({
  leftView: {
    position: 'absolute',
    left: 16,
    height: '100%',
    justifyContent: 'center',
  },
  rightView: {
    // position: 'absolute',
    // right: 16,
    // height: '100%',
    // justifyContent: 'center',
  },
});
