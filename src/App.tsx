import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { FloatTools } from './components/layout/FloatTools'
import { PrototypeNotice } from './components/layout/PrototypeNotice'
import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { ThemeProvider } from './components/layout/ThemeProvider'
import { EntryPage } from './pages/EntryPage'
import { HomePage } from './pages/HomePage'
import { LibraryPage } from './pages/LibraryPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { SeriesPage } from './pages/SeriesPage'

function RouteEffects() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      const move = () =>
        document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' })
      requestAnimationFrame(move)
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function AppShell() {
  return (
    <ThemeProvider>
      <RouteEffects />
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <PrototypeNotice />
      <SiteHeader />
      <main id="conteudo" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/biblioteca" element={<LibraryPage />} />
          <Route path="/biblioteca/:seriesSlug" element={<SeriesPage />} />
          <Route path="/biblioteca/:seriesSlug/:entrySlug" element={<EntryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
      <FloatTools />
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
