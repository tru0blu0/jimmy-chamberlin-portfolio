import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    // Fast counter: 0 → 100 in ~1.2s
    let raf: number
    const start = performance.now()
    const duration = 1200

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * 100))
      if (progress < 1) raf = requestAnimationFrame(tick)
      else {
        setCount(100)
        setTimeout(() => setDone(true), 200)
        setTimeout(() => onComplete(), 700)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] bg-bg-deep flex items-center justify-center"
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Grid bg */}
          <div className="absolute inset-0 grid-bg opacity-40" />

          {/* Spotlight */}
          <div className="absolute inset-0 spotlight-bg" />

          {/* Counter */}
          <div className="relative z-10 text-center select-none">
            <motion.div
              className="font-mono text-[clamp(5rem,20vw,14rem)] font-bold leading-none tabular-nums"
              style={{ color: '#D4860A' }}
            >
              {String(count).padStart(2, '0')}
            </motion.div>
            <motion.div
              className="font-mono text-[10px] tracking-[0.3em] text-text-secondary mt-4 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Initializing
            </motion.div>
          </div>

          {/* Thin amber horizontal line */}
          <div className="absolute bottom-0 left-0 h-px w-full">
            <motion.div
              className="h-full bg-amber-base"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: count / 100 }}
              style={{ transformOrigin: 'left', boxShadow: '0 0 8px rgba(212,134,10,0.8)' }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
