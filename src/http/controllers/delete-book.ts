import { Request, Response } from 'express'
import { z } from 'zod'

import { CustomError } from '@/core/errors/custom-error'
import { Book } from '@/infra/database/models/book'

export async function deleteBook(req: Request, res: Response) {
  const deleteBookParamsSchema = z.object({
    id: z.coerce.number(),
  })

  const { id } = deleteBookParamsSchema.parse(req.params)

  const book = await Book.findByPk(id)

  if (!book) {
    throw new CustomError('Book not found', 404)
  }

  await book.destroy()

  res.send()
}
