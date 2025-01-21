export namespace API {
  /** The type of error that can be returned from the API */
  type ErrorType =
    | 'BAD_REQUEST'
    | 'INTERNAL_SERVER_ERROR'
    | 'INVALID_FIELDS'
    | 'UNAUTHORIZED'
    | 'EXPIRED_TOKEN'
    | 'NOT_FOUND'
    | 'RATE_LIMIT_EXCEEDED';

  /** The error returned from the API */
  type Error = {
    /** The field that the error occurred on */
    field?: string;
    /** The tracback to the api module that threw the error */
    traceback: string;
    /** The type of error that occurred */
    message: ErrorType;
    /** A human readable message for the error */
    humanMessage: string;
  };

  /** The success response returned from the API */
  export type SuccessResponse<T> = {
    /** The data returned from the API  */
    data: T;
  };

  /** The error response returned from the API */
  export type ErrorResponse = {
    /** The error returned from the API */
    error: Error;
  };

  /** The response returned from the API */
  export type Response<T = {}> = SuccessResponse<T> | ErrorResponse;
}
