import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

function CountUp({ to, from = 0, duration = 1.5 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [value, setValue] = useState(from)

  useEffect(() => {
    if (!isInView) return

    const targetValue = parseFloat(to) || 0
    const isInteger = Number.isInteger(targetValue)

    const controls = animate(from, targetValue, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setValue(isInteger ? Math.round(latest) : parseFloat(latest.toFixed(1)))
      },
    })

    return () => controls.stop()
  }, [isInView, from, to, duration])

  // Extract non-numeric parts (e.g. "+", "k+", etc.)
  const nonNumeric = to.replace(/[0-9.]/g, '')

  return (
    <span ref={ref}>
      {value}
      {nonNumeric}
    </span>
  )
}

const stats = [
  {
    metric: '4+',
    label: 'PROJECTS BUILT',
  },
  {
    metric: '1+',
    label: 'INTERNSHIP EXP.',
  },
  {
    metric: '10k+',
    label: 'RECORDS ANALYZED',
  },
  {
    metric: '15+',
    label: 'TECH STACK',
  },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="stats"
      ref={ref}
      className="relative bg-[#0A0A0A] py-12 overflow-hidden border-y border-white/[0.08]"
    >
      <div className="portfolio-container relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 w-full text-left"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="lg:border-r lg:border-white/[0.08] lg:last:border-none pl-4 lg:pl-10 pr-4 flex flex-col items-start justify-center gap-1.5"
            >
              {/* Metric number */}
              <span className="text-4xl sm:text-5xl font-black font-sans text-white tracking-tighter leading-none">
                <CountUp to={stat.metric} />
              </span>

              {/* Label */}
              <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
