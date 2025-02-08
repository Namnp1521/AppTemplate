import React from 'react';
import {Block, ScaleButton, SVGImage, Text} from '@components';
import {Modal} from 'react-native';
import {Images} from '@constants';
import {useTranslation} from 'react-i18next';

export interface INoAccessScreenProps {
  visible: boolean;
  onHide: () => void;
}

export default function NoAccessScreen(props: INoAccessScreenProps) {
  /** props */
  const {visible, onHide} = props;
  const {t} = useTranslation();

  /** render */
  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      animationType="slide">
      <Block flex color="light" center middle>
        <Block mt={-70} ml={-20} center>
          <SVGImage
            source={Images.COMMON.CONFUSED_LOGO}
            width={113}
            height={120}
          />
        </Block>
        <Block mt={24} center>
          <Text header size={40}>
            {t('NO_CONTENT_MAINTENANCE_TITLE')}
          </Text>
        </Block>
        <Block mt={8} mb={20} center>
          <Text caption2 center>
            Bạn không có quyền truy cập nội dung app
          </Text>
        </Block>
        <ScaleButton height={40} width={150} onPress={onHide}>
          <Text caption weight="500" color="white">
            {t('NO_CONTENT_MAINTENANCE_CTA')}
          </Text>
        </ScaleButton>
      </Block>
    </Modal>
  );
}
