import {Colors} from '@constants';
import React, {useEffect, useState} from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Block, Input, Text} from '../common';
import {KeyboardTypeOptions, Platform} from 'react-native';

export interface IEditTextProps {
  title?: string;
  value?: string;
  defaultValue?: string;
  onChangeText: (value: string) => void;
  maxLength?: number | undefined;
  error?: string;
  multiline?: boolean;
  bold?: boolean;
  required?: boolean;
  rightView?: any;
  keyboardType?: KeyboardTypeOptions;
}

export default function EditText(props: IEditTextProps) {
  const {
    title,
    value,
    onChangeText,
    maxLength,
    error,
    multiline,
    bold,
    defaultValue,
    required,
    rightView,
    keyboardType,
  } = props;

  const [focus, setFocus] = useState(false);

  if (!title) {
    return (
      <Block>
        <Input
          border
          bgColor={Colors.white}
          error={error || ''}
          value={value}
          defaultValue={defaultValue}
          onChangeText={onChangeText}
          color={Colors.secondary}
          selectionColor={Colors.primary}
          height={multiline ? 141 : undefined}
          sx={{
            fontSize: 16,
            paddingLeft: 18,
            paddingRight: 18,
            paddingTop: 18,
            paddingBottom: 18,
          }}
          maxLength={maxLength}
          multiline={!!multiline}
          bold={bold}
          alighTop
          keyboardType={keyboardType || 'default'}
        />
      </Block>
    );
  }

  return (
    <Block>
      <Block row>
        <Text size={14} sx={{color: Colors.black}}>
          {title}
          {'  '}
        </Text>
        {!!required && (
          <Block>
            <Text size={14} sx={{color: Colors.red}}>
              *
            </Text>
          </Block>
        )}
      </Block>
      <Block mt={8}>
        <Input
          bgColor={Colors.transparent}
          error={error || ''}
          value={value}
          defaultValue={defaultValue}
          onChangeText={onChangeText}
          color={Colors.black}
          selectionColor={Colors.primary}
          // height={multiline ? 141 : undefined}
          sx={{
            fontSize: 16,
            paddingTop: 15,
            paddingBottom: Platform.OS === 'android' ? 15 : 15,
            paddingLeft: 16,
            paddingRight: rightView ? 16 : 0,
            borderColor: Colors.gray,
          }}
          maxLength={maxLength}
          multiline={!!multiline}
          bold={bold}
          alighTop
          border
          borderRadius={12}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          keyboardType={keyboardType || 'default'}
        />

        {rightView && <>{rightView}</>}
      </Block>
    </Block>
  );
}
