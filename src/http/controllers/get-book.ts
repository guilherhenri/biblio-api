import { Request, Response } from 'express'
import { z } from 'zod'

import { CustomError } from '@/core/errors/custom-error'
import Book from '@/infra/database/models/book'

export async function getBook(req: Request, res: Response) {
  const getBookParamsSchema = z.object({
    id: z.coerce.number(),
  })

  const { id } = getBookParamsSchema.parse(req.params)

  const book = await Book.findByPk(id)

  if (!book) {
    throw new CustomError('Book not found', 404)
  }

  res.send({
    book,
  })
}
