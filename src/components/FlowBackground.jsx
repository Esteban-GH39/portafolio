import { useEffect, useRef } from 'react'

const COLORS = ['rgba(139, 92, 246, 0.55)', 'rgba(216, 204, 255, 0.30)']
const SPEED = 0.9
const POINTER_RADIUS = 220

export default function FlowBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    let width = 0
    let height = 0
    let particles = []
    let time = 0
    let frame = 0
    const pointer = { x: -9999, y: -9999, active: false }

    const spawn = (tone = Math.random() < 0.35 ? 1 : 0) => {
      const x = Math.random() * width
      const y = Math.random() * height
      return { x, y, px: x, py: y, life: 90 + Math.random() * 240, tone }
    }

    const angleAt = (x, y) => {
      let a =
        Math.sin(x * 0.0035 + time * 0.6) +
        Math.cos(y * 0.0042 - time * 0.45) +
        Math.sin((x + y) * 0.0021 + time * 0.3)
      a *= Math.PI * 0.9

      if (pointer.active) {
        const dx = x - pointer.x
        const dy = y - pointer.y
        const dist = Math.hypot(dx, dy)
        if (dist < POINTER_RADIUS) {
          const k = 1 - dist / POINTER_RADIUS
          const swirl = Math.atan2(dy, dx) + Math.PI / 2
          return Math.atan2(
            Math.sin(a) * (1 - k) + Math.sin(swirl) * k,
            Math.cos(a) * (1 - k) + Math.cos(swirl) * k,
          )
        }
      }
      return a
    }

    const step = () => {
      time += 0.0016

      ctx.globalCompositeOperation = 'destination-out'
      ctx.fillStyle = 'rgba(0, 0, 0, 0.045)'
      ctx.fillRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'source-over'

      ctx.lineWidth = 1.1
      ctx.lineCap = 'round'

      for (let tone = 0; tone < COLORS.length; tone++) {
        ctx.beginPath()
        for (const p of particles) {
          if (p.tone !== tone) continue
          const a = angleAt(p.x, p.y)
          p.px = p.x
          p.py = p.y
          p.x += Math.cos(a) * SPEED
          p.y += Math.sin(a) * SPEED
          ctx.moveTo(p.px, p.py)
          ctx.lineTo(p.x, p.y)
        }
        ctx.strokeStyle = COLORS[tone]
        ctx.stroke()
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.life -= 1
        if (p.life <= 0 || p.x < -10 || p.y < -10 || p.x > width + 10 || p.y > height + 10) {
          particles[i] = spawn(p.tone)
        }
      }
    }

    const loop = () => {
      step()
      frame = requestAnimationFrame(loop)
    }

    const paintStill = () => {
      cancelAnimationFrame(frame)
      for (let i = 0; i < 380; i++) step()
    }

    const start = () => {
      cancelAnimationFrame(frame)
      if (reduceMotion.matches) paintStill()
      else frame = requestAnimationFrame(loop)
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)

      const count = Math.round(Math.min(420, Math.max(120, (width * height) / 5200)))
      particles = Array.from({ length: count }, () => spawn())
      start()
    }

    const onPointerMove = (e) => {
      if (e.pointerType === 'touch') return
      pointer.x = e.clientX
      pointer.y = e.clientY
      pointer.active = true
    }
    const onPointerLeave = () => {
      pointer.active = false
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove)
    document.addEventListener('pointerleave', onPointerLeave)
    reduceMotion.addEventListener('change', start)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('pointerleave', onPointerLeave)
      reduceMotion.removeEventListener('change', start)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  )
}
