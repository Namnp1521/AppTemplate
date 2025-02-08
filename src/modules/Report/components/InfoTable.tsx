import {Block, Text} from '@components';
import React from 'react';
import {IProductSale} from '../type/Report';
import {CommonUtilities} from '@utils';
import {Colors} from '@constants';

export interface IInfoTable {}

function InfoTable(props: IInfoTable) {
  const {} = props;

  const headers = ['Product Name', 'Purchase', 'Sale', 'Profit/lost'];
  const data: IProductSale[] = [
    {
      id: '1',
      title: 'Iphone 16 pro',
      purchase: 1199,
      sale: 2200,
    },
    {
      id: '2',
      title: 'Iphone 15 pro',
      purchase: 1211,
      sale: 2300,
    },
    {
      id: '3',
      title: 'Iphone 16 pro max',
      purchase: 1023,
      sale: 1000,
    },
    {
      id: '4',
      title: 'Iphone 16 pro max',
      purchase: 1111,
      sale: 1000,
    },
  ];

  /** render */
  return (
    <Block mt={24}>
      <Block row color="primary" height={30}>
        {headers.map((header, index) => (
          <Block key={header} flex={index == 0 ? 3 : 2} center middle pr={10}>
            <Text size={14} color="white">
              {header}
            </Text>
          </Block>
        ))}
      </Block>
      {data.map(row => (
        <Block key={row.id} row color="white" height={30}>
          <Block flex={3} middle pr={10}>
            <Text size={14} color="primary">
              {row.title}
            </Text>
          </Block>
          <Block flex={2} middle pr={10}>
            <Text size={14} color="primary">
              $ {CommonUtilities.formatMoneyNumber(row.purchase, 'USD')}
            </Text>
          </Block>
          <Block flex={2} middle pr={10}>
            <Text size={14} color="primary">
              $ {CommonUtilities.formatMoneyNumber(row.sale, 'USD')}
            </Text>
          </Block>
          <Block flex={2} middle pr={10}>
            <Text
              size={14}
              sx={{
                color: row.sale - row.purchase > 0 ? Colors.green : Colors.red,
              }}>
              ${' '}
              {CommonUtilities.formatMoneyNumber(
                Math.abs(row.purchase - row.sale),
                'USD',
              )}
            </Text>
          </Block>
        </Block>
      ))}
    </Block>
  );
}

export default InfoTable;
