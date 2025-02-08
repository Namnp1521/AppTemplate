import {Colors} from '@constants';
import React from 'react';
import {ActivityIndicator, Modal} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';
import {Block} from '.';

export interface LoaderProps {
  cover?: boolean;
  loading: boolean;
  color?: string;
}

export default function Loader(props: LoaderProps) {
  const {loading, cover, color} = props;

  // if (cover) {
  //   return (
  //     <Block
  //       absolute
  //       flex
  //       center
  //       middle
  //       customStyle={{
  //         backgroundColor: Colors.backgroundModal,
  //         top: 0,
  //         right: 0,
  //         left: 0,
  //         bottom: 0,
  //       }}>
  //       <ActivityIndicator size="small" color={color || Colors.primary} />
  //     </Block>
  //   );
  // }

  if (cover) {
    return (
      <Modal transparent statusBarTranslucent visible={loading}>
        <Block
          flex
          center
          middle
          sx={{backgroundColor: Colors.backgroundModal}}>
          <ActivityIndicator size="small" color={color || Colors.primary} />
        </Block>
      </Modal>
    );
  }

  if (!loading) return null;

  return (
    <Block flex center middle>
      <Animated.View entering={FadeIn}>
        <ActivityIndicator size="small" color={color || Colors.primary} />
      </Animated.View>
    </Block>
  );
}
