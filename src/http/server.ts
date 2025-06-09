import cors from 'cors'
import express, { Express, json } from 'express'

import { CustomError } from '@/core/errors/custom-error'

import { env } from '../config/env'
import { connectToDatabase } from '../infra/database/sequelize'
import { errorHandler } from './middlewares/error-handler'
import { router } from './routes'

const app: Express = express()

app.use(json())

app.use(
  cors({
    origin: '*',
  }),
)

app.use('/api/v1', router)

app.use(errorHandler)

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
