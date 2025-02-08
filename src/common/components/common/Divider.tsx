import {Colors} from '@constants';
import React from 'react';
import {DimensionValue, StyleProp, ViewStyle} from 'react-native';
import {Block} from '.';

export type Color =
  | 'primary'
  | 'secondary'
  | 'black'
  | 'white'
  | 'gray'
  | 'light'
  | 'dark'
  | 'danger'
  | 'transparent';

export type Level = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

interface DividerProps {
  color?: Color;
  height?: DimensionValue | number;
  level?: Level;
  customStyle?: StyleProp<ViewStyle>;
  bgcolor?: string;
  isNew?: boolean;
  isVertical?: boolean;
}

export default function Divider(props: DividerProps) {
  const {color, bgcolor, customStyle, height, level, isNew, isVertical} = props;
  const dividerStyles = [
    !!height && {height},
    !!level && {height: level * 8},
    customStyle,
  ];

  if (!!isNew) {
    if (isVertical) {
      return (
        <Block margin={[0, 8]} flex overflow width={5}>
          <Block
            flex
            sx={{
              borderStyle: 'dashed',
              borderWidth: 1.5,
              borderColor: Colors.backgroundDark,
              width: 10,
            }}
          />
        </Block>
      );
    }

    return (
      <Block margin={[8, 0]} overflow height={5}>
        <Block
          sx={{
            borderStyle: 'dashed',
            borderWidth: 1.5,
            borderColor: Colors.backgroundDark,
            height: 10,
          }}
        />
      </Block>
    );
  }

  return (
    <Block
      color={color || 'transparent'}
      width="100%"
      sx={dividerStyles}
      bgcolor={bgcolor}
    />
  );
}
