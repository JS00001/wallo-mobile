import { API } from '.';
import { IUser, ICourse } from '..';

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

export type UpdateUserResponse = API.Response<{
  /** The user's information */
  user: IUser;
}>;

export type GetCourseCatalogResponse = API.Response<{
  /** The courses in the catalog */
  courses: ICourse[];
}>;
