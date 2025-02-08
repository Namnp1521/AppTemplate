import React from 'react';
import {useSelector} from 'react-redux';
import AuthNavigation from './auth.navigation';
import UnauthNavigation from './unauth.navigation';
import {RootState} from '@utils';

const AppNavigation = () => {
  const authStatus = useSelector((state: RootState) => state.login.isLogin);

  return authStatus ? <AuthNavigation /> : <UnauthNavigation />;
};

export default AppNavigation;
