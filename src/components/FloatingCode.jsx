import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const SNIPPET = [
  { t: 'function ', c: 'text-accent-light' },
  { t: 'calculateRanking', c: 'text-ink' },
  { t: '(matches) {\n  ', c: 'text-ink-muted' },
  { t: 'return ', c: 'text-accent-light' },
  { t: 'matches', c: 'text-ink' },
  { t: '.reduce((table, m) => {\n    ', c: 'text-ink-muted' },
  { t: 'const winner = m.score1 > m.score2 ? m.p1 : m.p2', c: 'text-ink-muted' },
  { t: '\n    table[winner].points += 3\n    ', c: 'text-ink-muted' },
  { t: 'return ', c: 'text-accent-light' },
  { t: 'table\n  }, ', c: 'text-ink-muted' },
  { t: 'initialTable', c: 'text-ink' },
  { t: ')\n}', c: 'text-ink-muted' },
]

const FULL_TEXT = SNIPPET.map((s) => s.t).join('')

export default function FloatingCode() {
  const [typedLength, setTypedLength] = useState(0)

  useEffect(() => {
    if (typedLength >= FULL_TEXT.length) return
    const id = setTimeout(() => setTypedLength((n) => n + 1), 18)
    return () => clearTimeout(id)
  }, [typedLength])

  // Reconstruye los segmentos coloreados respetando cuánto texto ya se "escribió"
  let remaining = typedLength
  const renderedSegments = SNIPPET.map((seg, i) => {
    const visible = seg.t.slice(0, Math.max(0, Math.min(seg.t.length, remaining)))
    remaining -= seg.t.length
    return (
      <span key={i} className={seg.c}>
        {visible}
      </span>
    )
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="animate-floatY card w-full max-w-md shadow-glow"
    >
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34D399]" />
        <span className="ml-3 font-mono text-[11px] text-ink-faint">tablemaster/ranking.js</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed">
        <code>
          {renderedSegments}
          <span className="animate-blink text-accent-light">▍</span>
        </code>
      </pre>
    </motion.div>
  )
}
