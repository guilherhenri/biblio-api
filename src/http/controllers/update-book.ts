import { Request, Response } from 'express'
import { z } from 'zod'

import { CustomError } from '@/core/errors/custom-error'
import Book from '@/infra/database/models/book'

export async function updateBook(req: Request, res: Response) {
  const updateBookParamsSchema = z.object({
    id: z.coerce.number(),
  })
  const updateBookBodySchema = z.object({
    title: z.string(),
    author: z.string(),
    ISBN: z.string().length(13),
    year: z.string().length(4),
  })

  const { id } = updateBookParamsSchema.parse(req.params)
  const { title, author, ISBN, year } = updateBookBodySchema.parse(req.body)

  const book = await Book.findByPk(id)

  if (!book) {
    throw new CustomError('Book not found', 404)
  }

  if (book.getDataValue('ISBN') !== ISBN) {
    const isISBNAlreadyRegister = await Book.findOne({
      where: {
        ISBN,
      },
    })

    if (isISBNAlreadyRegister) {
      throw new CustomError('ISBN already register', 409)
    }
  }

  if (book.dataValues.year !== year) {
    const currentYear = new Date().getFullYear()

    if (currentYear < Number(year)) {
      throw new CustomError('Year need to be a past date', 409)
    }
  }

  await Book.update(
    {
      title,
      author,
      ISBN,
      year,
    },
    {
      where: {
        id,
      },
    },
  )

  res.send()
}
