import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ILoginState {
  isLogin: boolean;
  loginSucess: boolean;
}

const initialState: ILoginState = {
  isLogin: false,
  loginSucess: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: state => {
      state.isLogin = true;
    },
    logout: state => {
      state.isLogin = false;
      state.loginSucess = false;
    },
    updateLoginSucess: state => {
      state.loginSucess = true;
    },
  },
});

export const {login, logout} = loginSlice.actions;

export const LoginActions = loginSlice.actions;
export default loginSlice.reducer;
