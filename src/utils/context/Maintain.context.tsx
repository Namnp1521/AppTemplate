import NetInfo from '@react-native-community/netinfo';
import React, {useEffect, useState} from 'react';
import MaintainScreen from './Maintain/MaintainScreen';

export interface IMaintainContext {
  showMaintain: () => void;
}

export interface IMaintainProviderProps {
  children?: any;
}

export const MaintainContext = React.createContext<IMaintainContext>({
  showMaintain: () => {},
});

export const MaintainProvider = (props: IMaintainProviderProps) => {
  const [isShow, setShow] = useState<boolean>(false);
  const [isLostConnection, setLostConnection] = useState<boolean>(false);

  const showMaintain = () => {
    setShow(true);
  };

  const hideMaintain = () => {
    setShow(false);
  };

  // check internet
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        setLostConnection(true);
        setShow(true);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <MaintainContext.Provider
      value={{
        showMaintain: showMaintain,
      }}>
      {props.children}
      <MaintainScreen
        visible={isShow}
        onHide={hideMaintain}
        isLostConnection={isLostConnection}
      />
    </MaintainContext.Provider>
  );
};
