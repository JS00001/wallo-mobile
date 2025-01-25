import { AppleAuthenticationFullName } from 'expo-apple-authentication';
import { Reward } from '..';

export interface AppleOAuthRequest {
  /** The JWT for the user, from apple */
  identityToken: string;
  /** The users name, only exists on first fetch */
  fullName: AppleAuthenticationFullName | null;
}

export interface UpdateUserRequest {
  /** The age of the user */
  age?: number;
  /** The preferred courses of the user */
  preferredCourses?: string[];
}

export interface ClaimRewardRequest {
  /** The type of the reward */
  type: Reward;
}
