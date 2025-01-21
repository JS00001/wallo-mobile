import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { GET_USER_KEY } from '../keys';

import { getUser } from '@/api';
import useAuthStore from '@/store/auth';

export const useGetUser = () => {
  const authStore = useAuthStore();

  const query = useQuery({
    enabled: !!authStore.accessToken,
    queryKey: [GET_USER_KEY],
    queryFn: async () => {
      const res = await getUser();
      if ('error' in res) throw res;
      return res.data;
    },
  });

  // When the query data changes, update the auth store for 'global' access
  useEffect(() => {
    if (query.data) {
      authStore.setField('user', query.data.user);
    }
  }, [query.data]);

  return query;
};
