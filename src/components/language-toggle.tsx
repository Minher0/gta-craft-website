'use client'

import { useState, useRef, useEffect } from 'react'
import { useLanguage, supportedLanguages } from './language-provider'
import { Language } from '@/lib/translations'

export function LanguageToggle() {
  const { language, setLanguage, isClient } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Find current language
  const currentLang = supportedLanguages.find(l => l.code === language) || supportedLanguages[1]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelectLanguage = (langCode: Language) => {
    setLanguage(langCode)
    setIsOpen(false)
  }

  // Show placeholder during SSR to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className="fixed top-4 right-16 z-50">
        <div className="p-3 rounded-xl bg-black/50 backdrop-blur-sm border border-[var(--border-color)] flex items-center gap-2">
          <span className="text-lg">🌐</span>
          <span className="text-sm text-[var(--text-primary)] hidden sm:inline">EN</span>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed top-4 right-16 z-50" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-xl bg-black/50 dark:bg-black/50 backdrop-blur-sm border border-[var(--border-color)] hover:border-[#4CAF50] transition-all duration-300 flex items-center gap-2"
        aria-label="Change language"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="text-sm text-[var(--text-primary)] hidden sm:inline">{currentLang.code.toUpperCase()}</span>
        <svg 
          className={`w-4 h-4 text-[#4CAF50] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 py-2 bg-black/90 dark:bg-black/90 backdrop-blur-sm border border-[var(--border-color)] rounded-xl shadow-lg min-w-[180px] max-h-[320px] overflow-y-auto">
          {supportedLanguages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelectLanguage(lang.code)}
              className={`w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-[#4CAF50]/20 transition-colors ${
                language === lang.code ? 'bg-[#4CAF50]/10 text-[#4CAF50]' : 'text-[var(--text-primary)]'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm">{lang.name}</span>
              {language === lang.code && (
                <svg className="w-4 h-4 ml-auto text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
