import express, { type Express, type Request, type Response } from 'express'
import path from 'node:path'
import { getGalaxiesJSON } from '@/app/api'
import { config } from './config'
import { render } from './render'

const app: Express = express()

app.disable('X-Powered-By')

app.use(express.static(path.resolve('dist')))

app.get('/galaxias', async (req: Request, res: Response) => {
  const galaxies = await getGalaxiesJSON()

  const initialProps = {
    galaxies
  }
  const scriptContent = `globalThis.__INITIAL_PROPS = ${JSON.stringify(initialProps)}`
  globalThis.__INITIAL_PROPS = JSON.stringify(initialProps)
  res.status(200).send(render({ url: req.url, scriptContent }))
})

app.get('*', (req: Request, res: Response) => {
  res.status(200).send(render({ url: req.url }))
})

app.listen(config.PORT, () => {
  console.log(`Server runing on http://localhost:${config.PORT}`)
})
