import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { FloatTools } from './components/layout/FloatTools'
import { PrototypeNotice } from './components/layout/PrototypeNotice'
import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { ThemeProvider } from './components/layout/ThemeProvider'
import { minerarGuide } from './content/site'
import { EntryPage } from './pages/EntryPage'
import { HomePage } from './pages/HomePage'
import { LibraryPage } from './pages/LibraryPage'
import { LinksPage } from './pages/LinksPage'
import { MinerarPage } from './pages/MinerarPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { SeriesPage } from './pages/SeriesPage'

function RouteEffects() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      const move = () => {
        const el = document.getElementById(id)
        if (!el) return
        el.scrollIntoView({ behavior: 'auto', block: 'start' })
        if (el.id === minerarGuide.formAnchor) {
          const field = el.querySelector<HTMLElement>(
            'input:not([type="hidden"]):not([disabled]), textarea, select',
          )
          ;(field ?? el).focus({ preventScroll: true })
        }
      }
      const timer = window.setTimeout(move, 50)
      return () => window.clearTimeout(timer)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function AppShell() {
  const { pathname } = useLocation()
  const isLinksHub = pathname.replace(/\/+$/, '') === '/links'

  return (
    <ThemeProvider>
      <RouteEffects />
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <PrototypeNotice />
      {isLinksHub ? null : <SiteHeader />}
      <main id="conteudo" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/minerar" element={<MinerarPage />} />
          <Route path="/biblioteca" element={<LibraryPage />} />
          <Route path="/biblioteca/:seriesSlug" element={<SeriesPage />} />
          <Route path="/biblioteca/:seriesSlug/:entrySlug" element={<EntryPage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {isLinksHub ? null : <SiteFooter />}
      {isLinksHub ? null : <FloatTools />}
    </ThemeProvider>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
