import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Metrics from './components/Metrics'
import CaseStudies from './components/CaseStudies'
import Approach from './components/Approach'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  // Cursor spotlight
  useEffect(() => {
    const move = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--my', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {!loaded && <Preloader key="preloader" onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <>
          <a href="#main" className="skip-link">Skip to content</a>

          {/* Scroll progress */}
          <motion.div className="progress-bar" style={{ scaleX }} aria-hidden="true" />

          {/* Cursor spotlight */}
          <div className="cursor-light" aria-hidden="true" />

          <Nav />

          <main id="main" tabIndex={-1}>
            <Hero />
            <Marquee />
            <Metrics />
            <CaseStudies />
            <Approach />
            <About />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </>
  )
}
