import { useCallback, useEffect, useRef, useState } from 'react'
import { navItems } from '../../content/site'
import { AppLink } from '../ui/AppLink'
import { Wordmark } from '../ui/Wordmark'

const DESKTOP_QUERY = '(min-width: 56em)'

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const closeMenu = useCallback((returnFocus = false) => {
    setIsOpen(false)
    if (returnFocus) toggleRef.current?.focus()
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const desktop = window.matchMedia(DESKTOP_QUERY)
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu(true)
    }
    const onViewportChange = () => {
      if (desktop.matches) closeMenu()
    }

    document.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onViewportChange)
    document.body.classList.add('is-scroll-locked')

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onViewportChange)
      document.body.classList.remove('is-scroll-locked')
    }
  }, [isOpen, closeMenu])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <AppLink className="site-header__brand" href="/" onClick={() => closeMenu()}>
          <Wordmark />
          <span className="sr-only"> — voltar ao início</span>
        </AppLink>

        <button
          ref={toggleRef}
          type="button"
          className="site-header__toggle"
          aria-expanded={isOpen}
          aria-controls="menu-principal"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="site-header__toggle-bars" aria-hidden="true" />
          <span className="sr-only">{isOpen ? 'Fechar menu' : 'Abrir menu'}</span>
          <span className="site-header__toggle-label" aria-hidden="true">
            {isOpen ? 'Fechar' : 'Menu'}
          </span>
        </button>

        <nav
          id="menu-principal"
          className="site-nav"
          aria-label="Navegação principal"
          data-open={isOpen}
        >
          <ul role="list" className="site-nav__list">
            {navItems.map((item) => (
              <li key={item.href}>
                <AppLink className="site-nav__link" href={item.href} onClick={() => closeMenu()}>
                  {item.label}
                </AppLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
