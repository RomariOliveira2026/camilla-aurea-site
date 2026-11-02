import { PrototypeNotice } from './components/layout/PrototypeNotice'
import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { About } from './sections/About'
import { AffectiveLuxury } from './sections/AffectiveLuxury'
import { Hero } from './sections/Hero'
import { Library } from './sections/Library'
import { Method } from './sections/Method'
import { Reflections } from './sections/Reflections'
import { Territories } from './sections/Territories'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <PrototypeNotice />
      <SiteHeader />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <About />
        <Method />
        <Territories />
        <AffectiveLuxury />
        <Library />
        <Reflections />
      </main>
      <SiteFooter />
    </>
  )
}
