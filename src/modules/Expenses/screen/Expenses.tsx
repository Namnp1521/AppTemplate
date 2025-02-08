import {
  Block,
  CalendarPicker,
  Container,
  EditText,
  Header,
  Loader,
  ScaleButton,
  SelectInput,
  Text,
} from '@components';
import {MomentUtilities, withOptimize} from '@utils';
import React from 'react';
import Animated, {FadeIn} from 'react-native-reanimated';
import {useAddExpense} from '../hook/Expenses.hook';

function Expenses() {
  /** props */
  const {newData, onChangeValue, onCreate, loadingSave} = useAddExpense();

  /** render */
  return (
    <Block flex>
      <Container>
        <Animated.View entering={FadeIn.delay(0).duration(600)}>
          <Block margin={[0, 20]} mb={20}>
            <CalendarPicker
              title={'Paid date'}
              onChangeDate={date =>
                onChangeValue('date', MomentUtilities.formatDateYYYYMMDD(date))
              }
            />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <EditText
              title={'Amount'}
              value={(newData.amount || 0) + ''}
              onChangeText={value => onChangeValue('amount', parseInt(value))}
              keyboardType="numeric"
            />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <EditText
              title={'Category'}
              value={(newData.category || 0) + ''}
              onChangeText={value => onChangeValue('category', value)}
            />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <SelectInput
              title={'Employee name'}
              items={[]}
              value={''}
              onSelectItem={() => {}}
            />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <EditText
              title={'Salary'}
              value={(newData.amount || 0) + ''}
              onChangeText={value => onChangeValue('amount', parseInt(value))}
              keyboardType="numeric"
            />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <EditText title={'Rent'} onChangeText={value => {}} />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <SelectInput
              value={''}
              title={'Utility Bill'}
              items={[]}
              onSelectItem={() => {}}
            />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <SelectInput
              value={''}
              title={'Location'}
              items={[]}
              onSelectItem={() => {}}
            />
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
      <Header isBack title={'Expenses'} />
      <Loader cover loading={loadingSave} />
    </Block>
  );
}

export default withOptimize(Expenses);
