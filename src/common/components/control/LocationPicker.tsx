import {Colors, Images} from '@constants';
import React, {useState} from 'react';
import {Block, IconWrap, OpacityPressable, Text} from '../common';

export interface LocationPickerProps {
  title?: string;
  required?: boolean;
  onChangeValue: (value: any) => void;
}

export default function LocationPicker(props: LocationPickerProps) {
  const {title, required, onChangeValue} = props;

  const [open, setOpen] = useState(false);

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
        <OpacityPressable onPress={() => setOpen(!open)}>
          <Block
            row
            center
            middle
            padding={[15, 16]}
            radius={12}
            sx={{
              borderWidth: 1,
              borderColor: Colors.gray,
            }}>
            <Block flex>
              <Text size={16} color={'black'}></Text>
            </Block>
            <Block>
              <IconWrap
                icon={Images.ICON.Location}
                size={18}
                color={Colors.black}
              />
            </Block>
          </Block>
        </OpacityPressable>
      </Block>
    </Block>
  );
}
