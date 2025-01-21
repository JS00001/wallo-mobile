import Toast from 'react-native-toast-message';
import { AxiosError, InternalAxiosRequestConfig } from 'axios';

import axios from '.';

import { API } from '@/@types/api';
import useAuthStore from '@/store/auth';
import { refreshAuthToken } from '@/api';
import { httpLogger } from '@/lib/logger';

/**
 * Variables for handling token refreshing
 */
let isRefreshing = false;
let failedQueue: { resolve: Function; reject: Function }[] = [];

/**
 * Setup request and response interceptors for axios
 * to handle common errors and refresh tokens
 */
const setupRequestInterceptors = () => {
  /**
   * Request interceptor
   */
  axios.interceptors.request.use(async (config) => {
    const accessToken = useAuthStore.getState().accessToken;

    httpLogger.debug(config.method?.toUpperCase(), config.url);

    if (accessToken && !config.headers.Authorization) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  });

  /**
   * Response interceptor
   */
  axios.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      const originalRequest = error.config!;
      const responseData = error.response?.data as API.ErrorResponse;
      const errorDetails = (error.response?.data as API.ErrorResponse)?.error;

      // If there no error field, then our server did not respond with a proper error
      // so its probably a network error/the server is down
      if (!errorDetails) {
        return Promise.reject(error);
      }

      /**
       * If we *successfully* handle a common error, we want to return the
       * response. This is so we dont have to use catch blocks in every
       * API call. Instead, we can add a check for errors:
       */
      const errorHandledResponse = {
        data: responseData,
      };

      /** 429 - RATE_LIMIT_EXCEEDED */
      if (errorDetails.message === 'RATE_LIMIT_EXCEEDED') {
        Toast.show({
          type: 'error',
          text1: 'Too many requests',
          text2: 'Please try again later',
        });

        return Promise.resolve(errorHandledResponse);
      }

      /** 401 - EXPIRED_TOKEN */
      if (errorDetails.message === 'EXPIRED_TOKEN') {
        return handleExpiredTokenResponse(originalRequest, error);
      }

      /** 401 - UNAUTHORIZED */
      if (errorDetails.message === 'UNAUTHORIZED') {
        useAuthStore.getState().logout();
        return Promise.resolve(errorHandledResponse);
      }

      /** ANY STATUS CODE - If there is NO 'field' key, we need to display the error in a toast */
      if (!errorDetails.field) {
        Toast.show({
          type: 'error',
          text1: 'An error occurred',
          text2: errorDetails.humanMessage,
        });

        return Promise.reject(error);
      }

      return Promise.reject(error);
    },
  );
};

/**
 * Take all requests that have been queued, and check if the initial
 * refresh query has passed or failed. If it passed, resolve the
 * requests with the new token. If it failed, reject the requests
 * with the error.
 */
const processQueue = (error: Error | null, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

/**
 * If a request has an expired token, queue all requests that are also expired, then
 * attempt to refresh the token. If the token refresh is successful, resolve all queued
 * requests with the new token. If the token refresh fails, reject all queued requests
 * with the error.
 */
const handleExpiredTokenResponse = async (
  reqConfig: InternalAxiosRequestConfig<any>,
  error: AxiosError,
) => {
  // If we are in the process of refreshing the access token, queue all other failed requests
  // to be fixed once the access token has been refreshed
  if (isRefreshing) {
    const promise = new Promise((resolve, reject) => {
      failedQueue.push({ resolve, reject });
    });

    return promise.then((token) => {
      reqConfig.headers['Authorization'] = `Bearer ${token}`;
      return axios(reqConfig);
    });
  }

  // Attempt to refresh the access token
  isRefreshing = true;

  try {
    const refreshToken = useAuthStore.getState().refreshToken;

    if (!refreshToken) {
      return Promise.reject(error);
    }

    const response = await refreshAuthToken();

    if ('error' in response) {
      processQueue(new Error('Error refreshing token'), null);
      return Promise.reject(error);
    }

    // If we successfully get a new access token, update the request headers
    // then call all queued requests with the new token
    const accessToken = response.data.accessToken;

    useAuthStore.getState().setField('accessToken', accessToken);
    reqConfig.headers['Authorization'] = `Bearer ${accessToken}`;

    processQueue(null, accessToken);

    return axios(reqConfig);
  } catch (error: any) {
    processQueue(error, null);
    return Promise.reject(error);
  } finally {
    isRefreshing = false;
  }
};

export default setupRequestInterceptors;
