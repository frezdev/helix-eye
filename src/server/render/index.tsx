import React from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { App } from '@/app/containers/App'
import { Template } from './template'
import { type Response } from 'express'

export const render = (url: string, response: Response) => {
  const { pipe } = renderToPipeableStream(
    <Template>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Template>,
    {
      bootstrapScripts: ['/bundle.js'],
      onShellReady () {
        response.setHeader('content-type', 'text/html')
        pipe(response)
      }
    }
  )
}
