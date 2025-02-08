import {Colors, Theme} from '@constants';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {Block, Text} from '../common';

export interface IEditTextProps {
  title: string;
  required?: boolean;
  // items: string[];
  value: string | null;
  onSelectItem: (item: any) => void;
  label?: string;
  items: {label: string; value: string}[];
  placeholder?: string;
  dropDownLable?: string;
  isTypeLabel?: boolean;
  isRequired?: boolean;
  onChangeValue?: any;
  isEnabled?: boolean;
  isDisabled?: boolean;
  multiple?: boolean;
  dropdownHeight?: number;
}

export default function SelectInput(props: IEditTextProps) {
  const {title, required, onSelectItem, dropdownHeight} = props;

  const [isOpen, setOpen] = useState(false);

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
      {/* <OpacityPressable onPress={() => setOpen(!isOpen)}>
        <Block
          mt={8}
          radius={12}
          padding={[15, 16]}
          bgcolor={Colors.white}
          sx={{
            borderWidth: 1,
            borderColor: Colors.gray,
          }}>
          <Block flex row center>
            <Block flex row center>
              {value ? (
                <Text size={16}>{value}</Text>
              ) : (
                <Text size={16}> </Text>
              )}
            </Block>
            <Block>
              <IconWrap
                isNoWrap
                icon={isOpen ? Images.ICON.ArrowDown : Images.ICON.ArrowDown}
                color={Colors.black}
                size={18}
              />
            </Block>
          </Block>
        </Block>
      </OpacityPressable> */}
      {/* {isOpen && (
        <Block
          absolute
          sx={{top: 44, left: 0, right: 0}}
          radius={8}
          padding={8}
          bgcolor={Colors.dark100}>
          {items.map((item, i) => (
            <ScalePressable
              key={`item_${item}_${i}`}
              noFlex
              onPress={() => onChageValue(item)}>
              <Block
                padding={8}
                radius={8}
                bgcolor={value === item ? Colors.dark900 : Colors.transparent}>
                <Text>{item}</Text>
              </Block>
            </ScalePressable>
          ))}
        </Block>
      )} */}
      <Block mt={8}>
        <DropDownPicker
          open={isOpen}
          setOpen={setOpen}
          {...props}
          multiple={false}
          onSelectItem={onSelectItem}
          setValue={() => {}}
          onChangeValue={() => {}}
          dropDownDirection="TOP"
          textStyle={{
            fontSize: 16,
            fontFamily: Theme.fontFamily.PoppinsRegular,
          }}
          style={{
            borderColor: Colors.gray,
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 16,
            paddingRight: 16,
          }}
          dropDownContainerStyle={{
            height: dropdownHeight,
          }}
        />
      </Block>
    </Block>
  );
}
