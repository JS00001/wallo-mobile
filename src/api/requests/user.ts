import { GetUserResponse } from '@/@types';

import axios from '@/lib/axios';

const PREFIX = '/user';

/**
 * Request:     GET /api/v1/user
 * Description: Get the current user's information
 */
export const getUser = async () => {
  const url = `${PREFIX}`;

  const response = await axios.get<GetUserResponse>(url);

  return response.data;
};
