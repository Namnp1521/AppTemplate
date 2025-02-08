import React, {useContext, useEffect} from 'react';
import {BottomBarStatusContext, UserLoginContext} from '@utils';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Animated, {
  FadeInDown,
  SlideInDown,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Block} from '@components';
import {BOTTOM_BAR_HEIGHT, Colors, WIDTH_SCREEN} from '@constants';
import {useAnimatedStyle} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import {TabBar} from './TabBar';

export interface TabBarProps {}

export default function BottomTabBar(props: TabBarProps & BottomTabBarProps) {
  /** props */
  const {state, navigation, descriptors, insets} = props;
  // const {setCurTab, curTab} = useContext(BottomBarStatusContext);
  // const {isAuth} = useContext(UserLoginContext);

  /** animated */
  // const dotSize = 24;
  // const leftPadding = 30;
  // const tabWidth = (WIDTH_SCREEN - leftPadding * 2) / 5;
  // const dotSharredValue = useSharedValue(
  //   leftPadding + tabWidth * 0.5 - dotSize / 2,
  // );
  // const dotOpacity = useSharedValue(1);
  // const dotAnimatedStyle = useAnimatedStyle(() => ({
  //   left: withTiming(dotSharredValue.value),
  //   opacity: withTiming(dotOpacity.value),
  // }));

  /** effect */
  // useEffect(() => {
  //   setCurTab(navigation.getState().index);

  //   switch (navigation.getState().index) {
  //     case 0:
  //       dotSharredValue.value = leftPadding + tabWidth * 0.5 - dotSize / 2;
  //       break;
  //     case 1:
  //       dotSharredValue.value = leftPadding + tabWidth * 1.5 - dotSize / 2;
  //       break;
  //     case 2:
  //       dotSharredValue.value = leftPadding + tabWidth * 2.5 - dotSize / 2;
  //       break;
  //     case 3:
  //       dotSharredValue.value = leftPadding + tabWidth * 3.5 - dotSize / 2;
  //       break;
  //     case 4:
  //       dotSharredValue.value = leftPadding + tabWidth * 4.5 - dotSize / 2;
  //       break;

  //     default:
  //       break;
  //   }

  //   dotOpacity.value = navigation.getState().index !== 2 ? 1 : 0;
  // }, [navigation.getState().index]);

  /** render */
  return (
    <Animated.View
      entering={FadeInDown.duration(1000)
      // .damping(50).stiffness(10)
      }>
      <Block absolute sx={styles.container}>
        <TabBar
          state={state}
          descriptors={descriptors}
          insets={insets}
          navigation={navigation}
        />

        {/* {isAuth && (
          <Block
            animated
            absolute
            width={dotSize}
            height={4}
            radius={dotSize}
            sx={[
              styles.dot,
              dotAnimatedStyle,
              {
                backgroundColor:
                  curTab === 5 ? Colors.primary : Colors.secondary,
              },
            ]}
          />
        )} */}
      </Block>
    </Animated.View>
  );
}

export const styles = StyleSheet.create({
  container: {
    bottom: 0,
    left: 0,
    right: 0,
    // height: BOTTOM_BAR_HEIGHT,
  },
  dot: {
    zIndex: 999,
    // backgroundColor: Colors.secondary,
    // top: 50,
    bottom: 24,
  },
});
