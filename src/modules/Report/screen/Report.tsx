import {
  AddPDFFile,
  Block,
  CalendarPicker,
  Container,
  Header,
  LocationPicker,
  ScaleButton,
  SelectInput,
  Text,
} from '@components';
import {withOptimize} from '@utils';
import React from 'react';
import Animated, {FadeIn} from 'react-native-reanimated';
import InfoTable from '../components/InfoTable';

function Report() {
  /** props */

  /** render */
  return (
    <Block flex>
      <Container>
        <Animated.View entering={FadeIn.delay(0).duration(600)}>
          <Block margin={20} color="white" radius={12} shadow>
            <Block mt={20} margin={[0, 20]} mb={20}>
              <SelectInput
                value={''}
                title={'Inventory report'}
                items={[
                  {
                    label: 'Inventory report 1',
                    value: 'Inventory report 2',
                  },
                  {
                    label: 'Inventory report 2',
                    value: 'Inventory report 2',
                  },
                ]}
                onSelectItem={() => {}}
              />
            </Block>
            <Block margin={[0, 20]} mb={20}>
              <AddPDFFile title={'Sale report'} />
            </Block>
            <Block margin={[0, 20]} mb={20}>
              <SelectInput
                value={''}
                title={'Profit/lose'}
                items={[
                  {
                    label: 'Profit/lose 1',
                    value: 'Profit/lose 2',
                  },
                  {
                    label: 'Profit/lose 2',
                    value: 'Profit/lose 2',
                  },
                ]}
                onSelectItem={() => {}}
              />
            </Block>
          </Block>

          <Block margin={[0, 20]} mb={20}>
            <LocationPicker title={'Location'} onChangeValue={() => {}} />
          </Block>
          <Block margin={[0, 20]} mb={20} row center>
            <Block flex>
              <CalendarPicker
                isTitleInBorder
                title={'Start Date'}
                onChangeDate={() => {}}
              />
            </Block>
            <Block flex ml={20}>
              <CalendarPicker
                isTitleInBorder
                title={'Start Date'}
                onChangeDate={() => {}}
              />
            </Block>
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <InfoTable />
          </Block>

          <Block margin={20}>
            <ScaleButton
              color={'primary'}
              status={'active'}
              height={48}
              roundCorner>
              <Text size={16} weight="500" color="white">
                Create PDF
              </Text>
            </ScaleButton>
            <Block height={20} />
            <ScaleButton height={48} round roundCorner>
              <Text size={16} weight="500" color="primary">
                Export
              </Text>
            </ScaleButton>
          </Block>
        </Animated.View>
      </Container>
      <Header isBack title={'Report'} />
    </Block>
  );
}

export default withOptimize(Report);
