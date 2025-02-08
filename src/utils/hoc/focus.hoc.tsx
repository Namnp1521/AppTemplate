import {Block} from '@components';
import {Colors} from '@constants';
import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';

export default function withFocus(
  Component: React.FC | ((props: any) => JSX.Element),
) {
  function FocuxComponent(props: any) {
    const isFocus = useIsFocused();

    let timeout = useRef<NodeJS.Timeout>();
    const [interactionsComplete, setinteractionsComplete] = useState(false);

    useEffect(() => {
      if (isFocus) {
        timeout.current && clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
          setinteractionsComplete(true);
        }, 100);
      } else {
        setinteractionsComplete(false);
      }

      return () => timeout.current && clearTimeout(timeout.current);
    }, [isFocus]);

    if (!interactionsComplete) {
      return (
        <Block
          flex
          center
          middle
          sx={{
            backgroundColor: Colors.white,
          }}></Block>
      );
    }

    return <Component {...props} />;
  }

  return FocuxComponent;
}
