import cors from 'cors'
import express, { Express, Request, Response } from 'express'

import { CustomError } from '@/core/errors/custom-error'
import Loan from '@/infra/database/models/loan'

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

app.get('/loans', async (req: Request, res: Response) => {
  const loans = await Loan.findAll()

  res.send({
    loans,
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
