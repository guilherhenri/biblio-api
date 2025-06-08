import { type NextFunction, Request, Response } from 'express'

import type { CustomError } from '@/core/errors/custom-error'

export const errorHandler = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const status = error.status || 500
  const message = error.message || 'Internal Server Error'

  res.status(status).json({
    status: 'error',
    code: status,
    message,
  })

  next()
}
