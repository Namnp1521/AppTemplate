import AsyncStorage from '@react-native-community/async-storage';

const StorageUtilities = {
  getData: async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value) return JSON.parse(value);
      else return '';
    } catch (e) {
      console.log('StorageUtilities - ', e);
      return '';
    }
  },

  setData: async (key: string, obj: object) => {
    try {
      if (!obj) {
        const promise = await AsyncStorage.setItem(key, '');
        return promise;
      } else {
        const promise = await AsyncStorage.setItem(key, JSON.stringify(obj));
        return promise;
      }
    } catch (e) {
      console.log('StorageUtilities - ', e);
    }
  },

  deleteData: async (key: string) => {
    try {
      const promise = await AsyncStorage.removeItem(key);
      return promise;
    } catch (e) {
      console.log('StorageUtilities - ', e);
    }
  },
  clearAll: async () => {
    try {
      const asyncStorageKeys = await AsyncStorage.getAllKeys();
      if (asyncStorageKeys?.length > 0) {
        AsyncStorage.clear();
      }
    } catch (e) {
      console.log('StorageUtilities - ', e);
    }
  },
  getAllKeys: async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
      return keys;
    } catch (e) {
      console.log('StorageUtilities - ', e);
    }
  },
};

export default StorageUtilities;
