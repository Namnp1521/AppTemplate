import {
  Block,
  IconWrap,
  Image,
  SVGImage,
  ScalePressable,
  Shadow,
  Text,
} from '@components';
import {Colors, Images} from '@constants';
import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import Animated, {
  FadeIn,
  FadeInLeft,
  FadeOut,
  FadeOutRight,
  ZoomOutRotate,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomTabIcon} from '../../../navigation/components';
import {TAB_LIST} from '../../../navigation/module/bottombar.navigation';
import {BottomBarStatusContext} from '../BottomBarStatus.context';

const BottomAction = ({
  isShowBTS,
  hideBTS,
}: {
  isShowBTS: boolean;
  hideBTS: () => void;
}) => {
  const {t} = useTranslation();
  const {bottom} = useSafeAreaInsets();
  const realWidthLogo = 48;

  const {curTab} = useContext(BottomBarStatusContext);

  const actions = [
    {
      icon: Images.ICON.addCircleLine,
      title: 'Log a new entry',
    },
    {
      icon: Images.ICON.chat,
      title: 'Chat',
    },
    {
      icon: Images.ICON.Search,
      title: 'Search',
    },
  ];

  if (!isShowBTS) return <></>;

  return (
    <Block
      padding={[24, 0]}
      absolute
      sx={{
        bottom: 0,
        left: 0,
        right: 0,
      }}>
      {/* icon tab */}
      <Animated.View
        entering={FadeIn.duration(300)}
        exiting={FadeOut.duration(300)}>
        <Block
          row
          bgcolor={Colors.dark300}
          radius={40}
          center
          middle
          sx={{
            alignSelf: 'center',
          }}>
          {/* shadow  */}
          <Shadow
            source={Images.COMMON.bottomBarShadow}
            // height={89}
            height={115}
            sx={{
              top: -12,
              right: -30,
              left: -30,
            }}
          />

          {TAB_LIST.map((tab, index) => {
            return (
              <BottomTabIcon disabled tab={tab} focused={curTab === index} />
            );
          })}
        </Block>
      </Animated.View>

      {/* action */}
      <Block
        absolute
        sx={{
          top: 24 + 3,
          right: 16,
        }}>
        <Animated.View
          entering={FadeIn.duration(300)}
          exiting={FadeOut.duration(250)}>
          <Animated.View exiting={ZoomOutRotate.duration(500)}>
            <ScalePressable onPress={hideBTS}>
              <Block
                bgcolor={Colors.primary}
                width={realWidthLogo}
                height={realWidthLogo}
                radius={realWidthLogo}
                center
                middle>
                {/* logo shadow */}
                <Block
                  absolute
                  pointerEvents="none"
                  width={(realWidthLogo * 120) / 68}
                  height={(realWidthLogo * 120) / 68}
                  radius={(realWidthLogo * 120) / 68}
                  sx={{
                    top: 0,
                    right: -(realWidthLogo * 120) / 68 / 2 + realWidthLogo / 2,
                  }}>
                  <Image
                    source={Images.COMMON.iconLogoShadowActive}
                    full
                    stretch
                  />
                </Block>
                <Block
                  width={realWidthLogo}
                  height={realWidthLogo}
                  center
                  middle>
                  <SVGImage
                    source={Images.COMMON.category}
                    width={24}
                    height={24}
                    color="white"
                  />
                </Block>
              </Block>
            </ScalePressable>
          </Animated.View>
        </Animated.View>
      </Block>

      <Block
        absolute
        sx={{
          top: -135,
          right: 16,
        }}>
        {actions.map((action, index) => (
          <Block key={`action_${action.title}`} mt={4}>
            <Animated.View
              entering={FadeInLeft.delay((2 - index) * 100).duration(500)}
              exiting={FadeOutRight.delay(index * 100).duration(500)}>
              <ScalePressable sx={{alignItems: 'flex-end'}} onPress={hideBTS}>
                <Block
                  row
                  center
                  right
                  radius={40}
                  padding={12}
                  bgcolor={Colors.dark100}>
                  <IconWrap icon={action.icon} color={Colors.white} />
                  <Block ml={8}>
                    <Text>{action.title}</Text>
                  </Block>
                </Block>
              </ScalePressable>
            </Animated.View>
          </Block>
        ))}
      </Block>
    </Block>
  );
};

export default BottomAction;
