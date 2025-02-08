import {Block} from '@components';
import {Routes} from '@navigation';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import BottomTab from '../module/bottombar.navigation';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardOverlay: () => <Block flex color="transparent" />,
      }}>
      <Stack.Screen name={Routes.AUTH.BOTTOMTAB} component={BottomTab} />
      {/* <Stack.Screen
        name={Routes.AUTH.OTHERS}
        component={OthersStackNavigation}
        // options={{
        //   // cardStyleInterpolator:
        //   //   CardStyleInterpolators.forFadeFromBottomAndroid,
        //   // cardOverlay: () => <Block flex color="transparent" />,
        //   presentation: 'transparentModal',
        // }}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigation;
