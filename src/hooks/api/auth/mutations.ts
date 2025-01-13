import { useMutation } from '@tanstack/react-query';

import { appleOAuth } from '@/api';
import { AppleOAuthRequest } from '@/@types';
import { setAccessToken, setRefreshToken } from '@/lib/auth';

export const useAppleOAuth = () => {
  return useMutation({
    mutationFn: async (data: AppleOAuthRequest) => {
      const res = await appleOAuth(data);
      if ('error' in res) throw res;
      return res;
    },
    onSuccess: async (res) => {
      setAccessToken(res.data.accessToken);
      setRefreshToken(res.data.refreshToken);
    },
  });
};
