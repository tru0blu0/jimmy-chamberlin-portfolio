import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { data } from '../data'
import { LiquidMetalMask } from './ui/liquid-metal'

const navItems = [
  { label: 'IMPACT', href: '#metrics' },
  { label: 'WORK', href: '#work' },
  { label: 'TESTIMONIALS', href: '#testimonials' },
  { label: 'APPROACH', href: '#approach' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Mobile menu: focus management + Escape to close
  useEffect(() => {
    if (!menuOpen) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    const firstLink = dialogRef.current?.querySelector<HTMLAnchorElement>('a')
    firstLink?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      previouslyFocused?.focus?.()
    }
  }, [menuOpen])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'bg-bg-deep/90 backdrop-blur-md border-b border-white/[0.06]' : ''
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo mark */}
        <a href="#" className="flex items-center gap-3 group" aria-label={`${data.name} — home`}>
          <div className="w-8 h-8 relative">
            {/* Background platform (SVG) */}
            <svg viewBox="0 0 32 32" fill="none" className="absolute inset-0 w-full h-full" aria-hidden="true" focusable="false">
              <defs>
                <radialGradient id="jc-ag" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F5A623" stopOpacity="0.15"/>
                  <stop offset="60%" stopColor="#D4860A" stopOpacity="0.04"/>
                  <stop offset="100%" stopColor="#D4860A" stopOpacity="0"/>
                </radialGradient>
                <linearGradient id="jc-bg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1E2A3A"/>
                  <stop offset="100%" stopColor="#0B101A"/>
                </linearGradient>
                <filter id="jc-sh" x="-40%" y="-40%" width="180%" height="180%">
                  <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" floodColor="#000" floodOpacity="0.55"/>
                </filter>
              </defs>
              <circle cx="16" cy="16" r="13.5" fill="url(#jc-ag)"/>
              <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#jc-bg)" filter="url(#jc-sh)"/>
              <rect x="2.5" y="2.5" width="27" height="27" rx="7.5" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
            </svg>

            {/* Liquid metal JC marks — CSS mask clips the WebGL shader to the JC stroke shapes */}
            <LiquidMetalMask
              colorBack="#C87808"
              colorTint="#FFD580"
              speed={0.4}
              repetition={3}
              distortion={0.15}
              scale={1}
            />
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-label hover:text-text-primary transition-colors relative group"
            >
              {item.label}
              <span aria-hidden="true" className="absolute -bottom-1 left-0 h-px w-0 bg-amber-base group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Status dot + CTA */}
        <div className="hidden md:flex items-center gap-5">
          {data.available && (
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="font-mono text-[9px] tracking-[0.15em] text-success">{data.availableText}</span>
            </div>
          )}
          <a
            href="/portfolio/Jimmy_Chamberlin_Master_Resume.docx"
            download
            className="font-mono text-[10px] tracking-[0.12em] uppercase px-4 py-2 border border-white/[0.12] text-text-secondary hover:text-text-primary hover:border-white/30 transition-all duration-200 rounded-sm"
          >
            RESUME ↓
          </a>
          <a
            href="https://trubluesolution.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.12em] uppercase px-4 py-2 border border-amber-base/40 text-amber-text hover:bg-amber-base/10 hover:border-amber-base transition-all duration-200 rounded-sm"
          >
            WORK WITH ME
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          ref={toggleRef}
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <motion.span aria-hidden="true" className="block w-6 h-px bg-text-primary" animate={menuOpen ? { rotate: 45, y: 4 } : {}} />
          <motion.span aria-hidden="true" className="block w-6 h-px bg-text-primary" animate={menuOpen ? { opacity: 0 } : {}} />
          <motion.span aria-hidden="true" className="block w-6 h-px bg-text-primary" animate={menuOpen ? { rotate: -45, y: -4 } : {}} />
        </button>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={dialogRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-0 z-40 bg-bg-deep/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-4xl font-bold text-text-primary hover:text-amber-glow transition-colors"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
