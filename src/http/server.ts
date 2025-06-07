import cors from 'cors'
import express, { Express, Request, Response } from 'express'

import { CustomError } from '@/core/errors/custom-error'

import { env } from '../env'
import { connectToDatabase } from '../lib/sequelize'
import { errorHandler } from './middlewares/error-handler'

const app: Express = express()

app.use(errorHandler)

app.use(
  cors({
    origin: '*',
  }),
)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express Server!')
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
