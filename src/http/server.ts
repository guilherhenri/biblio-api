import cors from 'cors'
import express, { Express, Request, Response } from 'express'

import { env } from '../env'
import { connectToDatabase } from '../lib/sequelize'

const app: Express = express()

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
    console.error('Erro ao iniciar o servidor:', error)
    process.exit(1)
  }
}

startServer()
