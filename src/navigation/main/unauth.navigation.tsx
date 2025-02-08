import {Block} from '@components';
import Login from '@modules/Authentication/screen/Login';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import {Routes} from '../routes.constant';

const Stack = createStackNavigator();

// demo

const UnauthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardOverlay: () => <Block flex color="transparent" />,
      }}>
      <Stack.Screen name={Routes.UNAUTH.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default UnauthNavigation;
