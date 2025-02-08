import {
  MaintainContext,
  RootState,
  TranslationContext,
  locale,
  updateLanguageByValue,
} from '@utils';
import React, {useContext, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

export interface UserLoginContextType {
  userId: string;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  isAuth: boolean;
}

export interface UserLoginProviderProps {
  children?: any;
}

const USER_DEFAULT: any = {};

export const UserLoginContext = React.createContext<UserLoginContextType>({
  userId: '',
  user: USER_DEFAULT,
  setUser: () => {},
  isAuth: false,
});

export const UserLoginContextProvider = (props: UserLoginProviderProps) => {
  /** state */
  const isLogin = useSelector((state: RootState) => state.login.isLogin);

  const {showMaintain} = useContext(MaintainContext);
  const {setLanguage} = useContext(TranslationContext);

  const [user, setUser] = useState<any>(USER_DEFAULT);
  const [userId, setUserId] = useState<string>('');

  /** ref */
  // const {logOut} = useLogout();

  /** callback */
  const getLoginUser = async () => {
    try {
    } catch (error) {
      console.log('updateUserLogin', error);
    }
  };

  /** effect */
  // khởi tạo data từ user login
  // useEffect(() => {
  //   if (isLogin) {
  //     getLoginUser();
  //   } else {
  //     setUser(USER_DEFAULT);
  //     setUserId('');
  //   }
  // }, [isLogin]);

  // default khi user mới setup app sẽ dựa theo ngôn ngữ máy
  // (nếu máy đang dùng tiếng Anh thì đặt settings default là English,
  // nếu khác tiếng Anh thì đặt settings là Vietnamese)
  useEffect(() => {
    const languageDisplay =
      user.internal?.languageDisplay ||
      (locale === 'en' ? 'en-us' : 'vi') ||
      'en-us';
    updateLanguageByValue(languageDisplay);
    setLanguage(languageDisplay);
  }, [user.internal?.languageDisplay]);

  /** render */
  return (
    <UserLoginContext.Provider
      value={{
        userId,
        user,
        setUser,
        // isAuth: !!auth().currentUser,
        isAuth: true, // TODO: demo
      }}>
      {props.children}
    </UserLoginContext.Provider>
  );
};
