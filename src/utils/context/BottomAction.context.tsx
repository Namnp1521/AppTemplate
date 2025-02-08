import React, {useState} from 'react';
import 'react-native-get-random-values';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ActionBackdrop from './BottomAction/ActionBackdrop';
import BottomAction from './BottomAction/BottomAction';

export interface BottomActionContextType {
  showBottomAction: () => void;
}

export interface BottomActionContextProviderProps {
  children?: any;
}

export const BottomActionContext = React.createContext<BottomActionContextType>(
  {
    showBottomAction: () => {},
  },
);

export const BottomActionContextProvider = (
  props: BottomActionContextProviderProps,
) => {
  const {bottom} = useSafeAreaInsets();

  const [show, setShow] = useState(false);

  const showBottomAction = () => {
    setShow(true);
  };

  const hideBottomAction = () => {
    setShow(false);
  };

  return (
    <BottomActionContext.Provider value={{showBottomAction}}>
      {props.children}
      <ActionBackdrop isShowBTS={show} hideBTS={hideBottomAction} />
      <BottomAction isShowBTS={show} hideBTS={hideBottomAction} />
    </BottomActionContext.Provider>
  );
};
