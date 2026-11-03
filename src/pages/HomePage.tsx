import { About } from '../sections/About'
import { AffectiveLuxury } from '../sections/AffectiveLuxury'
import { Hero } from '../sections/Hero'
import { Library } from '../sections/Library'
import { Method } from '../sections/Method'
import { Reflections } from '../sections/Reflections'
import { Territories } from '../sections/Territories'
import { usePageTitle } from '../hooks/usePageTitle'

export function HomePage() {
  usePageTitle()

  return (
    <>
      <Hero />
      <About />
      <Method />
      <Territories />
      <AffectiveLuxury />
      <Library />
      <Reflections />
    </>
  )
}
