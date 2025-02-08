import {Block, Text} from '@components';
import {Colors} from '@constants';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';

export type NoticeType = 'success' | 'waring' | 'error';

export interface NoticeProps {
  message: string;
  show: boolean;
  hide: () => void;
  icon: string;
  type?: NoticeType;
}

export default function Notice(props: NoticeProps) {
  const {message, show, icon, type = 'error', hide} = props;

  const [colorStyle, setColorStyle] = useState(Colors.transparent);

  useEffect(() => {
    switch (type) {
      case 'success':
        setColorStyle(Colors.success);
        break;
      case 'error':
        setColorStyle(Colors.danger100);
        break;
      case 'waring':
        setColorStyle(Colors.warning);
        break;
      default:
        break;
    }
  }, [type]);

  if (!show) return null;

  return (
    <TouchableOpacity onPress={hide} activeOpacity={0.8}>
      <Block mb={10} center>
        <Text
          caption
          numberOfLines={3}
          center
          sx={{
            color: colorStyle,
          }}>
          {message}
        </Text>
      </Block>
    </TouchableOpacity>
  );
}
