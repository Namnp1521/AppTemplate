import {
  Block,
  Container,
  EditText,
  Header,
  Loader,
  ScaleButton,
  SelectInput,
  Text,
} from '@components';
import {useAppSelector, withOptimize} from '@utils';
import React from 'react';
import Animated, {FadeIn} from 'react-native-reanimated';
import {initInventory, useAddInventory} from '../hook/Inventory.hook';
import _ from 'lodash';

function Inventory() {
  /** props */
  const products = useAppSelector(state => state.home.products);
  const inventories = useAppSelector(state => state.inventory.inventories);

  /** state */
  const {loading} = initInventory();
  const {newInventory, onChangeValue, onCreate, loadingSave} =
    useAddInventory();

  /** render */
  if (loading) {
    return (
      <Block flex color="white" center middle>
        <Loader loading />
      </Block>
    );
  }

  return (
    <Block flex>
      <Container>
        <Animated.View entering={FadeIn.delay(0).duration(600)}>
          <Block margin={[0, 20]} mb={20}>
            <EditText
              title={'Product ID'}
              value={newInventory.productId}
              onChangeText={value => onChangeValue('productId', value)}
            />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <SelectInput
              title={'Product name'}
              items={_.uniqBy(
                products.map(x => ({
                  label: x.productName,
                  value: x.productName,
                })),
                x => x.value,
              )}
              value={newInventory.productName || ''}
              onSelectItem={value =>
                onChangeValue('productName', value.value || '')
              }
              dropdownHeight={100}
            />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            {/* <SelectInput
              title={'Product color'}
              items={[]}
              value={newInventory.product_color || ''}
              onSelectItem={value =>
                onChangeValue('product_color', value.value || '')
              }
            /> */}
            <EditText
              title={'Product color'}
              value={newInventory.product_color || ''}
              onChangeText={value => onChangeValue('product_color', value)}
            />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <EditText
              title={'Day start'}
              value={(newInventory.startingInventory || 0) + ''}
              onChangeText={value =>
                onChangeValue('startingInventory', parseInt(value))
              }
              keyboardType="numeric"
            />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <SelectInput
              value={''}
              title={'Add inventory'}
              items={inventories.map(x => ({
                label: x.id + '',
                value: x.id + '',
              }))}
              onSelectItem={() => {}}
            />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <EditText
              title={'Used/Defect'}
              value={(newInventory.defectiveInventory || 0) + ''}
              onChangeText={value =>
                onChangeValue('defectiveInventory', parseInt(value))
              }
              keyboardType="numeric"
            />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <EditText
              title={'Remain inventory'}
              value={(newInventory.remainingInventory || 0) + ''}
              onChangeText={value =>
                onChangeValue('remainingInventory', parseInt(value))
              }
              keyboardType="numeric"
            />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            {/* <SelectInput
              title={'Location'}
              items={[]}
              value={newInventory.product_location || ''}
              onSelectItem={value =>
                onChangeValue('product_location', value.value || '')
              }
            /> */}
            <EditText
              title={'Location'}
              value={newInventory.product_location || ''}
              onChangeText={value => onChangeValue('product_location', value)}
            />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <SelectInput
              title={'Taken from'}
              items={[]}
              value={newInventory.takenFrom || ''}
              onSelectItem={value =>
                onChangeValue('takenFrom', value.value || '')
              }
            />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <SelectInput
              title={'Return to Origin'}
              items={[]}
              value={newInventory.returnToOrigin || ''}
              onSelectItem={value =>
                onChangeValue('returnToOrigin', value.value || '')
              }
            />
          </Block>
          <Block margin={[0, 20]} mb={20}>
            <EditText
              title={'Preorder'}
              value={newInventory.preOrder || ''}
              onChangeText={value => onChangeValue('preOrder', value)}
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
      <Header isBack title={'Inventory'} />
      <Loader cover loading={loadingSave} />
    </Block>
  );
}

export default withOptimize(Inventory);
