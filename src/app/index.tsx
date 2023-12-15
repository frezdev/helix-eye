import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Template } from '../server/render/template'
import { App } from './containers/App'
import './assets/favicon.ico'

hydrateRoot(
  document,
  <Template>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Template>
)
