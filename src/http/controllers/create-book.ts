import { Request, Response } from 'express'
import { z } from 'zod'

import { CustomError } from '@/core/errors/custom-error'
import Book from '@/infra/database/models/book'

export async function createBook(req: Request, res: Response) {
  const createBookBodySchema = z.object({
    title: z.string(),
    author: z.string(),
    ISBN: z.string().length(13),
    year: z.string().length(4),
  })

  const { title, author, ISBN, year } = createBookBodySchema.parse(req.body)

  const isISBNAlreadyRegister = await Book.findOne({
    where: {
      ISBN,
    },
  })

  if (isISBNAlreadyRegister) {
    throw new CustomError('ISBN already register', 409)
  }

  const currentYear = new Date().getFullYear()

  if (currentYear < Number(year)) {
    throw new CustomError('Year need to be a past date', 409)
  }

  const book = await Book.create({
    title,
    author,
    ISBN,
    year,
  })

  res.status(201).send({
    book,
  })
}
