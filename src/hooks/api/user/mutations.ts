import { useMutation } from '@tanstack/react-query';

import { GET_USER_KEY } from '../keys';

import { updateUser } from '@/api';
import { UpdateUserRequest } from '@/@types';
import queryClient from '@/lib/query-client';

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: async (data: UpdateUserRequest) => {
      const res = await updateUser(data);
      if ('error' in res) throw res;
      return res.data;
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: [GET_USER_KEY] });
    },
  });
};
