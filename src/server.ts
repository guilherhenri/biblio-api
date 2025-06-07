import cors from 'cors'
import express, { Express, Request, Response } from 'express'

const app: Express = express()
const port: number = 3000

// Enable CORS for all origins
app.use(
  cors({
    origin: '*',
  }),
)

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express Server!')
})

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
