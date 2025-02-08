const System = {
  DOMAIN: 'ABC',
  TIMEOUT: 60000 * 5,
  COLOR_DEFAULT: 500,
  HTTP_CODE: {
    SUCCESS: 201,
    TOKEN_INVALID: 190,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    ACCESS_DENIED: 403,
    INTERNAL_ERROR: 500,
    TIME_OUT: 503,
  },
  METHOD_TYPE: {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
  },
};

export default System;
