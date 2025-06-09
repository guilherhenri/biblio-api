import { Request, Response } from 'express'

import { Book } from '@/infra/database/models/book'

export async function listBooks(req: Request, res: Response) {
  const books = await Book.findAll()

  res.send({
    books,
  })
}
