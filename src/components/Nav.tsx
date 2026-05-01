import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { data } from '../data'

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
            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full" aria-hidden="true" focusable="false">
              <rect width="32" height="32" rx="6" fill="#151E2E" stroke="#1B7A8A" strokeWidth="0.75" strokeOpacity="0.3"/>
              {/* J: stem + hook — amber */}
              <path d="M13 7 L13 20.5 Q13 26 9 26 Q5.5 26 5.5 22" stroke="#D4860A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
              {/* C: open ring — teal */}
              <path d="M27 10 A8 8 0 1 0 27 22" stroke="#1B7A8A" strokeWidth="3.5" strokeLinecap="round"/>
            </svg>
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
