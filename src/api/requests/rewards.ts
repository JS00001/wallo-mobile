import { ClaimDailyRewardResponse } from '@/@types';

import axios from '@/lib/axios';

const PREFIX = '/rewards';

/**
 * Request:     POST /api/v1/rewards/daily
 * Description: Claim the daily reward
 */
export const claimDailyReward = async () => {
  const url = `${PREFIX}/daily`;

  const response = await axios.post<ClaimDailyRewardResponse>(url);

  return response.data;
};
