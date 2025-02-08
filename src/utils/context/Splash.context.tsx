import {CommonUtilities, useAppDispatch} from '@utils';
import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';

export interface SplashContextType {
  isOnboarded: boolean;
  setOnboarded: (value: boolean) => void;
}

export interface SplashContextProviderProps {
  children?: any;
}

export const SplashContext = React.createContext<SplashContextType>({
  isOnboarded: false,
  setOnboarded: () => {},
});

export const SplashProvider = (props: SplashContextProviderProps) => {
  // const dispatch = useAppDispatch();

  const [isOnboarded, setOnboarded] = useState<boolean>(false);
  const [isHideSplash, setHideSplash] = useState(false);

  /** effect */
  useEffect(() => {
    initBeforeSplash();
  }, []);

  useEffect(() => {
    if (isHideSplash) {
      CommonUtilities.sleep(500).then(() => {
        SplashScreen.hide();
      });
    }
  }, [isHideSplash]);

  /** callback */
  const initBeforeSplash = async () => {
    try {
      setHideSplash(true);
      // const userId =
      //   (await StorageUtilities.getData(Strings.Storage.USER_ID))?.value || '';
      // if (!userId) {
      //   // auth().signOut();
      //   setHideSplash(true);
      //   return;
      // }

      // // Nếu ko có data của user thì logout
      // if (!userDoc.exists) {
      //   // auth().signOut();
      //   setHideSplash(true);
      //   return;
      // }

      // Nếu có thì dựa vào isOnboarded của user để ẩn MH Onboard đi
      // const isOnboarded = !!userDoc.data()?.profile?.isOnboarded;
      // setOnboarded(isOnboarded);
      // if (isOnboarded) {
      // dispatch(login());
      // } else {
      //   navigation.useNavigate(Routes.UNAUTH.ONBOARDING, {
      //     screen: Routes.ONBOARDING.ADD_NICKNAME,
      //     params: {
      //       hideBack: true,
      //     },
      //   });
      // }
    } catch (error) {
      console.log('initBeforeSplash', error);
    } finally {
      setHideSplash(true);
    }
  };

  /** render */
  return (
    <SplashContext.Provider
      value={{
        isOnboarded,
        setOnboarded,
      }}>
      {props.children}
    </SplashContext.Provider>
  );
};
