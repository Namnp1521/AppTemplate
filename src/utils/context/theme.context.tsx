import {StorageUtilities} from '@utils';
import React, {useEffect, useState} from 'react';
import {Strings} from '@constants';

export interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export interface ThemeContextProviderProps {
  children?: any;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  darkMode: false,
  setDarkMode: (darkMode: boolean) => {},
});

export const ThemeContextProvider = (props: ThemeContextProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    StorageUtilities.setData(Strings.Storage.DARK_MODE, {value: darkMode});
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
