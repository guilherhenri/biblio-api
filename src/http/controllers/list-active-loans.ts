import { Request, Response } from 'express'

import { Loan } from '@/infra/database/models/loan'

export async function listActiveLoans(req: Request, res: Response) {
  const loans = await Loan.findAll({
    where: {
      giveBackDate: null,
    },
  })

  res.send({
    loans,
  })
}
