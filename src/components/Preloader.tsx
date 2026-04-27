import { useEffect, useState } from 'react'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Animate 0 → 99 over ~1.4s, then call onComplete
    const totalMs = 1400
    const steps = 99
    const intervalMs = totalMs / steps

    let current = 0
    const interval = setInterval(() => {
      current += 1
      setCount(current)
      if (current >= 99) {
        clearInterval(interval)
        setTimeout(onComplete, 150)
      }
    }, intervalMs)

    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      role="status"
      aria-label="Loading"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#0A0A0B',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      {/* Amber logo mark */}
      <svg width="48" height="48" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="28" height="28" rx="2" stroke="#D4860A" strokeWidth="1.5" />
        <path d="M8 16L13 11L18 16L24 10" stroke="#D4860A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="10" r="2" fill="#D4860A" />
      </svg>

      {/* Counter */}
      <span
        style={{
          fontFamily: 'monospace',
          fontSize: '48px',
          fontWeight: '700',
          color: '#D4860A',
          lineHeight: 1,
          minWidth: '3ch',
          textAlign: 'right',
        }}
      >
        {String(count).padStart(2, '0')}
      </span>

      <span
        style={{
          fontFamily: 'monospace',
          fontSize: '10px',
          letterSpacing: '0.3em',
          color: '#6B7280',
          textTransform: 'uppercase',
        }}
      >
        Initializing
      </span>
    </div>
  )
}
