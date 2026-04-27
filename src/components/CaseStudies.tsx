import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { data } from '../data'

function CaseCard({ study, index, isOpen, onClick }: {
  study: typeof data.caseStudies[0]
  index: number
  isOpen: boolean
  onClick: () => void
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const toggleId = `case-${study.id}-toggle`
  const panelId = `case-${study.id}-body`

  return (
    <motion.div
      ref={ref}
      className="border-b border-white/[0.07] last:border-0"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Header row — always visible */}
      <button
        id={toggleId}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-start gap-6 py-8 md:py-10 group text-left"
      >
        {/* Number */}
        <span className="font-mono text-[11px] tracking-[0.1em] text-text-muted mt-1 shrink-0 w-8">
          {study.id}
        </span>

        {/* Domain tag */}
        <span className="font-mono text-[9px] tracking-[0.12em] uppercase px-3 py-1.5 border border-amber-base/30 text-amber-text rounded-sm shrink-0 hidden md:inline-block mt-0.5">
          {study.domain}
        </span>

        {/* Headline */}
        <div className="flex-1 min-w-0">
          <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-text-muted mb-2 md:hidden">
            {study.domain} · {study.year}
          </div>
          <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary group-hover:text-amber-beam transition-colors leading-snug text-balance">
            {study.headline}
          </h3>
        </div>

        {/* Year */}
        <span className="font-mono text-[11px] text-text-muted shrink-0 hidden md:block">{study.year}</span>

        {/* Toggle icon */}
        <div aria-hidden="true" className="shrink-0 w-8 h-8 border border-white/[0.1] rounded-sm flex items-center justify-center text-text-secondary group-hover:border-amber-base/40 group-hover:text-amber-text transition-all mt-0.5">
          <motion.span className="font-mono text-lg leading-none" animate={{ rotate: isOpen ? 45 : 0 }}>
            +
          </motion.span>
        </div>
      </button>

      {/* Expanded body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            id={panelId}
            role="region"
            aria-labelledby={toggleId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 pl-14 pr-0 md:pl-[calc(2rem+96px)]">
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {/* Left: narrative */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h4 className="font-mono text-[9px] tracking-[0.2em] text-amber-text uppercase mb-3">
                      The Challenge
                    </h4>
                    <p className="text-text-secondary leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-[9px] tracking-[0.2em] text-amber-text uppercase mb-3">
                      The Approach
                    </h4>
                    <p className="text-text-secondary leading-relaxed">{study.approach}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] tracking-[0.1em] px-3 py-1 bg-bg-raised text-text-muted border border-white/[0.06] rounded-sm uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: results */}
                <div className="grid grid-cols-2 gap-4 content-start">
                  {study.results.map((r, i) => (
                    <div
                      key={i}
                      className="bg-bg-surface border border-white/[0.06] rounded-lg p-4 shadow-card"
                    >
                      <div className="font-display font-extrabold text-2xl text-amber-glow leading-none mb-1">
                        {r.metric}
                      </div>
                      <div className="font-mono text-[9px] tracking-[0.08em] text-text-secondary uppercase">
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function CaseStudies() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="work" ref={ref} aria-labelledby="case-studies-heading" className="py-28 md:py-36 relative">
      {/* Side light */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-1/3 w-[30vw] h-[40vw] opacity-[0.04] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #F5A623 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section header */}
        <motion.div
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="section-number">03 /</span>
              <div aria-hidden="true" className="h-px w-12 bg-amber-base/40" />
            </div>
            <h2 id="case-studies-heading" className="text-display-lg font-display font-extrabold text-text-primary leading-none">
              Case Studies
            </h2>
          </div>
          <p className="text-text-secondary max-w-xs font-body leading-relaxed text-sm">
            Real problems. Real constraints. Real results. Click any engagement to see the full breakdown.
          </p>
        </motion.div>

        {/* Case list */}
        <div aria-hidden="true" className="amber-rule mb-0" />
        {data.caseStudies.map((study, i) => (
          <CaseCard
            key={study.id}
            study={study}
            index={i}
            isOpen={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  )
}
