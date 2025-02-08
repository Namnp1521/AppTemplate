import {Block, SVGImage, Text} from '@components';
import {Colors, WIDTH_SCREEN} from '@constants';
import {UserLoginContext} from '@utils';
import React, {useContext, useEffect} from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {TabItem} from '../module/bottombar.navigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Platform} from 'react-native';

const AnimatedSVGImage = Animated.createAnimatedComponent(SVGImage);

export interface BottomTabIconProps {
  tab: TabItem;
  focused: boolean;
  disabled?: boolean;
}

export default function BottomTabIcon(props: BottomTabIconProps) {
  /** props */
  const {tab, focused, disabled} = props;
  const {bottom} = useSafeAreaInsets();

  /** render */
  return (
    <Block
      center
      middle
      width={WIDTH_SCREEN / 5}
      pt={16}
      pb={bottom > 16 ? bottom : 16}>
      <Block>
        <AnimatedSVGImage
          width={24}
          height={24}
          color={focused ? Colors.primary : Colors.black}
          source={tab.icon}
        />
      </Block>
      <Block mt={8}>
        <Text
          size={12}
          weight="500"
          sx={{
            color: focused ? Colors.primary : Colors.font,
          }}>
          {tab.title}
        </Text>
      </Block>
    </Block>
  );
}
