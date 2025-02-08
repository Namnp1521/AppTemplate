import {Colors, Images} from '@constants';
import React from 'react';
import {
  Block,
  IconWrap,
  OpacityPressable,
  ScalePressable,
  Text,
} from '../common';
import {useDocumentPicker} from '@utils';

export interface IAddPDFFile {
  title?: string;
  required?: boolean;
}

export default function AddPDFFile(props: IAddPDFFile) {
  const {title, required} = props;

  const {fileUri, pickPdf, clearImg} = useDocumentPicker();

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
        <OpacityPressable onPress={pickPdf}>
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
            <Block flex row center>
              <IconWrap icon={Images.ICON.Pdf} />
              <Text size={16} color={'black'}></Text>
            </Block>
            <Block>
              <IconWrap
                icon={Images.ICON.Export}
                size={18}
                color={Colors.black}
              />
            </Block>
          </Block>
        </OpacityPressable>
      </Block>
    </Block>
  );

  return (
    <ScalePressable sx={{flex: 0}} onPress={() => {}}>
      <Block
        center
        middle
        radius={16}
        padding={16}
        sx={{
          borderWidth: 1,
          borderStyle: 'dashed',
          borderColor: Colors.primary,
        }}>
        <IconWrap isNoWrap icon={Images.ICON.Export} color={Colors.primary} />
        <Block mt={8}>
          <Text>Add a PDF file</Text>
        </Block>
      </Block>
    </ScalePressable>
  );
}
