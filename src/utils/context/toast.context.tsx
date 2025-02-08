import 'react-native-get-random-values';
import {Toast} from '@components';
import {BOTTOM_BAR_HEIGHT} from '@constants';
import React, {createRef, useState} from 'react';
import {Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {v4 as uuidv4} from 'uuid';

export interface ToastContextType {
  showToast: (text: string, type: 'success' | 'error', icon?: string) => void;
}

export interface ToastContextProviderProps {
  children?: any;
}

export const ToastContext = React.createContext<ToastContextType>({
  showToast: () => {},
});

export const ToastContextProvider = (props: ToastContextProviderProps) => {
  const {bottom} = useSafeAreaInsets();

  const [toastRefs, setToastRefs] = useState<
    {
      id: string;
      ref: any;
      info: {icon: string | undefined; text: string; type: 'success' | 'error'};
    }[]
  >([]);

  const showToast = (
    text: string,
    type: 'success' | 'error',
    icon?: string,
  ) => {
    const newRef = createRef();
    toastRefs.push({id: uuidv4(), ref: newRef, info: {icon, text, type}});
    setToastRefs(toastRefs.slice());
  };

  const hideToast = (id: string) => {
    setToastRefs(prev => prev.filter(data => data.id !== id));
  };

  return (
    <ToastContext.Provider value={{showToast}}>
      {props.children}
      {toastRefs.map((data, index) => (
        <Toast
          key={`toast_${index}`}
          ref={data.ref}
          onHide={() => hideToast(data.id)}
          toastInfo={data.info}
          bottom={
            Platform.OS === 'ios'
              ? BOTTOM_BAR_HEIGHT + bottom
              : BOTTOM_BAR_HEIGHT
          }
        />
      ))}
    </ToastContext.Provider>
  );
};
