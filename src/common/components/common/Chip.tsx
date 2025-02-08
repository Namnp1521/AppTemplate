import {Block, Text} from '@components';
import {Colors, Theme} from '@constants';
import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  StyleSheet,
  GestureResponderEvent,
  DimensionValue,
} from 'react-native';

export interface ChipProps {
  text: string;
  width?: DimensionValue | number;
  height?: DimensionValue | number;
  customSyle?: StyleProp<ViewStyle>;
  status?: boolean;
  grow?: boolean;
  disable?: boolean;
  setStatus?: (active: boolean) => void;
}

export default function Chip(props: ChipProps) {
  /** props */
  const {
    text,
    width,
    height,
    customSyle,
    status,
    setStatus,
    grow,
    disable = true,
  } = props;

  /** state */
  const [active, setActive] = useState(false);

  /** effect */
  useEffect(() => {
    setActive(!!status);
  }, [status]);

  useEffect(() => {
    setStatus && setStatus(active);
  }, [active]);

  /** callback */
  const handlePress = (e: GestureResponderEvent) => {
    if (disable) return;
    setActive(!active);
  };

  /** render */
  const style: StyleProp<ViewStyle>[] = [
    styles.default,
    !!width && {width},
    !!height && {height},
    customSyle,
  ];

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePress}
      style={[
        grow && {
          flexGrow: 1,
        },
      ]}>
      <Block
        color="black"
        center
        middle
        sx={[
          style,
          !active && {
            borderColor: Colors.transparent,
          },
        ]}>
        {!active && (
          <Block
            absolute
            width={'100%'}
            height={'100%'}
            color="black"
            sx={{
              opacity: 0.15,
            }}
          />
        )}
        <Block padding={[0, 20]}>
          <Text
            center
            numberOfLines={1}
            sx={{
              color: active ? Colors.dark500 : Colors.white,
              fontFamily: Theme.fontFamily.PoppinsRegular,
            }}>
            {text}
          </Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  default: {
    height: 40,
    borderRadius: 40,
    overflow: 'hidden',
  },
});
