import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const bulletPoints = [
  'Engineered backend systems using Python and FastAPI for efficient data processing.',
  'Implemented Retrieval-Augmented Generation (RAG) pipelines utilizing ChromaDB for optimized vector search.',
  'Collaborated on AI-powered chat solutions to improve system response accuracy by 30%.',
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="experience"
      ref={ref}
      className="relative bg-[#0B0B0D] section-padding overflow-hidden"
    >
      <div className="portfolio-container relative z-10 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 w-full border-b border-white/[0.08] pb-10">
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="text-left"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-[#AFC2FF] block mb-4">
              CAREER PATH
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-normal leading-none uppercase">
              PROFESSIONAL EXPERIENCE
            </h2>
          </motion.div>

          {/* View Full Resume Link */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="shrink-0 text-left"
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-1 text-xl font-bold text-[#AFC2FF] hover:text-white pb-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AFC2FF]"
              aria-label="Download Full Resume"
            >
              View Full Resume
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Experience Details Block */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] } },
          }}
          className="glass-card rounded-lg p-8 sm:p-10 lg:p-14 border border-white/[0.07] w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Role & Meta details */}
            <div className="lg:col-span-4 flex flex-col items-start text-left space-y-1">
              <h3 className="text-2xl font-extrabold text-white tracking-normal">
                AI Developer Intern
              </h3>
              <p className="text-xl font-bold text-[#AFC2FF] uppercase tracking-widest flex flex-wrap items-center gap-4 mt-4">
                GROTO
                <span className="text-[#B8BBC6] font-normal tracking-normal uppercase">
                  Jun - Aug 2024
                </span>
              </p>
            </div>

            {/* Right Column: Custom Bullet Points timeline track */}
            <div className="lg:col-span-8 relative pl-10 border-l border-white/[0.08] space-y-9 py-2">
              {bulletPoints.map((bullet, idx) => (
                <div key={idx} className="relative text-left">
                  
                  {/* Double-circle timeline point bullet */}
                  <div className="absolute -left-[49px] top-2 h-5 w-5 rounded-full border-2 border-[#AFC2FF]/70 bg-[#151518] flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[#AFC2FF]" />
                  </div>

                  {/* Bullet description text */}
                  <p className="text-xl sm:text-2xl text-[#D2D3DA] font-normal leading-relaxed">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
