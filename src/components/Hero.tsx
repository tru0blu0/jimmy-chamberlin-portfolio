import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion, MotionConfig } from 'framer-motion'
import { data } from '../data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}
const line = {
  hidden: { y: '100%', opacity: 0 },
  show: { y: '0%', opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yMotion = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacityMotion = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const y = reduceMotion ? '0%' : yMotion
  const opacity = reduceMotion ? 1 : opacityMotion

  const words1 = data.tagline[0].split(' ')
  const words2 = data.tagline[1].split(' ')

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-32">
      {/* Layered backgrounds */}
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div className="absolute inset-0 spotlight-bg" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[45vw] h-[45vw] rounded-full opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, var(--color-amber-glow, #F5A623) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translate(30%, -20%)',
        }}
      />

      <motion.div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16" style={{ y, opacity, willChange: 'transform, opacity' }}>
        {/* Badge */}
        <motion.div
          className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="h-px w-8 bg-amber-base" aria-hidden="true" />
          <span className="section-number">{data.subtitle}</span>
          {data.available && (
            <span className="ml-4 inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.12em] uppercase text-amber-text/80 border border-amber-base/25 rounded-full px-3 py-1">
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-amber-base animate-pulse" />
              {data.availableText}
            </span>
          )}
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="text-display-lg md:text-display-xl font-display font-extrabold text-text-primary leading-none tracking-tight mb-0"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {words1.map((w, i) => (
            <span key={i} className="overflow-hidden inline-block mr-[0.18em]">
              <motion.span className="inline-block" variants={line}>{w}</motion.span>
            </span>
          ))}
          <br />
          {words2.map((w, i) => (
            <span key={i} className="overflow-hidden inline-block mr-[0.18em]">
              <motion.span
                className={`inline-block ${i === words2.length - 1 ? 'text-amber-base' : ''}`}
                variants={line}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Description row */}
        <div className="mt-10 flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <motion.p
            className="font-body text-text-secondary text-lg leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            I build the operational infrastructure that turns complex, fragmented processes into
            systems that work — reliably, repeatedly, and at scale. Now layering in AI-augmented
            workflows: LLM-powered document processing, automated compliance monitoring, and
            agent-driven decision support. Same architectural rigor — modern tooling.
          </motion.p>

          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
          >
            <motion.a
              href="#work"
              className="amber-cta group inline-flex items-center gap-3 bg-amber-base hover:bg-amber-glow text-bg-deep font-display font-bold text-sm tracking-wide px-7 py-4 rounded-sm"
              initial={{ '--x': '100%' } as React.CSSProperties & { '--x': string }}
              animate={{ '--x': '-100%' } as React.CSSProperties & { '--x': string }}
              whileTap={{ scale: 0.97 }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 1.5,
                type: 'spring',
                stiffness: 20,
                damping: 15,
                mass: 2,
                scale: { type: 'spring', stiffness: 10, damping: 5, mass: 0.1 },
              }}
            >
              <span className="shiny-text relative block font-display font-bold text-sm tracking-wide text-bg-deep">
                VIEW CASE STUDIES
              </span>
              <span aria-hidden="true" className="shiny-text group-hover:translate-x-1 transition-transform text-bg-deep">→</span>
              <span aria-hidden="true" className="shiny-overlay absolute inset-0 block rounded-sm p-px" />
            </motion.a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-text-secondary hover:text-text-primary text-sm tracking-wide transition-colors"
            >
              <span aria-hidden="true" className="h-px w-6 bg-text-faint" />
              Let's talk operations
            </a>
          </motion.div>
        </div>

        {/* Experience pills */}
        <motion.div
          className="mt-16 flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {data.experience.map((exp) => (
            <div
              key={exp.domain}
              className="flex items-center gap-2 px-4 py-2 border border-white/[0.08] rounded-full text-text-secondary text-[12px] hover:border-amber-base/30 hover:text-text-primary transition-all cursor-default"
            >
              <span aria-hidden="true" className="text-amber-text text-xs">{exp.icon}</span>
              <span className="flex flex-col leading-tight">
                <span>{exp.domain}</span>
                <span className="text-[10px] text-text-muted">{exp.period}</span>
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          aria-hidden="true"
          className="absolute bottom-8 left-6 md:left-10 lg:left-16 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex flex-col gap-1">
            <motion.div
              className="w-px h-12 bg-gradient-to-b from-amber-base to-transparent mx-auto"
              animate={reduceMotion ? {} : { scaleY: [1, 0.5, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <span className="font-mono text-[9px] tracking-[0.2em] text-text-faint uppercase rotate-90 origin-left ml-2">
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
