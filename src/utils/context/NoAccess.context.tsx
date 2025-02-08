import React, {useEffect, useState} from 'react';
import NoAccessScreen from './NoAccess/NoAccessScreen';

export interface INoAccessContext {
  showNoAccess: () => void;
}

export interface INoAccessProviderProps {
  children?: any;
}

export const NoAccessContext = React.createContext<INoAccessContext>({
  showNoAccess: () => {},
});

export const NoAccessProvider = (props: INoAccessProviderProps) => {
  const [isShow, setShow] = useState<boolean>(false);
  // const {logOut} = useLogout();

  const showNoAccess = () => {
    setShow(true);
  };

  const hideNoAccess = () => {
    // logOut();
    setShow(false);
  };

  const getSettings = async () => {};

  useEffect(() => {
    getSettings();
  }, []);

  return (
    <NoAccessContext.Provider
      value={{
        showNoAccess: showNoAccess,
      }}>
      {props.children}
      <NoAccessScreen visible={isShow} onHide={hideNoAccess} />
    </NoAccessContext.Provider>
  );
};
