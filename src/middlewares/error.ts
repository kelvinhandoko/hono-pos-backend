import {
  BadRequestError,
  ConflictError,
  NotFoundError,
} from '@/entities/error/common'
import { AppBindings } from '@/lib/type'
import { ErrorHandler } from 'hono'
import { onError } from 'stoker/middlewares'

export const errorMiddleware: ErrorHandler<AppBindings> = (err, c) => {
  if (err instanceof NotFoundError) {
    return c.json(
      {
        message: err.message ?? 'Resource not found',
        success: false,
      },
      404,
    )
  }

  if (err instanceof BadRequestError) {
    return c.json(
      {
        message: err.message ?? 'Bad request',
        success: false,
      },
      400,
    )
  }

  if (err instanceof ConflictError) {
    return c.json(
      {
        message: err.message ?? 'Conflict error',
        success: false,
      },
      409,
    )
  }

  return onError(err, c)
}
