import {Colors, Theme} from '@constants';
import React from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import Block from './Block';
import OpacityPressable from './OpacityPressable';

export type Color =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'black'
  | 'white'
  | 'gray'
  | 'light'
  | 'dark'
  | 'danger';

export type Transform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

export type Align = 'auto' | 'left' | 'right' | 'center' | 'justify';

export type Weight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export interface TypographyProps extends TextProps {
  onTouchableOpacity?: () => void;
  onPress?: () => void;
  opacity?: number;
  // font
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  title?: boolean;
  header?: boolean;
  body?: boolean;
  caption?: boolean;
  small?: boolean;
  button?: boolean;
  caption2?: boolean;
  // custom
  size?: number;
  transform?: Transform;
  align?: Align;
  weight?: Weight;
  regular?: boolean;
  bold?: boolean;
  bolditalic?: boolean;
  semibold?: boolean;
  medium?: boolean;
  thin?: boolean;
  center?: boolean;
  right?: boolean;
  left?: boolean;
  spacing?: number;
  height?: number;
  color?: Color;
  sx?: StyleProp<TextStyle>; // customStyle
  children?: any;
  lineThrough?: boolean;
  italic?: boolean;
  fontFamily?: string;
  border?: boolean;
  writeHand?: boolean;
}

export default function Typography(props: TypographyProps) {
  const {
    onTouchableOpacity,
    onPress,
    opacity,
    h1,
    h2,
    h3,
    h4,
    title,
    header,
    body,
    caption,
    caption2,
    small,
    size = 14,
    height = 21,
    transform,
    align,
    regular,
    bold,
    bolditalic,
    semibold,
    medium,
    weight,
    thin,
    center,
    right,
    left,
    spacing,
    color = 'default',
    sx: customStyle,
    children,
    lineThrough,
    italic,
    button,
    fontFamily,
    border,
    writeHand,
  } = props;

  const textStyles: StyleProp<TextStyle>[] = [
    styles.text,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    h4 && styles.h4,
    title && styles.title,
    header && styles.header,
    body && styles.body,
    caption && styles.caption,
    caption2 && styles.caption2,
    small && styles.small,
    button && styles.button,
    !!size && {fontSize: size},
    transform && {textTransform: transform},
    align && {textAlign: align},
    !!height && {lineHeight: height},
    !!spacing && {letterSpacing: spacing},
    !!weight && styles[weight],
    regular && styles.regular,
    bold && styles.bold,
    bolditalic && styles.bolditalic,
    semibold && styles.semibold,
    medium && styles.medium,
    thin && styles.thin,
    center && styles.center,
    right && styles.right,
    left && styles.left,
    color && styles[color],
    lineThrough && styles.lineThrough,
    italic && styles.italic,
    fontFamily ? {fontFamily: fontFamily} : {},
    writeHand && {
      fontFamily: Theme.fontFamily.MerriweatherBold,
    },
    customStyle, // rewrite predefined styles
  ];

  if (!!onTouchableOpacity) {
    return (
      <OpacityPressable
        // activeOpacity={opacity || 0.7}
        onPress={onTouchableOpacity}>
        <Text style={textStyles} {...props}>
          {children}
        </Text>
        {border && (
          <Block
            absolute
            bgcolor={Colors.primary}
            height={2}
            radius={2}
            sx={{
              left: 0,
              right: 4,
              bottom: 0,
            }}
          />
        )}
      </OpacityPressable>
    );
  }

  return (
    <Text style={textStyles} {...props} onPress={onPress}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  // default style
  text: {
    ...Theme.fonts.text,
  },
  lineThrough: {
    color: Colors.dark300,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  // style
  italic: {
    fontFamily: Theme.fontFamily.PoppinsItalic,
  },
  // variations
  regular: {
    fontFamily: Theme.fontFamily.PoppinsRegular,
  },
  bold: {
    fontFamily: Theme.fontFamily.PoppinsBold,
  },
  bolditalic: {
    fontFamily: Theme.fontFamily.PoppinsBoldItalic,
  },
  semibold: {
    fontFamily: Theme.fontFamily.PoppinsSemiBold,
  },
  medium: {
    fontFamily: Theme.fontFamily.PoppinsMedium,
  },
  thin: {
    fontFamily: Theme.fontFamily.PoppinsThin,
  },
  // weight
  normal: {
    fontFamily: Theme.fontFamily.PoppinsRegular,
  },
  '100': {
    fontFamily: Theme.fontFamily.PoppinsExtraLight,
  },
  '200': {
    fontFamily: Theme.fontFamily.PoppinsLight,
  },
  '300': {
    fontFamily: Theme.fontFamily.PoppinsThin,
  },
  '400': {
    fontFamily: Theme.fontFamily.PoppinsRegular,
  },
  '500': {
    fontFamily: Theme.fontFamily.PoppinsMedium,
  },
  '600': {
    fontFamily: Theme.fontFamily.PoppinsSemiBold,
  },
  '700': {
    fontFamily: Theme.fontFamily.PoppinsBold,
  },
  '800': {
    fontFamily: Theme.fontFamily.PoppinsExtraBold,
  },
  '900': {
    fontFamily: Theme.fontFamily.PoppinsBlack,
  },
  // position
  center: {textAlign: 'center'},
  right: {textAlign: 'right'},
  left: {textAlign: 'left'},
  // colors
  default: {color: Colors.font},
  primary: {color: Colors.primary},
  secondary: {color: Colors.secondary},
  black: {color: Colors.black},
  white: {color: Colors.white},
  gray: {color: Colors.gray},
  light: {color: Colors.light},
  dark: {color: Colors.dark},
  danger: {color: Colors.danger},
  // fonts
  h1: Theme.fonts.h1,
  h2: Theme.fonts.h2,
  h3: Theme.fonts.h3,
  h4: Theme.fonts.h4,
  header: Theme.fonts.header,
  title: Theme.fonts.title,
  body: Theme.fonts.body,
  caption: Theme.fonts.caption,
  caption2: Theme.fonts.caption2,
  small: Theme.fonts.small,
  button: Theme.fonts.button,
});
