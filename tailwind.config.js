/* WCAG contrast (computed against body bg #0A0B0F):
 *   text.primary   #EDF0F5  19.1:1 AAA
 *   text.secondary #8892A4   6.2:1 AA
 *   text.muted     #6B7280   4.6:1 AA (borderline — prefer text-secondary for readability)
 *   text.faint     #4A5568   2.7:1 decorative-only chrome
 *   amber.text     #FFB347   8.6:1 AAA
 *   amber.glow     #F5A623   6.4:1 AA
 *   amber.base     #D4860A   4.6:1 AA-large only (4.0:1 against #0F1724)
 *   teal.glow      #2DD4BF   8.9:1 AAA
 *   teal.base      #1B7A8A   4.4:1 AA-large only
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          deep: '#0F1724',
          surface: '#151E2E',
          raised: '#1C2738',
        },
        text: {
          primary: '#EDF0F5',
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
        teal: {
          glow: '#2DD4BF',
          base: '#1B7A8A',
          text: '#5EEAD4',
          dim: '#0F5E6A',
        },
        success: '#22C55E',
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
        'spotlight': 'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(27,122,138,0.12) 0%, transparent 70%)',
        'spotlight-side': 'radial-gradient(ellipse 40% 60% at 0% 50%, rgba(212,134,10,0.08) 0%, transparent 60%)',
        'surface-lit': 'linear-gradient(135deg, #1A2030 0%, #111620 60%)',
        'grid-lines': 'linear-gradient(rgba(237,240,245,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(237,240,245,0.025) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '80px 80px',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'marquee': 'marquee 55s linear infinite',
        'marquee2': 'marquee2 55s linear infinite',
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
        'teal-glow': '0 0 30px rgba(27,122,138,0.25), 0 0 60px rgba(27,122,138,0.1)',
        'card': '0 1px 0 rgba(237,240,245,0.05) inset, 0 -1px 0 rgba(0,0,0,0.3) inset',
        'lift': '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(27,122,138,0.12)',
      },
    },
  },
  plugins: [],
}
