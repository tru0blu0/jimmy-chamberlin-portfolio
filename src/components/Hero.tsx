import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { data } from '../data'

const cinematicEase = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yMotion = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const opacityMotion = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const y = reduceMotion ? '0%' : yMotion
  const opacity = reduceMotion ? 1 : opacityMotion

  // Cinematic stagger delays — like opening credits
  const lineDelays = [0.3, 0.7, 1.1]
  const subDelay = 1.5
  const descDelay = 1.8
  const ctaDelay = 2.1
  const expDelay = 2.5

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-28"
    >
      {/* ── Cinematic key light — single dramatic source from upper-right ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse 60% 55% at 60% 10%, rgba(245,166,35,0.12) 0%, rgba(245,166,35,0.04) 30%, transparent 60%)',
            'radial-gradient(ellipse 50% 70% at 80% 50%, rgba(245,166,35,0.05) 0%, transparent 55%)',
          ].join(', '),
        }}
      />
      {/* Subtle vignette — darkens edges like a film frame */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% 40%, transparent 40%, rgba(8,8,12,0.55) 100%)',
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20"
        style={{ y, opacity, willChange: 'transform, opacity' }}
      >
        {/* ── Headline — Cormorant Garamond, cinematic line breaks ── */}
        <h1 className="font-['Cormorant_Garamond',_serif] font-bold text-text-primary leading-[1.13] max-w-[20ch]"
          style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)', letterSpacing: '-0.005em' }}
        >
          {data.heroLines.map((line, i) => (
            <motion.span
              key={i}
              className="block overflow-hidden"
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: lineDelays[i],
                ease: cinematicEase,
              }}
            >
              <motion.span
                className="inline-block"
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{
                  duration: 0.85,
                  delay: lineDelays[i] + 0.05,
                  ease: cinematicEase,
                }}
              >
                {/* Highlight the second line's accent word */}
                {i === 1 ? (
                  <>
                    <span className="text-amber-glow">shouldn&rsquo;t</span>
                    {' depend'}
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </motion.span>
          ))}
        </h1>

        {/* ── Subheadline — italic, lighter weight for dramatic contrast ── */}
        <motion.p
          className="mt-8 font-['Cormorant_Garamond',_serif] italic font-light text-text-secondary leading-relaxed text-xl md:text-2xl max-w-[28ch]"
          style={{ letterSpacing: '0.01em' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: subDelay, ease: cinematicEase }}
        >
          {data.taglineSub}
        </motion.p>

        {/* ── Descriptor — DM Sans, understated ── */}
        <motion.p
          className="mt-6 font-body font-light text-text-muted text-sm tracking-wide max-w-[42ch]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: descDelay, ease: cinematicEase }}
        >
          {data.heroBio}
        </motion.p>

        {/* ── CTA row — minimal, doesn't compete with the headline ── */}
        <motion.div
          className="mt-12 flex flex-wrap items-center gap-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: ctaDelay, ease: cinematicEase }}
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 border border-amber-base/50 text-amber-text hover:bg-amber-base hover:text-bg-deep font-['Cormorant_Garamond',_serif] font-semibold text-base tracking-[0.04em] px-7 py-3.5 rounded-sm transition-all duration-300 hover:border-amber-base hover:shadow-[0_0_32px_rgba(212,134,10,0.3)] hover:-translate-y-0.5"
          >
            {data.heroCta}
            <span aria-hidden="true" className="text-sm group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </a>

          <a
            href="#contact"
            className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-muted hover:text-text-secondary transition-colors duration-300"
          >
            {data.heroSecondary}
          </a>
        </motion.div>

        {/* ── Experience — subtle bottom anchor ── */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: expDelay, ease: cinematicEase }}
        >
          <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-text-faint mb-4">
            Trusted across
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {data.experience.map((exp) => (
              <span
                key={exp.domain}
                className="font-['Cormorant_Garamond',_serif] text-text-faint text-sm tracking-wide hover:text-text-secondary transition-colors duration-300 cursor-default"
              >
                {exp.domain}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
