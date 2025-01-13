import Axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { httpLogger } from '@/lib/logger';
import { getAccessToken } from '@/lib/auth';
import Constants, { Urls } from '@/constants';

const defaultHeaders = {
  'X-ClientVersion': Constants.version,
};

const axios = Axios.create({
  baseURL: `${Urls.ApiUrl}/api/v1`,
  headers: {
    ...defaultHeaders,
  },
});

/**
 * Variables for handling token refreshing
 */
let isRefreshing = false;
let failedQueue: { resolve: Function; reject: Function }[] = [];

/**
 * Request interceptor
 */
axios.interceptors.request.use(async (config) => {
  const accessToken = await getAccessToken();

  httpLogger.debug(config.method?.toUpperCase(), config.url);

  if (accessToken && !config.headers.Authorization) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
});
