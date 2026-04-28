import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { data } from '../data'

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="testimonials" ref={ref} aria-labelledby="testimonials-heading" className="py-28 md:py-36 bg-bg-surface relative overflow-hidden">
      {/* Subtle teal glow */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 w-[40vw] h-[50vh] opacity-[0.04] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #2DD4BF 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number text-teal-glow">★</span>
          <div aria-hidden="true" className="h-px w-12 bg-teal-base/40" />
          <span aria-hidden="true" className="font-display font-bold text-[11px] uppercase tracking-[0.2em] text-text-secondary">
            What People Say
          </span>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {data.testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="group bg-bg-deep border border-white/[0.06] rounded-lg p-8 flex flex-col hover:border-teal-base/25 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Quote mark */}
              <div className="font-display text-5xl leading-none text-teal-base/20 select-none mb-4" aria-hidden="true">
                &ldquo;
              </div>

              {/* Quote text */}
              <blockquote className="flex-1">
                <p className="text-text-secondary text-sm leading-relaxed italic">
                  {t.quote}
                </p>
              </blockquote>

              {/* Attribution */}
              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <div className="font-display font-bold text-text-primary text-sm">
                  {t.name}
                </div>
                <div className="font-mono text-[10px] tracking-[0.06em] text-text-muted mt-1">
                  {t.title}
                </div>
                <div className="font-mono text-[10px] tracking-[0.06em] text-teal-base/60 mt-0.5">
                  {t.company}
                </div>
              </div>

              {/* Link to case study */}
              <a
                href="#work"
                className="mt-4 inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.1em] uppercase text-teal-base/50 hover:text-teal-glow transition-colors group/link"
                onClick={(e) => {
                  // Scroll to case studies and open the relevant one
                  // For now, just scrolls to work section
                }}
              >
                <span>See the case study</span>
                <span aria-hidden="true" className="group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
