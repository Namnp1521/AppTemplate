import {Colors} from '@constants';
import React from 'react';
import {Block, OpacityPressable, SVGImage, Text} from '../common';

export interface ItemProps {
  icon: any;
  title: string;
  onPress?: () => void;
}

export default function Item(props: ItemProps) {
  const {icon, title, onPress = () => {}} = props;

  return (
    <OpacityPressable onPress={onPress}>
      <Block width={'100%'} row padding={16}>
        <Block margin={[0, 16, 0, 0]}>
          <SVGImage
            source={icon}
            width={24}
            height={24}
            color={Colors.gray400}
          />
        </Block>
        <Text>{title}</Text>
      </Block>
    </OpacityPressable>
  );
}
