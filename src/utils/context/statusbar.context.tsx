import {Colors} from '@constants';
import React, {useState} from 'react';
import {Animated, ColorValue, StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

export interface StatusbarContextType {
  backgroundColor: (value: ColorValue) => void;
  translucent: (value: boolean) => void;
  darkStyle: (value: boolean) => void;
  setTransStyle: (value: boolean) => void;
}

export interface StatusbarProviderProps {
  children?: any;
}

export const StatusbarContext = React.createContext<StatusbarContextType>({
  backgroundColor: () => {},
  translucent: () => {},
  darkStyle: () => {},
  setTransStyle: () => {},
});

export const StatusbarContextProvider = (props: StatusbarProviderProps) => {
  const [bgValue, backgroundColor] = useState<ColorValue>(Colors.transparent);
  const [transValue, translucent] = useState(true);
  const [darkStyleValue, darkStyle] = useState(true);

  const setTransStyle = (isDark: boolean) => {
    backgroundColor(Colors.transparent);
    translucent(true);
    darkStyle(isDark);
  };

  const AnimatedStatusBar = Animated.createAnimatedComponent(StatusBar);

  return (
    <StatusbarContext.Provider
      value={{
        backgroundColor,
        translucent,
        darkStyle,
        setTransStyle,
      }}>
      <AnimatedStatusBar
        animated
        backgroundColor={bgValue}
        translucent={transValue}
        barStyle={darkStyleValue ? 'dark-content' : 'light-content'}
      />
      <SafeAreaProvider>{props.children}</SafeAreaProvider>
    </StatusbarContext.Provider>
  );
};
