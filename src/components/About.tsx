import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { data } from '../data'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="about" ref={ref} aria-labelledby="about-heading" className="py-28 md:py-36 relative">
      <div
        aria-hidden="true"
        className="absolute right-0 bottom-0 w-[40vw] h-[40vw] opacity-[0.05] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #F5A623 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="section-number">05 /</span>
          <div aria-hidden="true" className="h-px w-12 bg-amber-base/40" />
          <span aria-hidden="true" className="font-display font-bold text-[11px] uppercase tracking-[0.2em] text-text-secondary">
            About
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 id="about-heading" className="text-display-md font-display font-extrabold text-text-primary mb-8 leading-none">
              Operations is{' '}
              <span className="text-amber-glow">architecture,</span>{' '}
              not administration.
            </h2>

            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p>
                Over 16 years, I've operated in some of the most demanding environments a business can create —
                high-volume logistics, multi-unit restaurants, time-critical legal operations, and enterprise IT.
                In each, I found the same root problem: systems built for the person who designed them, not
                for the people who run them.
              </p>
              <p>
                I hold a BBA and bring a business-first analytical lens to operational challenges.
                That means I don't just optimize what exists — I ask whether what exists is the right structure
                in the first place.
              </p>
              <p>
                The result is operations that survive leadership transitions, scale without breaking,
                and generate measurable ROI — not just activity.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-[0.12em] uppercase text-text-secondary hover:text-amber-glow transition-colors flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className="w-4 h-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <span aria-hidden="true" className="text-text-muted">·</span>
              <a
                href={`mailto:${data.email}`}
                className="font-mono text-[10px] tracking-[0.12em] uppercase text-text-secondary hover:text-amber-glow transition-colors"
              >
                {data.email}
              </a>
            </div>
          </motion.div>

          {/* Right: skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-text-muted mb-8">
              Core Competencies
            </h3>

            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 border border-white/[0.08] text-text-secondary text-[12px] font-body hover:border-amber-base/30 hover:text-text-primary hover:bg-amber-base/[0.04] transition-all cursor-default rounded-sm"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.03, duration: 0.4 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Education callout */}
            <div className="mt-10 p-6 border border-amber-base/20 rounded-lg bg-amber-base/[0.03]">
              <div className="flex items-start gap-4">
                <div aria-hidden="true" className="w-10 h-10 border border-amber-base/30 rounded-sm flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#D4860A" strokeWidth="1.5" focusable="false" className="w-5 h-5">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <div className="font-display font-bold text-text-primary">BBA — Business Administration</div>
                  <div className="font-mono text-[10px] tracking-[0.1em] text-text-muted uppercase mt-1">
                    Bachelor of Business Administration
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
