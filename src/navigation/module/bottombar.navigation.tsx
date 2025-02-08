import {Block} from '@components';
import {BOTTOM_BAR_HEIGHT, Colors, Images} from '@constants';
import Expenses from '@modules/Expenses/screen/Expenses';
import Home from '@modules/Home/screen/Home';
import Inventory from '@modules/Inventory/screen/Inventory';
import Invoice from '@modules/Invoice/screen/Invoice';
import Report from '@modules/Report/screen/Report';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import {BottomTabBar, BottomTabIcon} from '../components';
import {Routes} from '../routes.constant';

const BottomTabNavigation = createBottomTabNavigator();

export interface TabItem {
  name: string;
  component: React.FunctionComponent;
  icon: any;
  iconActive?: any;
  title?: string;
  badge?: number;
}

const BlankTab: TabItem = {
  name: '',
  component: props => <Block {...props} />,
  icon: '',
  iconActive: '',
  title: '',
};

const HomeTab: TabItem = {
  name: Routes.BOTTOMTAB.HOME,
  component: props => <Home {...props} />,
  icon: Images.ICON.Home,
  title: 'Home',
};

const InventoryTab: TabItem = {
  name: Routes.BOTTOMTAB.INVENTORY,
  component: props => <Inventory {...props} />,
  icon: Images.ICON.Inventory,
  title: 'Inventory',
};

const InvoiceTab: TabItem = {
  name: Routes.BOTTOMTAB.INVOICE,
  component: props => <Invoice {...props} />,
  icon: Images.ICON.Invoice,
  title: 'Invoice',
};

const ExpensesTab: TabItem = {
  name: Routes.BOTTOMTAB.EXPENSES,
  component: props => <Expenses {...props} />,
  icon: Images.ICON.Expenses,
  title: 'Expenses',
};

const ReportsTab: TabItem = {
  name: Routes.BOTTOMTAB.REPORT,
  component: props => <Report {...props} />,
  icon: Images.ICON.Reports,
  title: 'Reports',
};

export const TAB_LIST: TabItem[] = [
  HomeTab,
  InventoryTab,
  InvoiceTab,
  ExpensesTab,
  ReportsTab,
];

function BottomTab() {
  /** state */

  /** render */
  return (
    <>
      <BottomTabNavigation.Navigator
        initialRouteName={Routes.BOTTOMTAB.HOME}
        tabBar={(props: BottomTabBarProps) => <BottomTabBar {...props} />}
        screenOptions={{
          tabBarStyle: [
            styles.tabBarStyle,
            {
              height: BOTTOM_BAR_HEIGHT,
              paddingBottom: 0,
            },
          ],
          // tabBarHideOnKeyboard: true,
          // unmountOnBlur: true,
        }}>
        {TAB_LIST.map((tab, index) => (
          <BottomTabNavigation.Screen
            key={'tab_' + index}
            name={tab.name}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <BottomTabIcon tab={tab} focused={focused} />
              ),
            }}>
            {tab.component}
          </BottomTabNavigation.Screen>
        ))}
      </BottomTabNavigation.Navigator>
    </>
  );
}

export default BottomTab;

export const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    zIndex: 999,
    borderBottomWidth: 0,
    borderTopColor: Colors.transparent,
    // shadow
    // shadowOffset: {
    //   width: 0,
    //   height: -1,
    // },
    // shadowOpacity: 0.05,
    // shadowRadius: 10.0,
    // elevation: 20,
  },
});
