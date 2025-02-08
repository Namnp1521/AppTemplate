import React, {useState} from 'react';
import {Modal} from '@components';
import {ModalProps} from 'src/common/components/control/Modal';

export interface ModalContextType {
  showModal: (value: ModalProps) => void;
}

export interface ModalContextProviderProps {
  children?: any;
}

export const ModalContext = React.createContext<ModalContextType>({
  showModal: () => {},
});

export const ModalContextProvider = (props: ModalContextProviderProps) => {
  const [data, showModal] = useState<ModalProps | null>(null);

  return (
    <ModalContext.Provider
      value={{
        showModal,
      }}>
      {props.children}
      {!!data && (
        <Modal
          titleCancel={data.titleCancel}
          titleOK={data.titleOK}
          detail={data.detail}
          onCancel={() => {
            data.onCancel && data.onCancel();
            showModal(null);
          }}
          onOK={() => {
            data.onOK && data.onOK();
            showModal(null);
          }}
        />
      )}
    </ModalContext.Provider>
  );
};
