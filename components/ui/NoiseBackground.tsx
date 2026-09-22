'use client'

import { useEffect, useRef } from 'react'

export function NoiseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Generate a 128x128 noise pattern tile ONCE
    const tileSize = 128
    const tileCanvas = document.createElement('canvas')
    tileCanvas.width = tileSize
    tileCanvas.height = tileSize
    const tileCtx = tileCanvas.getContext('2d')
    if (!tileCtx) return

    const imgData = tileCtx.createImageData(tileSize, tileSize)
    const d = imgData.data
    for (let i = 0; i < d.length; i += 4) {
      const v = Math.random() * 255
      d[i] = v
      d[i + 1] = v
      d[i + 2] = v
      d[i + 3] = 16 // subtle noise alpha
    }
    tileCtx.putImageData(imgData, 0, 0)

    const pattern = ctx.createPattern(tileCanvas, 'repeat')
    if (!pattern) return

    const render = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      ctx.fillStyle = pattern
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    render()
    window.addEventListener('resize', render)

    return () => {
      window.removeEventListener('resize', render)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -10,
        opacity: 0.25,
        pointerEvents: 'none',
      }}
    />
  )
}

