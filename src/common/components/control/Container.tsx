import {Block, FocusContainer, Loader} from '@components';
import {Colors} from '@constants';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export interface CounterProps {
  children: any;
  pt?: number;
  pb?: number;
  disabledScroll?: boolean;
}

export default function Container(props: CounterProps) {
  const {children, pt, pb, disabledScroll} = props;

  const {top, bottom} = useSafeAreaInsets();

  if (!!disabledScroll) {
    return (
      <FocusContainer LoaderComponent={() => <Loader loading />}>
        <Block
          flex
          sx={{
            paddingTop: pt || top + 56,
            paddingBottom: pb || bottom + 100,
          }}>
          {children}
        </Block>
      </FocusContainer>
    );
  }

  return (
    <FocusContainer LoaderComponent={() => <Loader loading />}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: pt !== undefined ? pt : top + 70,
          paddingBottom: pb !== undefined ? pb : bottom + 100,
        }}>
        <View>
          <Block flex>{children}</Block>
        </View>
      </ScrollView>
    </FocusContainer>
  );
}
