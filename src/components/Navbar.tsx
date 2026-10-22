'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navItems } from '@/data/content'
import { useNavbar } from '@/hooks/useNavbar'
import { usePreferences } from '@/context/PreferencesContext'

export function Navbar() {
  const { scrolled, activeSection } = useNavbar()
  const { theme, language, toggleTheme, toggleLanguage, t } = usePreferences()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
  }, [menuOpen])

  useEffect(() => {
    const updateNavbarHeight = () => {
      const nav = document.querySelector('nav')
      if (nav) document.documentElement.style.setProperty('--navbar-height', `${nav.offsetHeight + 24}px`)
    }
    updateNavbarHeight()
    const nav = document.querySelector('nav')
    const resizeObserver = nav ? new ResizeObserver(updateNavbarHeight) : null
    if (nav) resizeObserver?.observe(nav)
    window.addEventListener('resize', updateNavbarHeight)
    return () => {
      resizeObserver?.disconnect()
      window.removeEventListener('resize', updateNavbarHeight)
    }
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 isolate px-5 transform-gpu transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-out md:px-10 lg:px-16 ${scrolled ? 'bg-dark-950/90 backdrop-blur-xl shadow-[inset_0_-1px_0_rgba(96,136,255,0.12),0_8px_28px_rgba(13,13,26,0.28)]' : 'bg-transparent shadow-none'}`}>
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between py-5">
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold text-gradient">KD</span>
            <span className="hidden sm:block text-sm text-dark-400 group-hover:text-primary-400 transition-colors">Kevin Dana</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} aria-current={activeSection === item.href.replace('#', '') ? 'location' : undefined} className={`relative px-4 py-2 text-sm font-medium transition-colors ${activeSection === item.href.replace('#', '') ? 'text-primary-400' : 'text-dark-300 hover:text-dark-50'}`}>
                {t(item.label)}
                {activeSection === item.href.replace('#', '') && <motion.span layoutId="activeIndicator" className="absolute -bottom-1 left-4 right-4 h-0.5 bg-primary-500 rounded-full" />}
              </a>
            ))}
            <div className="ml-2 flex items-center gap-2 border-l border-dark-700/70 pl-3">
              <PreferenceButton onClick={toggleTheme} label={theme === 'dark' ? t('Cambiar a tema claro') : t('Cambiar a tema oscuro')}>
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </PreferenceButton>
              <PreferenceButton pill onClick={toggleLanguage} label={language === 'es' ? t('Cambiar idioma a inglés') : t('Cambiar idioma a español')}>
                {language === 'es' ? <ArgentinaFlagIcon /> : <UnitedStatesFlagIcon />}
                <span className="text-[11px] font-bold tracking-wide">{language.toUpperCase()}</span>
              </PreferenceButton>
            </div>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
            <motion.span animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-dark-50 rounded-full" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-dark-50 rounded-full" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-dark-50 rounded-full" />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed inset-0 z-40 bg-dark-950/95 backdrop-blur-xl md:hidden">
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.a key={item.href} href={item.href} aria-current={activeSection === item.href.replace('#', '') ? 'location' : undefined} onClick={() => setMenuOpen(false)} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className={`text-3xl font-light transition-colors ${activeSection === item.href.replace('#', '') ? 'text-primary-400' : 'text-dark-50 hover:text-primary-400'}`}>{t(item.label)}</motion.a>
              ))}
              <div className="mt-2 flex items-center gap-3 border-t border-dark-700/70 pt-6">
                <PreferenceButton onClick={toggleTheme} label={theme === 'dark' ? t('Cambiar a tema claro') : t('Cambiar a tema oscuro')}>
                  {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                </PreferenceButton>
                <PreferenceButton pill onClick={toggleLanguage} label={language === 'es' ? t('Cambiar idioma a inglés') : t('Cambiar idioma a español')}>
                  {language === 'es' ? <ArgentinaFlagIcon /> : <UnitedStatesFlagIcon />}
                  <span className="text-[11px] font-bold tracking-wide">{language.toUpperCase()}</span>
                </PreferenceButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function PreferenceButton({ children, label, onClick, pill = false }: { children: React.ReactNode; label: string; onClick: () => void; pill?: boolean }) {
  return <button type="button" onClick={onClick} aria-label={label} title={label} className={`flex h-9 items-center justify-center rounded-full border border-dark-700/70 bg-dark-800/60 text-dark-200 transition-colors hover:border-primary-400/60 hover:bg-primary-500/10 hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 ${pill ? 'w-auto gap-2 px-3' : 'w-9'}`}>{children}</button>
}

function SunIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4" aria-hidden="true"><circle cx="12" cy="12" r="3.5" strokeWidth="1.8" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeWidth="1.8" strokeLinecap="round" /></svg>
}

function MoonIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4" aria-hidden="true"><path d="M20 15.2A8.2 8.2 0 0 1 8.8 4a8.2 8.2 0 1 0 11.2 11.2Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function ArgentinaFlagIcon() {
  return <svg viewBox="0 0 28 20" className="h-[14px] w-5 overflow-hidden rounded-[2px] shadow-sm" aria-hidden="true"><rect width="28" height="20" rx="2" fill="#74ACDF" /><rect y="6.67" width="28" height="6.66" fill="#fff" /><circle cx="14" cy="10" r="2" fill="#F6B40E" /><circle cx="14" cy="10" r="0.8" fill="#8B5A00" /></svg>
}

function UnitedStatesFlagIcon() {
  return <svg viewBox="0 0 28 20" className="h-[14px] w-5 overflow-hidden rounded-[2px] shadow-sm" aria-hidden="true"><rect width="28" height="20" rx="2" fill="#fff" /><path fill="#B22234" d="M0 0h28v1.54H0zm0 3.08h28v1.54H0zm0 3.07h28v1.54H0zm0 3.08h28v1.54H0zm0 3.08h28v1.54H0zm0 3.07h28v1.54H0zm0 3.08h28V20H0z" /><rect width="12" height="10.77" rx="1" fill="#3C3B6E" /><g fill="#fff"><circle cx="2" cy="2" r="0.55" /><circle cx="5" cy="2" r="0.55" /><circle cx="8" cy="2" r="0.55" /><circle cx="11" cy="2" r="0.55" /><circle cx="3.5" cy="4.5" r="0.55" /><circle cx="6.5" cy="4.5" r="0.55" /><circle cx="9.5" cy="4.5" r="0.55" /><circle cx="2" cy="7" r="0.55" /><circle cx="5" cy="7" r="0.55" /><circle cx="8" cy="7" r="0.55" /><circle cx="11" cy="7" r="0.55" /><circle cx="3.5" cy="9.5" r="0.55" /><circle cx="6.5" cy="9.5" r="0.55" /><circle cx="9.5" cy="9.5" r="0.55" /></g></svg>
}
