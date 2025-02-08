import React, {useState} from 'react';
import {
  Keyboard,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, Theme} from '@constants';
import {Block, Text} from '.';

export interface InputProps extends TextInputProps {
  secure?: boolean;
  error?: any;
  leftView?: any;
  rightView?: any;
  height?: number | string;
  sx?: StyleProp<TextStyle>; //sx
  color?: string;
  bgColor?: string;
  animated?: boolean;
  disable?: boolean;
  round?: boolean;
  border?: boolean;
  bold?: boolean;
  alighTop?: boolean;
  borderRadius?: number;
}

export default function Input(props: InputProps) {
  const {
    secure,
    error,
    sx,
    leftView,
    rightView,
    height,
    color,
    bgColor,
    animated,
    disable = false,
    round = false,
    border = false,
    bold = false,
    alighTop = false,
    borderRadius,
  } = props;

  const [toggleSecure, setToggleSecure] = useState(false);
  const [focus, setFocus] = useState(false);

  const inputStyles: StyleProp<TextStyle>[] = [
    Theme.fonts.text,
    styles.input,
    leftView && {paddingLeft: 0},
    {color: color || Colors.darkBlue},
    border && {
      borderWidth: 1,
      borderColor: Colors.primary,
    },
    bold ? {fontFamily: Theme.fontFamily.PoppinsBold} : {},
    alighTop
      ? {
          textAlignVertical: 'top',
        }
      : {},
    sx,
  ];

  const renderToggle = () => {
    if (!secure) {
      return null;
    }

    return (
      <TouchableOpacity
        style={styles.toggle}
        onPress={() => setToggleSecure(!toggleSecure)}>
        {/* <Ionicons
          color={!toggleSecure ? (!!color ? color : Colors.white) : Colors.gray}
          size={Theme.sizes.font * 1.35}
          name={!toggleSecure ? 'md-eye' : 'md-eye-off'}
        /> */}
      </TouchableOpacity>
    );
  };

  return (
    <Block column>
      <Block
        animated={animated}
        row
        center
        // card
        sx={[
          {
            backgroundColor: bgColor || Colors.white,
            opacity: disable ? 0.5 : 1,
          },
          round && {
            borderRadius: height || Theme.sizes.radius,
          },
          error && styles.errorBorder,
          // border && styles.focusBorder,
          !!height && {
            height: typeof height === 'number' ? height : height,
          },
          !!borderRadius && {
            borderRadius: borderRadius,
          },
          styles.container,
        ]}>
        <TextInput
          style={inputStyles}
          secureTextEntry={secure && !toggleSecure}
          autoCapitalize="none"
          selectionColor={Colors.primary}
          placeholderTextColor={Colors.white}
          blurOnSubmit={false}
          onSubmitEditing={() => Keyboard.dismiss()}
          textContentType={'oneTimeCode'}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          editable={!disable}
          selectTextOnFocus={!disable}
          {...props}
        />
        {renderToggle()}
        {leftView && (
          <Block absolute sx={{left: 20}}>
            {leftView}
          </Block>
        )}
        {rightView && (
          <Block margin={[0, Theme.sizes.padding / 2]}>{rightView}</Block>
        )}
      </Block>
      {error && (
        <Text color={'danger'} small>
          {error}
        </Text>
      )}
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.dark500,
    // borderBottomWidth: 1,
    // borderColor: Colors.primary,
    // overflow: 'hidden',
  },
  input: {
    flex: 1,
    color: Colors.secondary,
    // paddingLeft: Platform.OS === 'ios' ? 0 : -2,
    // paddingVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  toggle: {
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'flex-end',
    width: Theme.sizes.base * 2,
    height: Theme.sizes.base * 2,
    right: 5,
  },
  errorBorder: {
    borderWidth: 0.3,
    borderColor: Colors.danger,
  },
  focusBorder: {
    borderWidth: 0.3,
    borderColor: Colors.grey,
  },
});
