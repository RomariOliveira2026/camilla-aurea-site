import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { minerarGuide, whatsapp, whatsappHref } from '../../content/site'

export function FloatTools() {
  const { pathname } = useLocation()
  const hideWhatsapp = pathname === minerarGuide.landingPath
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 420)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <div className="float-tools">
      {whatsapp.confirmed && !hideWhatsapp ? (
        <a
          className="float-tools__btn float-tools__btn--whatsapp"
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path
              fill="currentColor"
              d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.55 2 2.09 6.45 2.09 11.94c0 1.76.46 3.47 1.34 4.99L2 22l5.21-1.37a9.9 9.9 0 0 0 4.83 1.23h.01c5.49 0 9.95-4.46 9.95-9.94a9.86 9.86 0 0 0-2.95-7.01Zm-7 15.27h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.09.81.83-3.01-.2-.31a8.2 8.2 0 0 1-1.26-4.39c0-4.54 3.7-8.23 8.25-8.23a8.2 8.2 0 0 1 8.22 8.24c0 4.54-3.7 8.22-8.25 8.22Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.24.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.43.06-.65.31-.23.24-.86.84-.86 2.05 0 1.21.88 2.37 1 2.54.12.16 1.75 2.67 4.24 3.74 1.49.64 1.9.7 2.58.59.39-.06 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.29Z"
            />
          </svg>
          <span className="sr-only">Abrir WhatsApp (abre em nova aba)</span>
        </a>
      ) : null}

      <button
        type="button"
        className="float-tools__btn float-tools__btn--top"
        onClick={goTop}
        hidden={!showTop}
        aria-label="Voltar ao topo"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path
            d="M12 5v14M6.5 10.5 12 5l5.5 5.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}
