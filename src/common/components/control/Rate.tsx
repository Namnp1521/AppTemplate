import React from 'react';
import {Colors} from '@constants';
import {Block} from '../common';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const RATE_MAX = 4;
export const DEFAUL_SIZE = 18;

export interface RateProps {
  rate: number;
  size?: number;
}

export default function Rate(props: RateProps) {
  const {rate, size} = props;

  const renderStar = (starNum: number, color: string) => {
    return (
      <>
        {Array.from(Array(starNum)).map(i => (
          <Block margin={4} key={Math.random()}>
            {/* <FontAwesome
              name={'circle'}
              color={color}
              size={size || DEFAUL_SIZE}
            /> */}
          </Block>
        ))}
      </>
    );
  };

  const renderFullStar = () => {
    let starNum = Math.floor(rate);
    return renderStar(starNum, Colors.primary);
  };

  // const renderHalfStar = () => {
  //   let starNum = Math.ceil(rate) - Math.floor(rate);
  //   return renderStar(starNum, 'star-half-empty');
  // };

  const renderEmptyStar = () => {
    let starNum = RATE_MAX - Math.ceil(rate);
    return renderStar(starNum, Colors.light300);
  };

  return (
    <Block row>
      {renderFullStar()}
      {/* {renderHalfStar()} */}
      {renderEmptyStar()}
    </Block>
  );
}
