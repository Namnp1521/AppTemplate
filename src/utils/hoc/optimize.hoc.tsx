import {Block} from '@components';
import {Colors} from '@constants';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, InteractionManager} from 'react-native';

export default function withOptimize(
  Component: React.FC | ((props: any) => JSX.Element),
  bgcolor?: string,
  LoaderComponent?: React.FC | ((props: any) => JSX.Element),
) {
  function OptimizedComponent(props: any) {
    const [interactionsComplete, setinteractionsComplete] = useState(false);

    useEffect(() => {
      InteractionManager.runAfterInteractions(() => {
        setinteractionsComplete(true);
      });
    }, []);

    if (!interactionsComplete) {
      return (
        <Block
          flex
          center
          middle
          sx={{
            backgroundColor: bgcolor || Colors.white,
          }}>
          {!!LoaderComponent ? (
            <LoaderComponent />
          ) : (
            <ActivityIndicator size={'small'} color={Colors.primary} />
          )}
        </Block>
      );
    }

    return <Component {...props} />;
  }

  return OptimizedComponent;
}
