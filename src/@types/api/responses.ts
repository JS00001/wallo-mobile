import { API } from '.';
import { IUser } from '..';

export type LogoutResponse = API.Response;

export type RefreshTokenResponse = API.Response<{
  /** The new access token */
  accessToken: string;
}>;

export type AppleOAuthResponse = API.Response<{
  /** The user's information */
  user: IUser;
  /** The access token for the user */
  accessToken: string;
  /** The refresh token for the user */
  refreshToken: string;
}>;

export type GetUserResponse = API.Response<{
  /** The user's information */
  user: IUser;
}>;
