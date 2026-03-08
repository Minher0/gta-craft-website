'use client'

import { useTheme } from './theme-provider'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme, isClient } = useTheme()

  const cycleTheme = () => {
    const themes: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system']
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  const getIcon = () => {
    if (theme === 'system') {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
    if (resolvedTheme === 'dark') {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    }
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }

  // Show placeholder during SSR to avoid hydration mismatch
  if (!isClient) {
    return (
      <button
        className="fixed top-4 right-4 z-50 p-3 rounded-xl bg-black/50 backdrop-blur-sm border border-[var(--border-color)] flex items-center justify-center"
        aria-label="Loading theme"
      >
        <div className="w-5 h-5" />
      </button>
    )
  }

  return (
    <button
      onClick={cycleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-xl bg-black/50 dark:bg-black/50 backdrop-blur-sm border border-[var(--border-color)] hover:border-[#4CAF50] transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <span className="text-[#4CAF50] group-hover:scale-110 transition-transform block">
          {getIcon()}
        </span>
      </div>
    </button>
  )
}
