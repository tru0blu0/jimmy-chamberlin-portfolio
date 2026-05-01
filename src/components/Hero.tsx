import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { data } from '../data'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yMotion = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacityMotion = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = reduceMotion ? '0%' : yMotion
  const opacity = reduceMotion ? 1 : opacityMotion

  // Split tagline at the highlight word for a single amber-glow accent
  const highlight = data.taglineHighlight
  const parts = data.tagline.split(highlight)

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-36"
    >
      {/* Subtle warm gradient — matches the radial-glow pattern used by CaseStudies, About, Approach */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,166,35,0.06) 0%, transparent 60%)',
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16"
        style={{ y, opacity, willChange: 'transform, opacity' }}
      >
        {/* Label bar — matches section-number + divider pattern from Metrics, CaseStudies, Approach, About */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          <span className="section-number">01 /</span>
          <div aria-hidden="true" className="h-px w-12 bg-amber-base/40" />
          <span className="font-display font-bold text-[11px] uppercase tracking-[0.2em] text-text-secondary">
            Operations Architecture
          </span>
          {data.available && (
            <span className="ml-4 inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.12em] uppercase text-amber-text/80 border border-amber-base/25 rounded-full px-3 py-1">
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-amber-base animate-pulse" />
              {data.availableText}
            </span>
          )}
        </motion.div>

        {/* Headline — matches site tokens: font-display extrabold, leading-none, text-text-primary */}
        <motion.h1
          className="text-display-lg font-display font-extrabold text-text-primary leading-none max-w-[20ch]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {parts.length === 2 ? (
            <>
              {parts[0]}
              <span className="text-amber-glow">{highlight}</span>
              {parts[1]}
            </>
          ) : (
            data.tagline
          )}
        </motion.h1>

        {/* Subheadline — matches body text pattern from About, CaseStudies */}
        <motion.p
          className="mt-6 font-body text-text-secondary leading-relaxed text-lg md:text-xl max-w-[30ch]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {data.taglineSub}
        </motion.p>

        {/* Descriptor — matches mono label pattern from About "Core Competencies" */}
        <motion.p
          className="mt-4 font-mono text-[10px] tracking-[0.1em] uppercase text-text-muted max-w-[44ch]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {data.heroBio}
        </motion.p>

        {/* CTA row — amber CTA uses site tokens, secondary link matches About link pattern */}
        <motion.div
          className="mt-10 flex flex-wrap items-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <a
            href="#work"
            className="amber-cta group inline-flex items-center gap-3 bg-amber-base hover:bg-amber-glow text-bg-deep font-display font-bold text-sm tracking-wide px-7 py-4 rounded-sm"
          >
            {data.heroCta}
            <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform text-bg-deep">→</span>
          </a>

          <a
            href="#contact"
            className="font-mono text-[10px] tracking-[0.12em] uppercase text-text-secondary hover:text-amber-glow transition-colors flex items-center gap-2"
          >
            <span aria-hidden="true" className="h-px w-6 bg-text-faint" />
            {data.heroSecondary}
          </a>
        </motion.div>

        {/* Experience pills — matches skill tags from About section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-text-muted mb-4">
            Trusted across industries
          </div>
          <div className="flex flex-wrap gap-2">
            {data.experience.map((exp) => (
              <span
                key={exp.domain}
                className="px-3 py-1.5 border border-white/[0.08] text-text-secondary text-[11px] font-body hover:border-amber-base/30 hover:text-text-primary transition-all cursor-default rounded-sm"
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
