import 'react-native-gesture-handler';
import 'react-native-url-polyfill/auto';
import Navigation from '@navigation';
import {
  BottomBarStatusContextProvider,
  MaintainProvider,
  ModalContextProvider,
  NoAccessProvider,
  NotificationContextProvider,
  SplashProvider,
  StatusbarContextProvider,
  ThemeContextProvider,
  ToastContextProvider,
  TranslationContextProvider,
  UserLoginContextProvider,
  store,
  useAppConfig,
  useKeyboard,
  BottomActionContextProvider,
} from '@utils';
import React from 'react';
import {LogBox} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {ComposeProviders} from './common/components/control';

LogBox.ignoreAllLogs(); //Ignore all log notifications
LogBox.ignoreLogs([
  'VirtualizedLists should never be nested',
  'Non-serializable values were found in the navigation state',
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

function App() {
  useKeyboard();
  useAppConfig();

  return (
    <Provider store={store}>
      <ComposeProviders
        components={[
          TranslationContextProvider,
          StatusbarContextProvider,
          ThemeContextProvider,
          SplashProvider,
          MaintainProvider,
          UserLoginContextProvider,
          NotificationContextProvider,
          NoAccessProvider,
          ModalContextProvider,
          ToastContextProvider,
          BottomBarStatusContextProvider,
          BottomActionContextProvider,
        ]}>
        <Navigation />
      </ComposeProviders>
    </Provider>
  );
}

export default gestureHandlerRootHOC(App);
// export default codePush({
//   checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
//   updateDialog: {appendReleaseDescription: true},
// })(gestureHandlerRootHOC(App));
