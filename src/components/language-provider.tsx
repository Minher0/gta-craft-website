'use client'

import { createContext, useContext, useState, ReactNode, useCallback, useEffect, useMemo, useRef } from 'react'
import { Language, translations } from '@/lib/translations'

// All supported languages
export const supportedLanguages: { code: Language; name: string; flag: string }[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
]

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isClient: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

// Map browser language to supported language
function mapBrowserLanguage(browserLang: string): Language {
  const map: Record<string, Language> = {
    'fr': 'fr', 'fr-FR': 'fr',
    'en': 'en', 'en-US': 'en', 'en-GB': 'en',
    'ru': 'ru', 'ru-RU': 'ru',
    'zh': 'zh', 'zh-CN': 'zh', 'zh-TW': 'zh',
    'es': 'es', 'es-ES': 'es', 'es-MX': 'es',
    'de': 'de', 'de-DE': 'de',
    'ja': 'ja', 'ja-JP': 'ja',
    'pt': 'pt', 'pt-BR': 'pt', 'pt-PT': 'pt',
    'it': 'it', 'it-IT': 'it',
    'ko': 'ko', 'ko-KR': 'ko',
  }
  return map[browserLang] || 'en'
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const initializedRef = useRef(false)
  const [language, setLanguageState] = useState<Language>('en')
  const [isClient, setIsClient] = useState(false)

  // Initialize on client using subscription pattern
  useEffect(() => {
    // Prevent double initialization in dev mode
    if (initializedRef.current) return
    initializedRef.current = true

    // Get initial language from localStorage or browser
    const getInitialLang = () => {
      const saved = localStorage.getItem('gta-craft-language') as Language | null
      if (saved && supportedLanguages.some(l => l.code === saved)) return saved
      return mapBrowserLanguage(navigator.language || 'en')
    }

    // Use RAF to defer state updates outside effect body
    // This avoids the cascading render lint error
    requestAnimationFrame(() => {
      setLanguageState(getInitialLang())
      setIsClient(true)
    })
  }, [])

  // Persist language changes
  useEffect(() => {
    if (isClient && initializedRef.current) {
      localStorage.setItem('gta-craft-language', language)
      document.documentElement.lang = language
    }
  }, [language, isClient])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
  }, [])

  const t = useCallback((key: string): string => {
    return translations[language]?.[key] || translations['en']?.[key] || key
  }, [language])

  const value = useMemo(() => ({
    language, setLanguage, t, isClient
  }), [language, setLanguage, t, isClient])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
