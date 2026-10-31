'use client'

import { useEffect, useRef, useState } from 'react'

export function useElementLoading<T extends HTMLElement>() {
  const elementRef = useRef<T>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (elementRef.current) setIsLoading(false)
  }, [])

  return { elementRef, isLoading }
}
