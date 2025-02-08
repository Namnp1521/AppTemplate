import React from 'react';
import {
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  GestureResponderHandlers,
  GestureResponderEvent,
  LayoutChangeEvent,
  DimensionValue,
} from 'react-native';
import {Theme, Colors} from '@constants';
import Animated from 'react-native-reanimated';

export type Color =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'black'
  | 'white'
  | 'gray'
  | 'light'
  | 'dark'
  | 'danger'
  | 'transparent';

export type SpaceType = 'between' | 'around' | 'evenly';

export interface BlockProps {
  margin?: number | number[];
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  padding?: number | number[];
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  flex?: number | boolean;
  row?: boolean;
  column?: boolean;
  center?: boolean;
  top?: boolean;
  bottom?: boolean;
  middle?: boolean;
  left?: boolean;
  right?: boolean;
  card?: boolean;
  shadow?: boolean;
  color?: Color;
  space?: SpaceType;
  animated?: boolean;
  wrap?: boolean;
  height?: DimensionValue | number;
  minHeight?: DimensionValue | number;
  width?: DimensionValue | number;
  fullWidth?: boolean;
  radius?: number;
  absolute?: boolean;
  overflow?: boolean;
  sx?: StyleProp<ViewStyle>; //customStyle
  panHandlers?: GestureResponderHandlers;
  onTouchStart?: (event: GestureResponderEvent) => void;
  onLayout?: (event: LayoutChangeEvent) => void;
  pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto' | undefined;
  children?: any;
  bgcolor?: string;
  boxSizing?: boolean;
}

export default function Block(props: BlockProps) {
  const {
    absolute,
    overflow,
    margin,
    mt,
    ml,
    mb,
    mr,
    padding,
    pt,
    pb,
    pl,
    pr,
    flex,
    row,
    column,
    center,
    middle,
    left,
    right,
    top,
    bottom,
    card,
    shadow,
    color,
    space,
    animated,
    wrap,
    sx: customStyle,
    height,
    minHeight,
    width,
    radius,
    children,
    panHandlers,
    onTouchStart = () => {},
    onLayout = () => {},
    pointerEvents,
    fullWidth,
    bgcolor,
    boxSizing,
  } = props;

  const handleMargins = (): StyleProp<ViewStyle> => {
    if (typeof margin === 'number') {
      return {
        marginTop: margin,
        marginRight: margin,
        marginBottom: margin,
        marginLeft: margin,
      };
    }

    if (Array.isArray(margin)) {
      const marginSize = margin.length;
      switch (marginSize) {
        case 1:
          return {
            marginTop: margin[0],
            marginRight: margin[0],
            marginBottom: margin[0],
            marginLeft: margin[0],
          };
        case 2:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[0],
            marginLeft: margin[1],
          };
        case 3:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[1],
          };
        default:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[3],
          };
      }
    }
  };

  const handlePaddings = (): StyleProp<ViewStyle> => {
    if (typeof padding === 'number') {
      return {
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingLeft: padding,
      };
    }

    if (Array.isArray(padding)) {
      const paddingSize = padding.length;
      switch (paddingSize) {
        case 1:
          return {
            paddingTop: padding[0],
            paddingRight: padding[0],
            paddingBottom: padding[0],
            paddingLeft: padding[0],
          };
        case 2:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[0],
            paddingLeft: padding[1],
          };
        case 3:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[1],
          };
        default:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[3],
          };
      }
    }
  };

  const blockStyles: StyleProp<ViewStyle>[] = [
    styles.block,
    !!flex && typeof flex === 'number' && {flex},
    !flex && {flex: 0}, // reset / disable flex
    row && styles.row,
    column && styles.column,
    center && styles.center,
    middle && styles.middle,
    left && styles.left,
    right && styles.right,
    top && styles.top,
    bottom && styles.bottom,
    !!margin && handleMargins(),
    !!padding && handlePaddings(),
    !!mt && {marginTop: mt},
    !!mb && {marginBottom: mb},
    !!ml && {marginLeft: ml},
    !!mr && {marginRight: mr},
    !!pt && {paddingTop: pt},
    !!pb && {paddingBottom: pb},
    !!pl && {paddingLeft: pl},
    !!pr && {paddingRight: pr},
    card && styles.card,
    shadow && styles.shadow,
    space && {justifyContent: `space-${space}`},
    wrap && styles.wrap,
    !!height && {
      height: typeof height === 'number' ? height : height,
    },
    !!minHeight && {
      minHeight: minHeight,
    },
    !!width && {
      width: typeof width === 'number' ? width : width,
    },
    !!fullWidth && {width: '100%'},
    !!radius && {borderRadius: radius},
    absolute && styles.absolute,
    overflow && styles.overflow,
    color && !!styles[color] ? styles[color] : {backgroundColor: color},
    bgcolor ? {backgroundColor: bgcolor} : {},
    boxSizing ? {alignSelf: 'flex-start'} : {},
    customStyle, // rewrite predefined styles
  ];

  if (animated) {
    return (
      <Animated.View
        pointerEvents={pointerEvents}
        {...panHandlers}
        style={blockStyles}
        onLayout={onLayout}
        onTouchStart={onTouchStart}>
        {children}
      </Animated.View>
    );
  }

  return (
    <View
      style={blockStyles}
      onTouchStart={onTouchStart}
      onLayout={onLayout}
      pointerEvents={pointerEvents}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: Colors.transparent,
  },
  wrap: {flexWrap: 'wrap'},
  absolute: {position: 'absolute'},
  overflow: {overflow: 'hidden'},
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  card: {
    borderRadius: Theme.sizes.radius,
  },
  center: {
    alignItems: 'center',
  },
  top: {
    alignItems: 'flex-start',
  },
  bottom: {
    alignItems: 'flex-end',
  },
  middle: {
    justifyContent: 'center',
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 2,

    elevation: 2,
  },
  default: {backgroundColor: Colors.background},
  primary: {backgroundColor: Colors.primary},
  secondary: {backgroundColor: Colors.secondary},
  black: {backgroundColor: Colors.black},
  white: {backgroundColor: Colors.white},
  gray: {backgroundColor: Colors.gray},
  light: {backgroundColor: Colors.light},
  dark: {backgroundColor: Colors.dark},
  danger: {backgroundColor: Colors.danger},
  transparent: {backgroundColor: Colors.transparent},
});
