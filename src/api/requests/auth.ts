import { AppleOAuthRequest, AppleOAuthResponse } from '@/@types';

import axios from 'axios';

const PREFIX = '/auth';

/**
 * Request:     POST /api/v1/auth/apple
 * Description: Authenticate with Apple
 */
export const appleOAuth = async (data: AppleOAuthRequest) => {
  const url = `${PREFIX}/apple`;

  const { data: response } = await axios.post<AppleOAuthResponse>(url, data);

  return response;
};
