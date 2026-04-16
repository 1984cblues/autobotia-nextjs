'use client'

import { useEffect, useRef, useState } from 'react'

export function FloatingCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = cursorRef.current
    if (!el) return

    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`
    }

    const onEnter = () => setActive(true)
    const onLeave = () => setActive(false)

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button').forEach(node => {
      node.addEventListener('mouseenter', onEnter)
      node.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', move)
      document.querySelectorAll('a, button').forEach(node => {
        node.removeEventListener('mouseenter', onEnter)
        node.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: active ? '48px' : '20px',
        height: active ? '48px' : '20px',
        border: '1px solid rgba(255,255,255,0.8)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease',
        background: active ? 'rgba(255,255,255,0.08)' : 'transparent',
        backdropFilter: active ? 'blur(4px)' : 'none',
        marginTop: active ? '-14px' : '0',
        marginLeft: active ? '-14px' : '0',
      }}
    />
  )
}
