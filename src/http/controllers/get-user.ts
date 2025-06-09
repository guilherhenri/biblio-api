import { Request, Response } from 'express'
import { z } from 'zod'

import { CustomError } from '@/core/errors/custom-error'
import { User } from '@/infra/database/models/user'

export async function getUser(req: Request, res: Response) {
  const getUserParamsSchema = z.object({
    id: z.coerce.number(),
  })

  const { id } = getUserParamsSchema.parse(req.params)

  const user = await User.findByPk(id)

  if (!user) {
    throw new CustomError('User not found', 404)
  }

  res.send({
    user,
  })
}
