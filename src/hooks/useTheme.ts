import { createContext, useContext } from 'react'

export type ThemeName = 'day' | 'night'

export const THEME_STORAGE_KEY = 'camilla-aurea-theme'

type ThemeContextValue = {
  theme: ThemeName
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export function readTheme(): ThemeName {
  if (typeof document === 'undefined') return 'day'
  const attr = document.documentElement.getAttribute('data-theme')
  if (attr === 'night' || attr === 'day') return attr
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === 'night' || stored === 'day') return stored
  } catch {
    /* ignore */
  }
  return 'day'
}

export function applyTheme(theme: ThemeName) {
  document.documentElement.setAttribute('data-theme', theme)
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', theme === 'night' ? '#1a0a0f' : '#4B1120')
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    /* ignore */
  }
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme deve ser usado dentro de ThemeProvider.')
  return context
}
