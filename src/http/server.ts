import cors from 'cors'
import express, { Express, Request, Response } from 'express'

import { CustomError } from '@/core/errors/custom-error'
import User from '@/infra/database/models/user'

import { env } from '../config/env'
import { connectToDatabase } from '../infra/database/sequelize'
import { errorHandler } from './middlewares/error-handler'

const app: Express = express()

app.use(errorHandler)

app.use(
  cors({
    origin: '*',
  }),
)

app.get('/users', async (req: Request, res: Response) => {
  const users = await User.findAll()

  res.send({
    users,
  })
})

async function startServer() {
  try {
    await connectToDatabase()

    app.listen(env.SERVER_PORT, () => {
      console.log(`Server running at http://localhost:${env.SERVER_PORT}`)
    })
  } catch (error) {
    console.log('Start Server Error: ', error)
    throw new CustomError()
  }
}

startServer()
