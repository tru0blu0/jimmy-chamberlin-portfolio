import { useReducedMotion } from 'framer-motion'
import { data } from '../data'

export default function Marquee() {
  const reduceMotion = useReducedMotion()
  // When reduced motion is preferred, render a single static row and skip the
  // infinite scroll. The animated version doubles the items so the seamless
  // -50% loop has content on both sides.
  const items = reduceMotion ? data.credibilityMarquee : [...data.credibilityMarquee, ...data.credibilityMarquee]

  return (
    <div className="relative z-10 w-full overflow-hidden border-y border-white/[0.06] bg-bg-surface py-4 select-none">
      <div className={`flex flex-wrap justify-center gap-6 ${reduceMotion ? '' : 'w-max animate-marquee flex-nowrap'}`}>
        {items.map((item, i) => (
          <span
            key={i}
            className={`font-mono text-[10px] uppercase tracking-[0.15em] whitespace-nowrap ${
              item === '·' ? 'text-amber-text' : 'text-text-secondary'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
      {/* Fade edges */}
      {!reduceMotion && (
        <>
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-surface to-transparent" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-surface to-transparent" />
        </>
      )}
    </div>
  )
}
