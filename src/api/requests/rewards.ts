import { ClaimRewardRequest, ClaimRewardResponse } from '@/@types';

import axios from '@/lib/axios';

const PREFIX = '/rewards';

/**
 * Request:     POST /api/v1/rewards/claim
 * Description: Claim a daily reward
 */
export const claimReward = async (data: ClaimRewardRequest) => {
  const url = `${PREFIX}/claim`;

  const response = await axios.post<ClaimRewardResponse>(url, data);

  return response.data;
};
