import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TouchableOpacityProps,
  DimensionValue,
} from 'react-native';
import {Colors} from '@constants';
import {Block, Loader} from '.';
import LinearGradient from 'react-native-linear-gradient';

export type Color =
  | 'primary'
  | 'secondary'
  | 'white'
  | 'gray'
  | 'danger'
  | 'black'
  | 'transparent'
  | 'dark';

export type Status = 'normal' | 'active' | 'disabled';

export interface ButtonProps extends TouchableOpacityProps {
  opacity?: number;
  color?: Color;
  shadow?: boolean;
  width?: DimensionValue | number;
  status?: Status;
  sx?: StyleProp<ViewStyle>; //customStyle
  children?: any;
  height?: DimensionValue | number;
  round?: boolean;
  gradient?: boolean;
  roundCorner?: boolean;
  loading?: boolean;
}

export default function Button(props: ButtonProps) {
  const {
    sx: customStyle,
    opacity,
    color,
    shadow,
    width,
    children,
    status,
    height,
    round,
    gradient,
    loading,
    roundCorner = true,
  } = props;

  const buttonStyles: StyleProp<ViewStyle>[] = [
    round ? [styles.btn, styles.roundBtn] : styles.btn,
    shadow && styles.shadow,
    roundCorner && styles.roundCorner,
    !!height && {
      height: typeof height === 'number' ? height : height,
    },
    !!width && {
      width: typeof width === 'number' ? width : width,
    },
    color && styles[color], // predefined styles colors for backgroundColor
    status && styles[status],
    customStyle,
  ];

  return (
    <TouchableOpacity
      disabled={status === 'disabled' || loading}
      style={buttonStyles}
      activeOpacity={opacity || 0.7}
      {...props}>
      {gradient && (
        <Block absolute width={'100%'} height={'100%'}>
          <LinearGradient
            colors={[Colors.linear_bg1, Colors.linear_bg2]}
            style={{flex: 1}}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
          />
        </Block>
      )}
      {loading ? <Loader loading color="white" /> : children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 58,
    borderRadius: 8,
    backgroundColor: Colors.background,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundBtn: {
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  roundCorner: {
    borderRadius: 100,
  },

  primary: {backgroundColor: Colors.primary},
  secondary: {backgroundColor: Colors.secondary},
  black: {backgroundColor: Colors.black},
  white: {backgroundColor: Colors.white},
  gray: {backgroundColor: Colors.gray},
  dark: {backgroundColor: Colors.dark},
  danger: {backgroundColor: Colors.danger},
  transparent: {backgroundColor: Colors.transparent},
  normal: {
    backgroundColor: Colors.primary,
  },
  active: {
    backgroundColor: Colors.background,
  },
  disabled: {
    opacity: 0.2,
  },
});
