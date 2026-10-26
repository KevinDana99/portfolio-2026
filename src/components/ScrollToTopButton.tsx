'use client'

import { useEffect, useState } from 'react'
import { usePreferences } from '@/context/PreferencesContext'

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = usePreferences()

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 0)

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, left: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  if (!isVisible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-[50px] right-[50px] z-40 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary-500 text-white shadow-lg shadow-primary-900/40 transition-colors hover:bg-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950"
      aria-label={t('Volver arriba')}
      title={t('Volver arriba')}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="m6 15 6-6 6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
