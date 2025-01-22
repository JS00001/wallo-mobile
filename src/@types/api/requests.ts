import { AppleAuthenticationFullName } from 'expo-apple-authentication';

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
