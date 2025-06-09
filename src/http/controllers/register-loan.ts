import { Request, Response } from 'express'
import { z } from 'zod'

import { CustomError } from '@/core/errors/custom-error'
import { Book } from '@/infra/database/models/book'
import Loan from '@/infra/database/models/loan'
import { User } from '@/infra/database/models/user'

export async function registerLoan(req: Request, res: Response) {
  const registerLoanBodySchema = z.object({
    userId: z.string(),
    bookId: z.string(),
  })

  const { userId, bookId } = registerLoanBodySchema.parse(req.body)

  const userExists = await User.findByPk(userId)

  if (!userExists) {
    throw new CustomError('User not found', 404)
  }

  const bookExists = await Book.findByPk(bookId)

  if (!bookExists) {
    throw new CustomError('Book not found', 404)
  }

  if (!bookExists.getDataValue('isAvailable')) {
    throw new CustomError('Book is not available', 409)
  }

  const userAlreadyBorrowedTheBook = await Loan.findOne({
    where: {
      userId,
      bookId,
      giveBackDate: null,
    },
  })

  if (userAlreadyBorrowedTheBook) {
    throw new CustomError('User has already borrowed the book', 409)
  }

  const loan = await Loan.create({
    userId,
    bookId,
  })

  await bookExists.update({
    isAvailable: false,
  })

  res.status(201).send({
    loan,
  })
}
