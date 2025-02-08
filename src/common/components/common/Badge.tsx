import {Block, Text} from '@components';
import {Colors, Theme} from '@constants';
import React from 'react';

const DEFAULT_WIDTH = Theme.sizes.base;

export interface BadgeProps {
  width?: number;
  number: number;
  absolute?: boolean;
  border?: boolean;
}

export default function Badge(props: BadgeProps) {
  const {width, number, absolute, border} = props;

  if (number === 0) return null;

  return (
    <Block
      absolute={absolute}
      color={'danger'}
      width={width || DEFAULT_WIDTH}
      height={width || DEFAULT_WIDTH}
      center
      middle
      sx={[
        {
          borderRadius: width || DEFAULT_WIDTH,
        },
        absolute && {
          right: -5,
          top: -5,
        },
        border && {
          borderWidth: 1,
          borderColor: Colors.white,
        },
      ]}>
      <Text color={'white'} sx={{fontSize: 8}} title>
        {number > 99 ? '99+' : number}
      </Text>
    </Block>
  );
}
