import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {IInventory} from '../type/Inventory.type';

export interface IHomeState {
  inventories: IInventory[];
}

const initialState: IHomeState = {
  inventories: [],
};

export const InventorySlice = createSlice({
  name: 'Inventory',
  initialState,
  reducers: {
    initInventory: (state, action: PayloadAction<IInventory[]>) => {
      state.inventories = action.payload;
    },
    addInventory: (state, action: PayloadAction<IInventory>) => {
      state.inventories.push(action.payload);
    },
    clear: state => {
      state.inventories = [];
    },
  },
});

export const InventoryActions = InventorySlice.actions;
export default InventorySlice.reducer;
