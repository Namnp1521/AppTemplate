import React, {useState} from 'react';

export interface BottomBarStatusContextType {
  curTab: number;
  setCurTab: (value: number) => void;
  initTab: number;
  setInitTab: (value: number) => void;
}

export interface BottomBarStatusProviderProps {
  children?: any;
}

export const BottomBarStatusContext =
  React.createContext<BottomBarStatusContextType>({
    curTab: 0,
    setCurTab: () => {},
    initTab: 0,
    setInitTab: () => {},
  });

export const BottomBarStatusContextProvider = (
  props: BottomBarStatusProviderProps,
) => {
  const [curTab, setCurTab] = useState(0);
  const [initTab, setInitTab] = useState(0);

  return (
    <BottomBarStatusContext.Provider
      value={{curTab, setCurTab, initTab, setInitTab}}>
      {props.children}
    </BottomBarStatusContext.Provider>
  );
};
