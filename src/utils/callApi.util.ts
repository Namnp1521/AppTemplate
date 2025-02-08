/* eslint-disable import/imports-first */
/* eslint-disable import/first */
import {Buffer} from 'buffer';

global.Buffer = Buffer; // very important

import {System} from '@constants';
import axios from 'axios';
import qs from 'qs';
import config from '@config';

const TYPE_UPLOAD = {
  NORMAL: 'normal',
  MEDIA: 'media',
  FORM_URL_ENCODE: 'url_encode',
};

const instance = axios.create({
  timeout: System.TIMEOUT,
  baseURL: config.apiHost,
});

interface Exception {
  response?: {
    status?: number;
  };
}

export const ApiUrl = {
  productList: '/product-list',
  inventryList: '/inventry-list',
  addInventory: '/add-inventry',
  addInvoice: '/add-invoice',
  addExpense: '/add-expense',
};

const handleError = (error: Exception) => {
  if (error.response?.status === 401) {
    // TODO: Log Out
  }
  // throw error;
};

const getToken = async () => {
  return '';
  // return StorageUtilities.getData(Strings.Storage.TOKEN);
};

const getHeaders = async (
  config = {},
  typeUpload = TYPE_UPLOAD.NORMAL,
  isWithToken = true,
) => {
  let headers = {
    ...config,
  };

  // add token into header
  const token = await getToken();
  if (isWithToken) {
    headers = {
      ...headers,
      Authorization: token && `Bearer ${token}`,
    };
  }

  // add content-type for uploading file and normal header
  if (typeUpload === TYPE_UPLOAD.MEDIA) {
    headers = {
      ...headers,
      'Content-Type': 'multipart/form-data',
    };
  } else if (typeUpload === TYPE_UPLOAD.FORM_URL_ENCODE) {
    headers = {
      ...headers,
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    };
  } else {
    headers = {
      ...headers,
      'Content-Type': 'application/json',
    };
  }
  return headers;
};

const CallApiUtilities = {
  get: async (url: string, params = {}, isWithToken = false) => {
    const headers = await getHeaders({}, TYPE_UPLOAD.NORMAL, isWithToken);
    return instance
      .get(url, {
        headers,
        params,
        paramsSerializer: value => {
          return qs.stringify(value, {arrayFormat: 'repeat'});
        },
      })
      .then(response => {
        return response.data;
      })
      .catch(e => {
        handleError(e);
        return e.response;
      });
  },
  post: async (
    url: string,
    data: object,
    config = {},
    isWithToken = false,
    isThrowEx = false,
  ) => {
    const headers = await getHeaders({}, TYPE_UPLOAD.NORMAL, isWithToken);
    return instance
      .post(url, data, {
        headers,
        ...config,
      })
      .then(response => {
        return response.data;
      })
      .catch(e => {
        if (isThrowEx) {
          handleError(e);
          return e.response;
        }
        return e.response;
      });
  },
  put: async (url: string, data: object, config = {}, isWithToken = true) => {
    const headers = await getHeaders({}, TYPE_UPLOAD.NORMAL, isWithToken);
    return instance
      .put(url, data, {
        headers,
        ...config,
      })
      .then(response => {
        return response.data;
      })
      .catch(e => {
        handleError(e);
        return e.response;
      });
  },
  uploadMedia: async (
    url: string,
    data: any,
    config = {},
    isWithToken = true,
  ) => {
    const headers = await getHeaders({}, TYPE_UPLOAD.MEDIA, isWithToken);
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    return instance
      .post(url, formData, {
        headers,
        ...config,
      })
      .then(response => {
        return response.data;
      })
      .catch(e => {
        handleError(e);
        return e.response;
      });
  },
  delete: async (url: string, config = {}, isWithToken = true) => {
    const headers = await getHeaders({}, TYPE_UPLOAD.NORMAL, isWithToken);
    return instance
      .delete(url, {
        headers,
        ...config,
      })
      .then(response => {
        return response.data;
      })
      .catch(e => {
        handleError(e);
        return e.response;
      });
  },

  postFormEncode: async (
    url: string,
    data: object,
    config = {},
    isWithToken = true,
  ) => {
    const headers = await getHeaders(
      {},
      TYPE_UPLOAD.FORM_URL_ENCODE,
      isWithToken,
    );
    return instance
      .post(url, qs.stringify(data), {
        headers,
        ...config,
      })
      .then(response => {
        return response.data;
      })
      .catch(e => {
        handleError(e);
        return e.response;
      });
  },

  downloadFile: async (
    url: string,
    data: object,
    config = {},
    isWithToken = true,
  ) => {
    const headers = await getHeaders({}, TYPE_UPLOAD.NORMAL, isWithToken);
    return instance
      .post(url, data, {
        headers,
        ...config,
      })
      .then(response => {
        // return response.data;
        return Buffer.from(response.data, 'binary').toString('base64');
      })
      .catch(e => {
        handleError(e);
        return e.response;
      });
  },
  instance,
};

export default CallApiUtilities;
