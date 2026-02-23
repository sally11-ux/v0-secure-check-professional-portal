"use client"

import { useEffect, useState } from "react"

export function useCounter(end: number, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    let frame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        frame = requestAnimationFrame(animate)
      }
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [end, isVisible, duration])

  return count
}
