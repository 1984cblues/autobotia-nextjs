'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  
  // High performance motion values
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  
  // Spring physics for natural following feeling (lag)
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    // Disable on mobile/touch interfaces or if reduced motion is preferred
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches || 'ontouchstart' in window) return

    setIsVisible(true)

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', updateMousePosition)
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [mouseX, mouseY])

  if (!isVisible) return null

  return (
    <>
      {/* Outer Spring Follower */}
      <motion.div
        aria-hidden="true"
        style={{
          x: cursorX,
          y: cursorY,
          position: 'fixed',
          top: -16, // Center offset
          left: -16, // Center offset
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '1.5px solid rgba(6, 182, 212, 0.4)', // Accent color
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference' // Modern agency look
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
      />
      {/* Exact center dot */}
      <motion.div
        aria-hidden="true"
        style={{
          x: mouseX,
          y: mouseY,
          position: 'fixed',
          top: -4,
          left: -4,
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#06B6D4',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference'
        }}
      />
    </>
  )
}
