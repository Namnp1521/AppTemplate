import {Block, ScalePressable, Text} from '@components';
import {Colors} from '@constants';
import React from 'react';
import {FlatList} from 'react-native';
import {useCategories} from '../hook/Home.hook';

export interface ICategories {}

function Categories(props: ICategories) {
  const {} = props;

  /** state */
  const {allCategories, categoriSelected, onChangeValue} = useCategories();

  /** render */
  const renderCategory = ({item, index}: {item: string; index: number}) => {
    return (
      <ScalePressable onPress={() => onChangeValue(item)}>
        <Block
          radius={12}
          padding={[2.5, 10]}
          color={categoriSelected === item ? 'primary' : 'white'}
          sx={{
            borderWidth: 1,
            borderColor: Colors.primary,
          }}>
          <Text
            color={categoriSelected === item ? 'white' : 'primary'}
            size={14}>
            {item}
          </Text>
        </Block>
      </ScalePressable>
    );
  };

  return (
    <Block mt={24}>
      <Block margin={[0, 16]}>
        <Text size={16} weight="500">
          Categories
        </Text>
      </Block>
      <Block mt={16}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={allCategories}
          keyExtractor={x => x}
          renderItem={renderCategory}
          ItemSeparatorComponent={() => <Block width={15} />}
          contentContainerStyle={{
            paddingLeft: 20,
            paddingRight: 20,
          }}
        />
      </Block>
    </Block>
  );
}

export default Categories;
