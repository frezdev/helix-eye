import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { App } from '@/app/containers/App'
import { Template } from '../../layouts/template'
import { type Response } from 'express'

interface RenderParams {
  url: string
  scriptContent?: string
  response?: Response
}

export const render = ({ url, scriptContent }: RenderParams) => {
  const sheet = new ServerStyleSheet()
  try {
    const children = renderToString(
      sheet.collectStyles(
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      )
    )

    const stylesTag = sheet.getStyleTags()
    return Template({ children, stylesTag, scriptContent })
  } catch (error) {
    console.error('Error al cargar los estilos', error)
  } finally {
    sheet.seal()
  }
}
