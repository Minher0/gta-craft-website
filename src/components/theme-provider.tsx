'use client'

import { createContext, useContext, useEffect, useState, ReactNode, useCallback, useMemo, useRef } from 'react'

type Theme = 'dark' | 'light' | 'system'

interface ThemeContextType {
  theme: Theme
  resolvedTheme: 'dark' | 'light'
  setTheme: (theme: Theme) => void
  isClient: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// Helper to get system theme
function getSystemTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: Theme
}

export function ThemeProvider({ children, defaultTheme = 'system' }: ThemeProviderProps) {
  const initializedRef = useRef(false)
  const [isClient, setIsClient] = useState(false)
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [systemTheme, setSystemTheme] = useState<'dark' | 'light'>('dark')

  // Initialize on client side only - use RAF to avoid cascading render lint error
  useEffect(() => {
    if (initializedRef.current) return
    initializedRef.current = true

    // Defer state updates outside the effect body
    const frameId = requestAnimationFrame(() => {
      // Get saved theme
      const savedTheme = localStorage.getItem('gta-craft-theme') as Theme | null
      const initialTheme = savedTheme && ['dark', 'light', 'system'].includes(savedTheme)
        ? savedTheme
        : defaultTheme

      setThemeState(initialTheme)
      setSystemTheme(getSystemTheme())
      setIsClient(true)
    })

    return () => cancelAnimationFrame(frameId)
  }, [defaultTheme])

  // Resolve theme
  const resolvedTheme = useMemo<'dark' | 'light'>(() => {
    return theme === 'system' ? systemTheme : theme
  }, [theme, systemTheme])

  // Apply theme to document
  useEffect(() => {
    if (!isClient) return
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(resolvedTheme)
  }, [resolvedTheme, isClient])

  // Save theme when it changes
  useEffect(() => {
    if (!isClient) return
    localStorage.setItem('gta-craft-theme', theme)
  }, [theme, isClient])

  // Listen for system theme changes
  useEffect(() => {
    if (!isClient) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [isClient])

  const handleSetTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme: handleSetTheme, isClient }}>
      {children}
    </ThemeContext.Provider>
  )
}
