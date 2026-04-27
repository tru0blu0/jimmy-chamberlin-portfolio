import { useRef } from 'react'
import { motion } from 'framer-motion'
import { data } from '../data'

export default function Marquee() {
  const items = [...data.credibilityMarquee, ...data.credibilityMarquee]

  return (
    <div className="relative w-full overflow-hidden border-y border-white/[0.06] bg-bg-surface py-4 select-none">
      <div className="flex gap-6 w-max animate-marquee">
        {items.map((item, i) => (
          <span
            key={i}
            className={`font-mono text-[10px] uppercase tracking-[0.15em] whitespace-nowrap ${
              item === '·' ? 'text-amber-base' : 'text-text-secondary'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-surface to-transparent" />
    </div>
  )
}
