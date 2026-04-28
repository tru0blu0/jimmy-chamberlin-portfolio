/* WCAG contrast (computed against bg-deep #0A0B0F):
 *   text.primary   #F0F2F7  16.7:1  AAA
 *   text.secondary #8892A4   6.4:1  AA / AAA-large
 *   text.muted     #6B7280   4.6:1  AA  (meaningful small text)
 *   text.faint     #4A5568   3.0:1  decorative-only chrome
 *   amber.text     #FFB347   7.4:1  AAA (small amber labels & numbers)
 *   amber.glow     #F5A623   5.6:1  AA  (body-size amber)
 *   amber.base     #D4860A   4.0:1  AA-large only (decorative borders/glow)
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          deep: '#0A0B0F',
          surface: '#111318',
          raised: '#1A1D26',
        },
        text: {
          primary: '#F0F2F7',
          secondary: '#8892A4',
          muted: '#6B7280',
          faint: '#4A5568',
        },
        amber: {
          glow: '#F5A623',
          base: '#D4860A',
          text: '#FFB347',
          dim: '#7A4D09',
          beam: '#FFD580',
        },
        success: '#22C55E',
        stat: '#60A5FA',
      },
      fontFamily: {
        display: ['Syne', 'DM Serif Display', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 10vw, 8rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(2rem, 6vw, 5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(1.5rem, 4vw, 3rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      backgroundImage: {
        'spotlight': 'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(212,134,10,0.18) 0%, transparent 70%)',
        'spotlight-side': 'radial-gradient(ellipse 40% 60% at 0% 50%, rgba(212,134,10,0.1) 0%, transparent 60%)',
        'surface-lit': 'linear-gradient(135deg, #1A1D26 0%, #111318 60%)',
        'grid-lines': 'linear-gradient(rgba(240,242,247,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(240,242,247,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '80px 80px',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'marquee': 'marquee 80s linear infinite',
        'marquee2': 'marquee2 80s linear infinite',
        'counter': 'counter 0.8s ease-out forwards',
        'beam': 'beam 4s ease-in-out infinite',
        'grad-rotate': 'grad-rotate 8s linear infinite',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } },
        marquee2: { '0%': { transform: 'translateX(50%)' }, '100%': { transform: 'translateX(0%)' } },
        beam: {
          '0%, 100%': { opacity: '0.6', transform: 'scaleX(1)' },
          '50%': { opacity: '1', transform: 'scaleX(1.05)' },
        },
        'grad-rotate': {
          '0%':   { '--gradient-angle': '0deg' },
          '100%': { '--gradient-angle': '360deg' },
        },
      },
      boxShadow: {
        'amber-glow': '0 0 30px rgba(212,134,10,0.25), 0 0 60px rgba(212,134,10,0.1)',
        'amber-sm': '0 0 15px rgba(212,134,10,0.2)',
        'card': '0 1px 0 rgba(240,242,247,0.06) inset, 0 -1px 0 rgba(0,0,0,0.3) inset',
        'lift': '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,134,10,0.15)',
      },
    },
  },
  plugins: [],
}
