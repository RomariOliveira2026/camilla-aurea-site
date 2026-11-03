import { useEffect } from 'react'

const DEFAULT_TITLE = 'Camilla Áurea — Poder, Valor e Luxo Afetivo'

export function usePageTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} — Camilla Áurea` : DEFAULT_TITLE
    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [page])
}
