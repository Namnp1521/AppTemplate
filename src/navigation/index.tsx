import {
  DrawerActions,
  NavigationContainer,
  NavigationContainerRef,
  TabActions,
} from '@react-navigation/native';
import React, {createRef} from 'react';
import AppNavigation from './main/application.navigation';

export * from './routes.constant';

export const navigationRef = createRef<NavigationContainerRef<any>>();

export const navigation = {
  useNavigate: function (name: string, params?: any) {
    navigationRef.current?.navigate(name, params);
  },

  useReset: function (params: any) {
    navigationRef.current?.reset(params);
  },

  getNavigationName: function () {
    return navigationRef.current?.getCurrentRoute()?.name;
  },

  canGoBack: function () {
    return navigationRef.current?.canGoBack();
  },

  goBack: function () {
    navigationRef.current?.goBack();
  },

  openDrawer: function () {
    navigationRef.current?.dispatch(DrawerActions.openDrawer());
  },

  closeDrawer: function () {
    navigationRef.current?.dispatch(DrawerActions.closeDrawer());
  },

  jumpTo: function (name: string, params?: any) {
    navigationRef.current?.dispatch(TabActions.jumpTo(name, params));
  },

  getCurrentRoute: function () {
    return navigationRef.current?.getCurrentRoute();
  },
};

const Navigation = () => {
  return (
    <NavigationContainer
      ref={navigationRef as any}
      // theme={{
      //   dark: true,
      //   colors: {
      //     ...DefaultTheme.colors,
      //     background: 'transparent',
      //     card: 'transparent',
      //   },
      // }}
    >
      <AppNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
