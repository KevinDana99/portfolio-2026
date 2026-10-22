'use client'

import { useState, useEffect, useCallback } from 'react'

export function useNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))
    if (!sections.length) return

    const navbarOffset = Number.parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--navbar-height'),
    ) || 100
    const readingOffset = navbarOffset + Math.min(window.innerHeight * 0.28, 240)
    const scrollPosition = window.scrollY + readingOffset
    const isAtPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2

    let currentSection = sections[0].id

    if (isAtPageEnd) {
      currentSection = sections.at(-1)?.id ?? currentSection
    } else {
      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) currentSection = section.id
        else break
      }
    }

    setActiveSection(currentSection)
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return { scrolled, activeSection }
}
