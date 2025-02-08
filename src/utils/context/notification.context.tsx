import React from 'react';
// import OneSignal from 'react-native-onesignal';
import {useAppDispatch} from '../hook';
// import messaging from '@react-native-firebase/m';

export interface NotificationContextType {}

export interface NotificationContextProviderProps {
  children?: any;
}

export const NotificationContext = React.createContext<NotificationContextType>(
  {},
);

export const NotificationContextProvider = (
  props: NotificationContextProviderProps,
) => {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   OneSignal.setLogLevel(6, 0);
  //   OneSignal.setAppId(ONESIGNAL_ID || '');

  //   OneSignal.promptForPushNotificationsWithUserResponse();

  //   //Method for handling notifications received while app in foreground
  //   OneSignal.setNotificationWillShowInForegroundHandler(
  //     notificationReceivedEvent => {
  //       let notification = notificationReceivedEvent.getNotification();
  //       const data: any = notification.additionalData;
  //       const cardCode = data?.cardCode;
  //       if (cardCode) {
  //         dispatch(LoginActions.updateCardCodeFromOneSignal(cardCode));
  //       }
  //       // Complete with null means don't show a notification.
  //       notificationReceivedEvent.complete(notification);
  //     },
  //   );

  //   //Method for handling notifications opened
  //   OneSignal.setNotificationOpenedHandler(notificationReceivedEvent => {
  //     let notification = notificationReceivedEvent.notification;
  //     const data: any = notification.additionalData;
  //     const cardCode = data?.cardCode;
  //     if (cardCode) {
  //       dispatch(LoginActions.updateCardCodeFromOneSignal(cardCode));
  //     }
  //   });
  // }, []);

  return (
    <NotificationContext.Provider value={{}}>
      {props.children}
    </NotificationContext.Provider>
  );
};
