import {
  AppleOAuthRequest,
  AppleOAuthResponse,
  LogoutResponse,
  RefreshTokenResponse,
} from '@/@types';

import axios from '@/lib/axios';
import useAuthStore from '@/store/auth';

const PREFIX = '/auth';

/**
 * Request:     POST /api/v1/auth/apple
 * Description: Authenticate with Apple
 */
export const appleOAuth = async (data: AppleOAuthRequest) => {
  const url = `${PREFIX}/apple`;

  const response = await axios.post<AppleOAuthResponse>(url, data);

  return response.data;
};

/**
 * Request:     POST /api/v1/auth/refresh
 * Description: Refresh the current session
 */
export const refreshAuthToken = async () => {
  const url = `${PREFIX}/refresh`;
  const refreshToken = useAuthStore.getState().refreshToken;

  const response = await axios.post<RefreshTokenResponse>(
    url,
    {},
    { headers: { Authorization: `Bearer ${refreshToken}` } },
  );

  return response.data;
};

/**
 * Request:     POST /api/v1/auth/logout
 * Description: Logout of the current session
 */
export const logout = async () => {
  const url = `${PREFIX}/logout`;
  const refreshToken = useAuthStore.getState().refreshToken;

  const response = await axios.post<LogoutResponse>(
    url,
    {},
    { headers: { Authorization: `Bearer ${refreshToken}` } },
  );

  return response.data;
};
