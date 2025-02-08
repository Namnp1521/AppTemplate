import {Block, ScaleButton, SVGImage, Text} from '@components';
import {Images, Theme} from '@constants';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Modal} from 'react-native';

export interface IMaintainScreenProps {
  visible: boolean;
  onHide: () => void;
  isLostConnection: boolean;
}

export default function MaintainScreen(props: IMaintainScreenProps) {
  /** props */
  const {visible, isLostConnection} = props;
  const {t} = useTranslation();

  const onRefresh = () => {
    // reload app
    // CodePush.restartApp();
    // RNRestart.Restart();
  };

  /** render */
  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      animationType="slide">
      <Block flex color="white" center middle>
        <Block center mt={-50}>
          <Text size={45} fontFamily={Theme.fontFamily.MerriweatherBold}>
            {t('NO_CONTENT_MAINTENANCE_TITLE')}
          </Text>
        </Block>
        <Block center margin={[16, 40, 20, 40]}>
          <Text size={16} center>
            {isLostConnection
              ? t('NO_CONTENT_LOST_CONNECTION_SUBTITLE')
              : t('NO_CONTENT_MAINTENANCE_SUBTITLE')}
          </Text>
        </Block>
        {isLostConnection && (
          <Block width={'60%'} mt={48}>
            <ScaleButton status="active" onPress={onRefresh}>
              <Text button color="white">
                {t('NO_CONTENT_LOST_CONNECTION_SUBTITLE_CTA')}
              </Text>
            </ScaleButton>
          </Block>
        )}
        <Block
          absolute
          center
          sx={{
            bottom: -70,
          }}>
          {/* <SVGImage
            source={Images.COMMON.CONFUSED_LOGO}
            width={207}
            height={261}
          /> */}
        </Block>
      </Block>
    </Modal>
  );
}
