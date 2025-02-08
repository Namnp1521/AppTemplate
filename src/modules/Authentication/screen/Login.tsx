import {Block} from '@components';
import {useAppDispatch, withOptimize} from '@utils';
import React, {useEffect} from 'react';
import {LoginActions} from '../reducer/Login.reducer';

function Login() {
  /** props */
  const dispatch = useAppDispatch();

  useEffect(() => {
    // TODO: demo
    dispatch(LoginActions.login());
  }, []);

  return <Block flex></Block>;
}

export default withOptimize(Login);
