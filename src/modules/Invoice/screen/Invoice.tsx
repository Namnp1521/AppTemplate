import {
  AddPDFFile,
  Block,
  CalendarPicker,
  Container,
  EditText,
  Header,
  Loader,
  ScaleButton,
  Text,
} from '@components';
import {MomentUtilities, withOptimize} from '@utils';
import React from 'react';
import Animated, {FadeIn} from 'react-native-reanimated';
import {useAddInvoice} from '../hook/Invoice.hook';

function Invoice() {
  /** props */
  const {newData, onChangeValue, onCreate, loadingSave} = useAddInvoice();

  /** render */
  return (
    <Block flex>
      <Container>
        <Animated.View entering={FadeIn.delay(0).duration(600)}>
          <Block margin={[0, 20]} mb={20}>
            <EditText
              title={'Invoice number'}
              value={(newData.invoice_number || 0) + ''}
              onChangeText={value =>
                onChangeValue('invoice_number', parseInt(value))
              }
              keyboardType="numeric"
            />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <EditText
              title={'Vendor name'}
              value={newData.vendor_name || ''}
              onChangeText={value => onChangeValue('vendor_name', value)}
            />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <CalendarPicker
              title={'Receive date'}
              onChangeDate={date =>
                onChangeValue(
                  'receiving_date',
                  MomentUtilities.formatDateYYYYMMDD(date),
                )
              }
            />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <CalendarPicker
              title={'Paid date'}
              onChangeDate={date =>
                onChangeValue(
                  'paid_date',
                  MomentUtilities.formatDateYYYYMMDD(date),
                )
              }
            />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <EditText
              title={'Sale credit'}
              value={(newData.credit_sale || 0) + ''}
              onChangeText={value =>
                onChangeValue('credit_sale', parseInt(value))
              }
              keyboardType="numeric"
            />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <EditText
              title={'Sale cash'}
              value={(newData.cash_sale || 0) + ''}
              onChangeText={value =>
                onChangeValue('cash_sale', parseInt(value))
              }
              keyboardType="numeric"
            />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <AddPDFFile title={'View invoice'} />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <AddPDFFile title={'Upload invoice'} />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <ScaleButton
              roundCorner
              color={'primary'}
              status={loadingSave ? 'disabled' : 'active'}
              height={48}
              loading={loadingSave}
              onPress={onCreate}>
              <Text size={16} weight="500" color="white">
                Create
              </Text>
            </ScaleButton>
          </Block>
        </Animated.View>
      </Container>
      <Header isBack title={'Invoice'} />
      <Loader cover loading={loadingSave} />
    </Block>
  );
}

export default withOptimize(Invoice);
