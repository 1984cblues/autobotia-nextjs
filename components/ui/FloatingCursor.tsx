'use client'

import { useEffect, useRef, useState } from 'react'

export function FloatingCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Only enable on devices with a fine pointer (desktop mouse/trackpad)
    const mediaQuery = window.matchMedia('(pointer: fine)')
    if (!mediaQuery.matches) return

    setEnabled(true)
    const el = cursorRef.current
    if (!el) return

    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`
    }

    // High performance event delegation
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (target && target.closest('a, button, [role="button"], input[type="submit"]')) {
        setActive(true)
      }
    }

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (target && target.closest('a, button, [role="button"], input[type="submit"]')) {
        setActive(false)
      }
    }

    document.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseout', onOut, { passive: true })

    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: active ? '48px' : '20px',
        height: active ? '48px' : '20px',
        border: '1px solid #fff',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease',
        background: active ? 'rgba(255,255,255,0.15)' : 'transparent',
        backdropFilter: active ? 'blur(4px)' : 'none',
        marginTop: active ? '-14px' : '0',
        marginLeft: active ? '-14px' : '0',
      }}
    />
  )
}

