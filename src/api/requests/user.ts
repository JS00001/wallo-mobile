import {
  GetUserResponse,
  UpdateUserRequest,
  UpdateUserResponse,
} from '@/@types';

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

/**
 * Request:     PUT /api/v1/user
 * Description: Update the current user's information
 */
export const updateUser = async (data: UpdateUserRequest) => {
  const url = `${PREFIX}`;

  const response = await axios.put<UpdateUserResponse>(url, data);

  return response.data;
};
