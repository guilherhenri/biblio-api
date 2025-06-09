import { type NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'

import type { CustomError } from '@/core/errors/custom-error'

export const errorHandler = (
  error: CustomError | ZodError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof ZodError) {
    res.status(400).json({
      status: 'invalid-input',
      message: error.flatten().fieldErrors,
    })

    return next()
  }

  const status = error.status || 500
  const message = error.message || 'Internal Server Error'

  res.status(status).json({
    status: 'error',
    code: status,
    message,
  })

  next()
}
