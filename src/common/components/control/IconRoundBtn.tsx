import {Block, OpacityPressable, SVGImage} from '@components';
import {Colors} from '@constants';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Animated, {BounceIn} from 'react-native-reanimated';

export interface IIconRoundBtn {
  icon: string;
  onPress?: () => void;
  bgcolor?: string;
}

const IconRoundBtn = (props: IIconRoundBtn) => {
  const {icon, onPress, bgcolor} = props;

  return (
    <Animated.View entering={BounceIn}>
      <Block>
        <OpacityPressable onPress={onPress}>
          <Block
            width={32}
            height={32}
            radius={32}
            center
            middle
            sx={{
              backgroundColor: bgcolor || Colors.icon_inactive20,
            }}>
            <SVGImage
              source={icon}
              width={22}
              height={22}
              color={Colors.background}
            />
          </Block>
        </OpacityPressable>
      </Block>
    </Animated.View>
  );
};

export default IconRoundBtn;
