'use client'
import { useEffect, useState } from "react"

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true
    }
    return false
  })

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector('html')!.classList.remove('light')
      document.querySelector('html')!.classList.add('dark')
    } else {
      document.querySelector('html')!.classList.remove('dark')
      document.querySelector('html')!.classList.add('light')
    }
  }, [isDarkMode])

  return { isDarkMode, toggleDarkMode }
}