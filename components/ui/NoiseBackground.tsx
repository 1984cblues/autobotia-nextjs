'use client'

import { useEffect, useRef } from 'react'

export function NoiseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
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

    let raf: number
    const render = () => {
      const img = ctx.createImageData(canvas.width, canvas.height)
      const d = img.data
      for (let i = 0; i < d.length; i += 4) {
        // v needs to be white/gray depending on theme? No, just keep it low-alpha
        const v = Math.random() * 255
        d[i] = v; d[i + 1] = v; d[i + 2] = v; d[i + 3] = 12 // and keep canvas opacity
      }
      ctx.putImageData(img, 0, 0)
      raf = requestAnimationFrame(render)
    }
    render()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -10, opacity: 0.2, pointerEvents: 'none' }}
    />
  )
}
