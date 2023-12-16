import React from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { App } from '@/app/containers/App'
import { Template } from '../../layouts/template'
import { type Response } from 'express'

interface RenderParams {
  url: string
  scriptContent?: string
  response: Response
}

export const render = ({ url, scriptContent, response }: RenderParams) => {
  const stream = renderToPipeableStream(
    <Template>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Template>,
    {
      bootstrapScriptContent: scriptContent,
      bootstrapScripts: ['/bundle.js'],
      onShellReady () {
        response.setHeader('content-type', 'text/html')
        stream.pipe(response)
      }
    }
  )
}
