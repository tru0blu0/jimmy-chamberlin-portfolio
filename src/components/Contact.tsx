import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { data } from '../data'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(data.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" ref={ref} aria-labelledby="contact-heading" className="py-28 md:py-40 bg-bg-surface relative overflow-hidden">
      {/* Grid bg */}
      <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-60" />

      {/* Center amber beam */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] opacity-[0.08] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60%, rgba(212,134,10,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section header */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="section-number">06 /</span>
          <div aria-hidden="true" className="h-px w-12 bg-amber-base/40" />
          <span className="font-display font-bold text-[11px] uppercase tracking-[0.2em] text-text-secondary">
            Let&rsquo;s Work Together
          </span>
          <div aria-hidden="true" className="h-px w-12 bg-amber-base/40" />
        </motion.div>

        <motion.h2
          id="contact-heading"
          className="text-display-lg font-display font-extrabold text-text-primary leading-none mb-6 text-balance text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          Ready to build something
          <br />
          <span className="text-amber-glow">that actually works?</span>
        </motion.h2>

        <motion.p
          className="text-text-secondary max-w-xl mx-auto leading-relaxed mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          If you&rsquo;re scaling an operation, inheriting a broken process, or building something
          from nothing — I&rsquo;d like to hear about it.
        </motion.p>

        {/* Primary CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <a
            href={`mailto:${data.email}`}
            className="amber-cta group inline-flex items-center gap-3 bg-amber-base hover:bg-amber-glow text-black font-display font-bold text-sm tracking-wide px-8 py-4 rounded-sm transition-all duration-200"
          >
            SEND AN EMAIL
            <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <button
            onClick={copyEmail}
            aria-label={copied ? 'Email copied to clipboard' : `Copy email address ${data.email}`}
            className="inline-flex items-center gap-3 border border-white/[0.1] hover:border-amber-base/40 text-text-secondary hover:text-text-primary text-sm font-mono tracking-wide px-6 py-4 rounded-sm transition-all duration-200"
          >
            <span aria-live="polite" aria-atomic="true" className="inline-flex items-center gap-2">
              {copied ? (
                <><span aria-hidden="true" className="text-green-400">✓</span> COPIED</>
              ) : (
                <>{data.email}</>
              )}
            </span>
          </button>
        </motion.div>

        {/* LinkedIn + availability note */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-muted hover:text-text-secondary transition-colors inline-flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className="w-3.5 h-3.5">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect on LinkedIn
          </a>

          <p className="font-mono text-[10px] tracking-[0.1em] text-amber-base/70">
            {data.location} — Typically responds within 1 business day
          </p>
          <a
            href="https://trubluesolution.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 font-mono text-[10px] tracking-[0.12em] uppercase text-amber-text/70 hover:text-amber-glow transition-colors inline-flex items-center gap-1"
          >
            My consulting practice: Trublue Solution →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
