import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { data } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yMotion = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacityMotion = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = reduceMotion ? '0%' : yMotion
  const opacity = reduceMotion ? 1 : opacityMotion

  // Split tagline at the highlight word for accent treatment
  const tagline = data.tagline
  const highlight = data.taglineHighlight
  const parts = tagline.split(highlight)

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-32"
    >
      {/* Single clean background — subtle warm gradient from top, no grid noise */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,134,10,0.06) 0%, transparent 60%)',
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16"
        style={{ y, opacity, willChange: 'transform, opacity' }}
      >
        {/* Quiet label — establishes category instantly */}
        <motion.div
          className="mb-8"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-amber-text/70">
            Operations Architecture
          </span>
        </motion.div>

        {/* Headline — single color, comfortable leading, bold not extrabold */}
        <motion.h1
          className="font-display font-bold text-text-primary leading-[1.08] tracking-tight max-w-[18ch]"
          style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)' }}
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          {parts.length === 2 ? (
            <>
              {parts[0]}
              <span className="text-amber-text">{highlight}</span>
              {parts[1]}
            </>
          ) : (
            tagline
          )}
        </motion.h1>

        {/* Subheadline — one line, adds personality */}
        <motion.p
          className="mt-5 font-body text-text-secondary text-lg md:text-xl leading-relaxed max-w-[28ch]"
          custom={0.25}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          {data.taglineSub}
        </motion.p>

        {/* Short descriptor — replaces the dense bio paragraph */}
        <motion.p
          className="mt-4 font-mono text-[12px] text-text-muted tracking-wide max-w-[40ch]"
          custom={0.35}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          {data.heroBio}
        </motion.p>

        {/* CTA row — clear hierarchy, single primary action */}
        <motion.div
          className="mt-10 flex flex-wrap items-center gap-5"
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2.5 bg-amber-base hover:bg-amber-glow text-[#0F1724] font-display font-bold text-sm tracking-wide px-6 py-3.5 rounded-sm transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_0_28px_rgba(212,134,10,0.35)] active:scale-[0.98]"
          >
            {data.heroCta}
            <span aria-hidden="true" className="text-base">→</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-text-secondary hover:text-text-primary text-sm tracking-wide transition-colors duration-200"
          >
            <span aria-hidden="true" className="h-px w-6 bg-text-faint transition-colors group-hover:bg-amber-base/60" />
            {data.heroSecondary}
          </a>
        </motion.div>

        {/* Experience — clean text-only pills, no emojis */}
        <motion.div
          className="mt-20"
          custom={0.7}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-text-muted mb-3">
            Trusted across industries
          </div>
          <div className="flex flex-wrap gap-2">
            {data.experience.map((exp) => (
              <div
                key={exp.domain}
                className="px-4 py-2 border border-white/[0.06] rounded-full text-text-secondary text-[12px] hover:border-amber-base/30 hover:text-text-primary transition-all duration-200 cursor-default"
              >
                <span>{exp.domain}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
