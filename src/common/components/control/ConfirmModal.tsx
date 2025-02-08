import {Block, Loader, ScaleButton, Text} from '@components';
import {Colors, WIDTH_SCREEN} from '@constants';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Modal} from 'react-native';

export interface IConfirmModalProps {
  visible: boolean;
  onSubmit?: () => void;
  onCancel: () => void;
  title: string;
  detail: string;
  cancel?: string;
  submit?: string;
  submitColor?: string;
}

export default function ConfirmModal(props: IConfirmModalProps) {
  /** props */
  const {
    visible,
    onSubmit,
    onCancel,
    title,
    detail,
    cancel,
    submit,
    submitColor,
  } = props;
  const {t} = useTranslation();
  const [disabled, setDisabled] = useState(false);

  const onPressSubmit = async () => {
    if (disabled) return;
    setDisabled(true);
    if (!!onSubmit) {
      await onSubmit();
    }
    setDisabled(false);
  };

  /** render */
  return (
    <Modal
      visible={visible}
      animationType="fade"
      statusBarTranslucent
      transparent>
      <Block
        flex
        center
        middle
        sx={{
          backgroundColor: Colors.transparent60,
        }}>
        <Block
          radius={16}
          color="white"
          padding={32}
          center
          width={WIDTH_SCREEN - 40}>
          <Text h4 size={16} center>
            {title}
          </Text>
          <Block margin={[16, 0]} mb={48}>
            <Text size={16} center>
              {detail}
            </Text>
          </Block>

          {!!onSubmit && (
            <Block width={'80%'} mt={60}>
              <ScaleButton
                disabled={disabled}
                onPress={onPressSubmit}
                bgcolor={Colors.backgroundDark}
                status={disabled ? 'disabled' : 'active'}>
                <Block row center>
                  {disabled && (
                    <Block mr={10}>
                      <Loader loading />
                    </Block>
                  )}
                  <Text
                    h4
                    size={16}
                    sx={{
                      color: disabled ? Colors.grey : Colors.red,
                    }}>
                    {submit || title}
                  </Text>
                </Block>
              </ScaleButton>
            </Block>
          )}

          <Block
            width={'80%'}
            absolute
            sx={{
              bottom: !!onSubmit ? 100 : 14,
            }}>
            <ScaleButton
              disabled={disabled}
              onPress={onCancel}
              status={disabled ? 'disabled' : 'active'}>
              <Text h4 size={16} color="white">
                {cancel || t('GO_BACK')}
              </Text>
            </ScaleButton>
          </Block>
        </Block>
      </Block>
    </Modal>
  );
}
