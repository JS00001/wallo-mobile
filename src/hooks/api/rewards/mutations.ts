import { useMutation } from '@tanstack/react-query';

import { GET_USER_KEY } from '../keys';

import { claimReward } from '@/api';
import queryClient from '@/lib/query-client';
import { ClaimRewardRequest } from '@/@types';

export const useClaimDailyReward = () => {
  return useMutation({
    mutationFn: async (data: ClaimRewardRequest) => {
      const res = await claimReward(data);
      if ('error' in res) throw res;
      return res.data;
    },
    onSuccess: (res) => {
      queryClient.setQueryData([GET_USER_KEY], { user: res.user });
    },
  });
};
