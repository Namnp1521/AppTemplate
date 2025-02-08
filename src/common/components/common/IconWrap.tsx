import {Colors} from '@constants';
import React from 'react';
import Block from './Block';
import SVGImage from './SVGImage';

export interface IconWrapProps {
  icon?: string;
  color?: string;
  isNoWrap?: boolean;
  size?: number;
}

export default function IconWrap(props: IconWrapProps) {
  const {icon, color = Colors.darkBlue, isNoWrap = true, size = 24} = props;

  if (isNoWrap) {
    return <SVGImage source={icon} width={size} height={size} color={color} />;
  }

  return (
    <Block width={48} height={48} color="white" center middle radius={16}>
      <SVGImage source={icon} width={size} height={size} color={color} />
    </Block>
  );
}
