import { API } from '.';
import { IUser, ICourse, IPopulatedCourse, IPopulatedLesson } from '..';

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

export type GetCoursesResponse = API.Response<{
  /** The courses the user has access to */
  courses: IPopulatedCourse[];
}>;

export type GetCourseResponse = API.Response<{
  /** The course */
  course: ICourse;
  /** The lessons in the course */
  lessons: IPopulatedLesson[];
}>;

export type ClaimRewardResponse = API.Response<{
  /** The user's information */
  user: IUser;
  /** The amount of virtual currency the user received */
  virtualCurrency: number;
}>;
