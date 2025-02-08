import {Block, Text} from '@components';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';

export interface CounterProps {
  defaultValue: number;
  action?: (quantity: number) => void;
}

export default function Counter(props: CounterProps) {
  const {defaultValue, action} = props;

  const [num, setNum] = useState(defaultValue);

  useEffect(() => {
    setNum(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    action && action(num);
  }, [num]);

  return (
    <Block row>
      <TouchableOpacity onPress={() => num > 1 && setNum(num - 1)}>
        <Block
          width={30}
          height={30}
          center
          middle
          color={'primary'}
          radius={30}>
          <Text color={'white'} body>
            -
          </Text>
        </Block>
      </TouchableOpacity>
      <Block width={50} height={30} center middle>
        <Text body>{num}</Text>
      </Block>
      <TouchableOpacity onPress={() => setNum(num + 1)}>
        <Block
          width={30}
          height={30}
          center
          middle
          color={'primary'}
          radius={30}>
          <Text color={'white'} body>
            +
          </Text>
        </Block>
      </TouchableOpacity>
    </Block>
  );
}
