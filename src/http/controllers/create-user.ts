import { Request, Response } from 'express'
import { z } from 'zod'

import { CustomError } from '@/core/errors/custom-error'
import { User } from '@/infra/database/models/user'

export async function createUser(req: Request, res: Response) {
  const createUserBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
  })

  const { name, email, phone } = createUserBodySchema.parse(req.body)

  const isEmailAlreadyInUse = await User.findOne({
    where: {
      email,
    },
  })

  if (isEmailAlreadyInUse) {
    throw new CustomError('Email already in use', 409)
  }

  const user = await User.create({
    name,
    email,
    phone,
  })

  res.status(201).send({
    user,
  })
}
