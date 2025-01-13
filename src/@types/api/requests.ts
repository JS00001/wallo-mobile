import { AppleAuthenticationFullName } from 'expo-apple-authentication';

export interface AppleOAuthRequest {
  /** The JWT for the user, from apple */
  identityToken: string;
  /** The users name, only exists on first fetch */
  fullName: AppleAuthenticationFullName | null;
}
