import {Colors, Images, WIDTH_SCREEN} from '@constants';
import React from 'react';
import {Background, Block, Shadow} from '../common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export interface FooterProps {
  children?: any;
  isBTS?: boolean;
}

export default function Footer(props: FooterProps) {
  const {children, isBTS} = props;

  if (isBTS) {
    return (
      <Block
        absolute
        bgcolor="white"
        sx={{
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        {children}
      </Block>
    );
  }

  return (
    <Block
      absolute
      pt={16}
      sx={{
        bottom: 0,
        left: 0,
        right: 0,
      }}>
      <Background
        linearColors={[
          Colors.dark500,
          Colors.dark,
          Colors.dark,
          Colors.dark,
          Colors.dark,
        ]}
        angle={180}
      />
      {children}
    </Block>
  );
}
