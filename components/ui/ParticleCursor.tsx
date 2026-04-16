'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  alpha: number
  size: number
  color: string
}

const COLORS = [
  'rgba(30, 64, 175,',   // brand blue
  'rgba(6, 182, 212,',   // brand cyan
  'rgba(56, 189, 248,',  // light sky blue
  'rgba(99, 102, 241,',  // indigo
]

export function ParticleCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const mouse = useRef({ x: -200, y: -200 })
  const animFrameRef = useRef<number>(0)
  const lastEmit = useRef(0)

  useEffect(() => {
    // Skip on mobile and if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) return
    if ('ontouchstart' in window) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }

      const now = Date.now()
      if (now - lastEmit.current < 30) return // throttle: emit every 30ms
      lastEmit.current = now

      // Emit 3-6 particles per burst
      const count = Math.floor(Math.random() * 3) + 3
      for (let i = 0; i < count; i++) {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)]
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * 1.5 + 0.5
        particles.current.push({
          x: mouse.current.x,
          y: mouse.current.y,
          vx: Math.cos(angle) * speed * 0.6,
          vy: Math.sin(angle) * speed - 1.2, // bias upward
          alpha: Math.random() * 0.4 + 0.5,
          size: Math.random() * 4 + 2,
          color,
        })
      }

      // Cap total particles
      if (particles.current.length > 180) {
        particles.current = particles.current.slice(-180)
      }
    }
    window.addEventListener('mousemove', onMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current = particles.current.filter(p => p.alpha > 0.03)

      for (const p of particles.current) {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.03  // subtle gravity pull-up
        p.alpha *= 0.94
        p.size *= 0.97

        ctx.beginPath()
        ctx.arc(p.x, p.y, Math.max(p.size, 0.1), 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${p.alpha.toFixed(2)})`
        ctx.fill()
      }

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animFrameRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
      aria-hidden="true"
    />
  )
}
