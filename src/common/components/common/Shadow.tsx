import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {Block, Image} from '.';

export interface ShadowProps {
  source?: any;
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  width?: number | string;
  height?: number | string;
  sx?: StyleProp<ViewStyle>; //sx
  overflow?: boolean;
}

export default function Shadow(props: ShadowProps) {
  const {source, top, bottom, left, right, width, height, sx, overflow} = props;

  let style: any = {};
  if (top !== undefined) style = {...style, top};
  if (bottom !== undefined) style = {...style, bottom};
  if (left !== undefined) style = {...style, left};
  if (right !== undefined) style = {...style, right};
  if (width !== undefined) style = {...style, width};
  if (height !== undefined) style = {...style, height};
  if (!!overflow) style = {...style, overflow: 'hidden'};

  return (
    <Block absolute pointerEvents="none" sx={[style, sx]}>
      <Image source={source} full stretch />
    </Block>
  );
}
