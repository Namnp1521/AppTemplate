// import PushNotification from 'react-native-push-notification';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';
// import {Platform} from 'react-native';
// import {Colors} from '@constants';

const PushNotificationUtilities = {
  // configure: () => {
  //   PushNotification.configure({
  //     onNotification: function (notification) {
  //       console.log('notification', notification);
  //       // (required) Called when a remote is received or opened, or local notification is opened
  //       notification.finish(PushNotificationIOS.FetchResult.NoData);
  //     },
  //     requestPermissions: Platform.OS === 'ios',
  //   });
  // },
  // createChannel: (channelId, channelName) => {
  //   PushNotification.createChannel(
  //     {
  //       channelId: channelId, // (required)
  //       channelName: channelName, // (required)
  //       showBadge: true,
  //     },
  //     created => console.log(`createChannel returned '${created}'`),
  //   );
  // },
  // localNotification: (title, message, data = {}, channelId = '') => {
  //   const contents = {
  //     channelId: channelId,
  //     title: title,
  //     message: message,
  //     userInfo: data,
  //     color: Colors.primary,
  //     largeIcon: 'ic_launcher_foreground',
  //   };
  //   PushNotification.localNotification(contents);
  // },
};

export default PushNotificationUtilities;
