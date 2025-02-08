import {Block, IconWrap, Image, ScalePressable, Text} from '@components';
import {Colors, Images, WIDTH_SCREEN} from '@constants';
import {CommonUtilities, useAppSelector} from '@utils';
import React from 'react';
import {FlatList} from 'react-native';
import {IProduct} from '../type/Home.type';

export interface IProductList {}

function ProductList(props: IProductList) {
  const {} = props;

  /** state */
  const products = useAppSelector(state => state.home.products);

  /** render */
  const renderProduct = ({item, index}: {item: IProduct; index: number}) => {
    return (
      <ScalePressable>
        <Block height={94} radius={12} color={'white'} row shadow>
          <Block flex row>
            <Block
              radius={12}
              overflow
              width={WIDTH_SCREEN / 3}
              height={94}
              color="primary">
              {!!item.productImg && (
                <Image source={{uri: item.productImg}} full />
              )}
            </Block>
            <Block flex padding={[12, 16]}>
              <Block mr={10}>
                <Text color={'black'} size={16} weight="500" numberOfLines={1}>
                  {item.productName}
                </Text>
              </Block>
              <Block mt={6}>
                <Text color={'black'} size={14} numberOfLines={2}>
                  {item.description || ''} as a aaas asas asaa
                </Text>
              </Block>
              {!!item.productPrice && (
                <Block mt={12}>
                  <Text color={'primary'} size={16} weight="500">
                    ${' '}
                    {CommonUtilities.formatMoneyNumber(
                      item.productPrice,
                      'USD',
                    )}
                  </Text>
                </Block>
              )}
            </Block>

            <Block
              absolute
              sx={{
                top: 12,
                right: 12,
              }}>
              <IconWrap
                isNoWrap
                icon={Images.ICON.ArrowRight}
                size={18}
                color={Colors.black}
              />
            </Block>
          </Block>
        </Block>
      </ScalePressable>
    );
  };

  return (
    <Block>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={x => `product_${x.id}`}
        renderItem={renderProduct}
        ItemSeparatorComponent={() => <Block height={20} />}
        contentContainerStyle={{
          paddingTop: 24,
          paddingBottom: 24,
          paddingLeft: 20,
          paddingRight: 20,
        }}
        getItemLayout={(_, index) => ({
          length: 94,
          offset: 94 * index,
          index,
        })}
      />
    </Block>
  );
}

export default ProductList;
