import loginReducer from '@modules/Authentication/reducer/Login.reducer';
import homeReducer from '@modules/Home/reducer/Home.reducer';
import inventoryReducer from '@modules/Inventory/reducer/Inventory.reducer';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    // onboarding: onboardingReducer,
    // new
    home: homeReducer,
    inventory: inventoryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type RootStackParamList = {
  // AddNickname: {
  //   hideBack: boolean;
  // };
};
