import {Block, Image, ScaleButton, Text} from '@components';
import {Colors, WIDTH_SCREEN} from '@constants';
import React from 'react';
import {useTranslation} from 'react-i18next';

export interface IEmptyScreen {
  detail?: string;
  btnTitle: string;
  onPress: () => void;
  img: any;
  color?: string;
}

export default function EmptyScreen(props: IEmptyScreen) {
  const {detail, btnTitle, onPress, img, color} = props;
  const {t} = useTranslation();

  const width = Math.min(WIDTH_SCREEN * 0.4, 500);
  const height = (width * 392) / 500;

  /** render */
  return (
    <Block flex>
      <Block flex>
        <Block center mt={38}>
          <Image source={img} width={width} height={height} />
        </Block>
        <Block mt={24} center margin={[0, 60]}>
          <Text
            size={14}
            center
            sx={{
              color: color || Colors.darkBlue,
            }}>
            {t('PROFILE_TAB_EMPTY_TITLE_COMMON')}
          </Text>
        </Block>
        {detail && (
          <Block mt={8} center margin={[0, 60]}>
            <Text
              size={14}
              center
              sx={{
                color: color || Colors.darkBlue,
              }}>
              <Text
                size={14}
                center
                sx={{
                  color: color || Colors.darkBlue,
                }}>
                {detail}
              </Text>
            </Text>
          </Block>
        )}
        <Block mt={24} center middle>
          <Block width={'60%'}>
            <ScaleButton status="active" onPress={onPress}>
              <Text
                button
                sx={{
                  color: Colors.white,
                }}>
                {btnTitle}
              </Text>
            </ScaleButton>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}
