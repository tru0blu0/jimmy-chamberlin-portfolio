import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { data } from '../data'

export default function Approach() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="approach" ref={ref} className="py-28 md:py-36 bg-bg-surface relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div
        className="absolute right-0 top-0 w-[50vw] h-[60vh] opacity-[0.05] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #F5A623 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="section-number">04 /</span>
            <div className="h-px w-12 bg-amber-base/40" />
          </div>
          <h2 className="text-display-lg font-display font-extrabold text-text-primary leading-none">
            How I Work
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.approach.map((item, i) => (
            <motion.div
              key={item.step}
              className="group relative card-base p-8 hover:shadow-lift transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Step number — large ghost */}
              <div className="font-display font-extrabold text-[5rem] leading-none text-white/[0.04] select-none absolute top-4 right-6 group-hover:text-amber-base/[0.08] transition-colors">
                {item.step}
              </div>

              {/* Amber top accent */}
              <div className="w-8 h-0.5 bg-amber-base mb-8 group-hover:w-full transition-all duration-500" />

              <h3 className="font-display font-bold text-xl text-text-primary mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Hover bottom border glow */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-base/0 to-transparent group-hover:via-amber-base/40 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
