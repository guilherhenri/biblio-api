import { Request, Response } from 'express'
import { z } from 'zod'

import { CustomError } from '@/core/errors/custom-error'
import { Book } from '@/infra/database/models/book'
import { Loan } from '@/infra/database/models/loan'

export async function giveBackBook(req: Request, res: Response) {
  const giveBackBookBodySchema = z.object({
    userId: z.string(),
    bookId: z.string(),
  })

  const { userId, bookId } = giveBackBookBodySchema.parse(req.body)

  const loan = await Loan.findOne({
    where: {
      userId,
      bookId,
      giveBackDate: null,
    },
  })

  if (!loan) {
    throw new CustomError('Loan not found', 404)
  }

  const giveBackDate = new Date()

  await loan.update({
    giveBackDate,
  })

  await Book.update(
    {
      isAvailable: true,
    },
    {
      where: {
        id: bookId,
      },
    },
  )

  res.status(204).send()
}
