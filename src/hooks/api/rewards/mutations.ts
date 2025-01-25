import { useMutation } from '@tanstack/react-query';

import { GET_USER_KEY } from '../keys';

import queryClient from '@/lib/query-client';
import { claimDailyReward } from '@/api/requests/rewards';

export const useClaimDailyReward = () => {
  return useMutation({
    mutationFn: async () => {
      const res = await claimDailyReward();
      if ('error' in res) throw res;
      return res.data;
    },
    onSuccess: (res) => {
      queryClient.setQueryData([GET_USER_KEY], { user: res.user });
    },
  });
};
