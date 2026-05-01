import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { data } from '../data'

function Counter({ to, prefix = '', suffix = '' }: { to: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  // Use '0px' margin so counter fires as soon as any pixel enters the viewport
  const inView = useInView(ref, { once: true, margin: '0px' })
  const reduceMotion = useReducedMotion()
  const isFloat = !Number.isInteger(to)

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      setCount(to)
      return
    }
    let raf: number
    const start = performance.now()
    const duration = 1400

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      const current = eased * to
      setCount(isFloat ? Math.round(current * 10) / 10 : Math.floor(current))
      if (progress < 1) raf = requestAnimationFrame(tick)
      else setCount(to)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, reduceMotion, isFloat])

  const display = isFloat ? count.toFixed(1) : count

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{display}{suffix}
    </span>
  )
}

export default function Metrics() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="metrics" ref={ref} aria-labelledby="metrics-heading" className="py-28 md:py-36 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <h2 id="metrics-heading" className="sr-only">Measurable Impact</h2>
        {/* Section header */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">02 /</span>
          <div aria-hidden="true" className="h-px flex-1 max-w-[60px] bg-amber-base/40" />
          <span aria-hidden="true" className="font-display font-bold text-[11px] uppercase tracking-[0.2em] text-text-secondary">
            Measurable Impact
          </span>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
          {data.stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-bg-deep p-6 md:p-12 group hover:bg-bg-surface transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Number */}
              <div className="font-display text-[clamp(2rem,7vw,3.5rem)] md:text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-amber-glow leading-none mb-3 group-hover:text-amber-beam transition-colors">
                <Counter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              {/* Label */}
              <p className="font-mono text-[11px] tracking-[0.1em] text-text-secondary uppercase leading-relaxed">
                {stat.label}
              </p>
              {/* Bottom accent */}
              <div className="mt-6 h-px w-8 bg-amber-base/50 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
