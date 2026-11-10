import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource/cormorant-garamond/latin-400.css'
import '@fontsource/cormorant-garamond/latin-400-italic.css'
import '@fontsource/cormorant-garamond/latin-500.css'
import '@fontsource-variable/inter/wght.css'

import './styles/tokens.css'
import './styles/base.css'
import './components/ui/ui.css'
import './components/capture/capture.css'
import './components/layout/layout.css'
import './sections/sections.css'
import './pages/pages.css'
import './pages/links.css'

import App from './App'

const root = document.getElementById('root')
if (!root) throw new Error('Elemento #root não encontrado.')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
