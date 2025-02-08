import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {IProduct} from '../type/Home.type';

export interface IHomeState {
  loadingInit: boolean;
  products: IProduct[];
}

const initialState: IHomeState = {
  loadingInit: false,
  products: [],
};

export const HomeSlice = createSlice({
  name: 'Home',
  initialState,
  reducers: {
    updateLoadingInit: (state, action: PayloadAction<boolean>) => {
      state.loadingInit = action.payload;
    },
    initProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
    clear: state => {
      state.loadingInit = false;
    },
  },
});

export const HomeActions = HomeSlice.actions;
export default HomeSlice.reducer;
