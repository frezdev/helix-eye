import express, { type Express, type Request, type Response } from 'express'
import path from 'node:path'
import { config } from './config'
import { render } from './render'

const app: Express = express()

app.disable('X-Powered-By')

app.use(express.static(path.resolve('dist')))

app.get('*', (req: Request, res: Response) => {
  render(req.url, res)
})

app.listen(config.PORT, () => {
  console.log(`Server runing on http://localhost:${config.PORT}`)
})
