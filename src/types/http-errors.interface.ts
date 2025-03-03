/* eslint-disable @typescript-eslint/no-empty-object-type */
// Problem Details Pattern
interface Problem {
  title: string;
  status: number;
  detail?: string;
  errors?: Record<string, string[]>;
}

interface BadRequestError extends Problem {} //Status Code: 400
interface UnauthorizedError extends Problem {} //Status Code: 403
interface ValidationError extends Problem {} //Status Code: 400
interface NotFoundError extends Problem {} //Status Code: 404
interface UnhandledException extends Problem {} //Status Code: 500
interface NetworkError extends Problem {}

type ApiError =
  | BadRequestError
  | NetworkError
  | NotFoundError
  | UnhandledException
  | UnauthorizedError
  | ValidationError;

export type {
  Problem,
  BadRequestError,
  UnauthorizedError,
  ValidationError,
  NotFoundError,
  UnhandledException,
  NetworkError,
  ApiError,
};
