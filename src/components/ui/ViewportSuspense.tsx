'use client'

import { Suspense, useEffect, useRef, useState, type ReactNode } from 'react'

interface ViewportSuspenseProps {
  children: ReactNode
  fallback: ReactNode
  className?: string
  rootMargin?: string
  revealDelayMs?: number
}

/**
 * Keeps the fallback mounted until the content is close to the viewport.
 * Suspense remains the boundary for any nested lazy component or async work.
 */
export function ViewportSuspense({
  children,
  fallback,
  className = '',
  rootMargin = '0px',
  revealDelayMs = 250,
}: ViewportSuspenseProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    let revealTimer: ReturnType<typeof setTimeout> | undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          revealTimer = setTimeout(() => setIsVisible(true), revealDelayMs)
        }
      },
      { rootMargin },
    )

    observer.observe(element)
    return () => {
      observer.disconnect()
      if (revealTimer) clearTimeout(revealTimer)
    }
  }, [revealDelayMs, rootMargin])

  return (
    <div ref={containerRef} className={className} aria-busy={!isVisible}>
      {isVisible ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}
    </div>
  )
}
