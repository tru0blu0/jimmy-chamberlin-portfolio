import { useEffect } from 'react'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 800)
    return () => clearTimeout(t)
    // onComplete is intentionally excluded from deps — it's a stable callback
    // and including it risks re-triggering the timer on every render
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
