import {Background, Block, Shadow} from '@components';
import {Colors, Images} from '@constants';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {CommonUtilities} from '@utils';
import React from 'react';
import {TouchableOpacity} from 'react-native';

export const TabBar = ({
  state,
  descriptors,
  navigation: navigationProp,
}: BottomTabBarProps) => {
  return (
    <Block
      // padding={[24, 0]}
      absolute
      sx={{
        bottom: 0,
        left: 0,
        right: 0,
      }}>
      {/* icon tab */}
      <Block
        row
        bgcolor={Colors.white}
        center
        middle
        sx={{
          alignSelf: 'center',
        }}>
        {/* <Background
          linearColors={[
            Colors.white0,
            Colors.white,
            Colors.white,
            Colors.white,
            Colors.white,
          ]}
          angle={180}
        /> */}

        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          // press tab
          const onPress = () => {
            const event = navigationProp.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            CommonUtilities.vibrate();

            if (!isFocused && !event.defaultPrevented) {
              switch (route.name) {
                // case Routes.BOTTOMTAB.CHATBOT:
                //   // show chat bot instead any page
                //   navigation.useNavigate(Routes.AUTH.OTHERS, {
                //     screen: Routes.OTHERS.MESSAGES,
                //   });
                //   break;
                default:
                  navigationProp.navigate(route.name);
                  break;
              }
            }
          };

          // view tab
          const TabBarIcon = options.tabBarIcon
            ? options.tabBarIcon({
                focused: isFocused,
                color: '',
                size: 0,
              })
            : null;

          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              // testID={options.tabBarTestID}
              testID={options.tabBarButtonTestID}
              onPress={onPress}>
              {TabBarIcon}
            </TouchableOpacity>
          );
        })}
      </Block>
    </Block>
  );
};
