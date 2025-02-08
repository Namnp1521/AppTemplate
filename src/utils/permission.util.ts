import {
  check,
  PERMISSIONS,
  request,
  requestNotifications,
} from 'react-native-permissions';

const PermissionUtilities = {
  requestCamera: async () => {
    let status = await check(PERMISSIONS.ANDROID.CAMERA);
    if (status !== 'granted') {
      status = await request(PERMISSIONS.ANDROID.CAMERA);
    }
    return status === 'granted';
  },

  requestPermissionTransparency: async () => {
    let status = await check(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY);
    if (status !== 'granted') {
      status = await request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY);
    }
    return status === 'granted';
  },

  checkPermissionTransparency: async () => {
    let status = await check(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY);
    return status === 'granted';
  },

  changePermissionTransparency: async () => {
    let status = await request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY);
    return status === 'granted';
  },

  requestNotification: async () => {
    try {
      await requestNotifications(['alert', 'sound']);
    } catch (error) {
      console.log('requestNotification', error);
    }
  },
};

export default PermissionUtilities;
