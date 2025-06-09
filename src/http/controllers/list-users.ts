import { Request, Response } from 'express'

import { User } from '@/infra/database/models/user'

export async function listUsers(req: Request, res: Response) {
  const users = await User.findAll()

  res.send({
    users,
  })
}
