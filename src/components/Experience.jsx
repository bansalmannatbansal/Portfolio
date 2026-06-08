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
      className="relative bg-[#0A0A0A] section-padding overflow-hidden"
    >
      <div className="portfolio-container relative z-10 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 w-full">
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="text-left"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#818CF8] block mb-2">
              CAREER PATH
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-none uppercase">
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
              className="inline-flex items-center gap-1 text-sm font-bold text-gray-400 hover:text-white border-b border-gray-600 hover:border-white pb-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#818CF8]"
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
          className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.06] w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Role & Meta details */}
            <div className="lg:col-span-4 flex flex-col items-start text-left space-y-1">
              <h3 className="text-xl font-extrabold text-white tracking-tight">
                AI Developer Intern
              </h3>
              <p className="text-sm font-bold text-[#818CF8] uppercase tracking-wider flex items-center gap-2">
                GROTO
                <span className="text-gray-600 font-mono tracking-normal lowercase">
                  ── jun ── aug 2024
                </span>
              </p>
            </div>

            {/* Right Column: Custom Bullet Points timeline track */}
            <div className="lg:col-span-8 relative pl-8 border-l border-white/[0.06] space-y-8 py-2">
              {bulletPoints.map((bullet, idx) => (
                <div key={idx} className="relative text-left">
                  
                  {/* Double-circle timeline point bullet */}
                  <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border border-[#818CF8] bg-[#0A0A0A] flex items-center justify-center shadow-[0_0_6px_rgba(129,138,248,0.2)]">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>

                  {/* Bullet description text */}
                  <p className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed">
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
