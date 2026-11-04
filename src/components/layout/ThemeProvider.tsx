import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { applyTheme, readTheme, ThemeContext, type ThemeName } from '../../hooks/useTheme'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>(readTheme)

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: ThemeName = current === 'night' ? 'day' : 'night'
      applyTheme(next)
      return next
    })
  }, [])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
