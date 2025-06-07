import cors from 'cors'
import express, { Express, Request, Response } from 'express'

import { env } from './env'

const app: Express = express()

app.use(
  cors({
    origin: '*',
  }),
)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express Server!')
})

app.listen(env.SERVER_PORT, () => {
  console.log(`Server running at http://localhost:${env.SERVER_PORT}`)
})
