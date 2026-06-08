import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, TrendingUp } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-[#0A0A0A] section-padding overflow-hidden"
    >
      <div className="portfolio-container relative z-10 w-full">
        
        {/* ── Main Bio & Vision Row ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full mb-12">
          
          {/* Left Column: Heading Layout */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="lg:col-span-4 flex flex-col items-start text-left relative"
          >
            {/* Giant Number Watermark */}
            <div className="absolute -left-6 -top-12 text-[10rem] sm:text-[12rem] font-black text-outline select-none pointer-events-none opacity-[0.35] leading-none z-0">
              01
            </div>

            {/* Main Headings */}
            <div className="relative z-10 mt-6 pl-2">
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter leading-none uppercase">
                ABOUT
              </h2>
              <h3 className="text-4xl sm:text-5xl font-black text-[#818CF8] tracking-tighter leading-none uppercase mt-1">
                VISION
              </h3>
              {/* Short line decoration */}
              <div className="h-[3px] w-14 bg-[#818CF8] mt-4" />
            </div>
          </motion.div>

          {/* Right Column: Glassmorphism Card */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="lg:col-span-8 glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.06] flex flex-col justify-between"
          >
            {/* Blockquote italicized statement */}
            <blockquote className="border-l-[3px] border-l-[#818CF8] pl-5 mb-6 text-base sm:text-lg text-white font-medium italic leading-relaxed">
              "My journey is driven by a passion for solving complex problems through code and data insights."
            </blockquote>

            {/* Biography paragraphs */}
            <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              <p>
                I am a B.Tech CS student specializing in Data Science. During my tenure as an AI Developer Intern at Groto, I focused on building scalable backend architectures and integrating advanced AI models to enhance user experiences.
              </p>
              <p>
                My focus lies in creating practical tech solutions that bridge the gap between sophisticated data analysis and seamless software performance. I believe in writing clean, maintainable code that delivers real-world value.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Sub-Cards Row (Education & Current Path) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          
          {/* Card 1: Education */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] } },
            }}
            whileHover={{ y: -4 }}
            className="glass-card rounded-3xl p-6 sm:p-7 border border-white/[0.06] hover:shadow-[0_8px_30px_rgba(99,102,241,0.04)] transition-all duration-300 flex flex-col items-start text-left"
          >
            <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">
              Education
            </h3>
            
            <div className="flex gap-4 w-full">
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-[#818CF8] shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  B.Tech in CS (Data Science)
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                  Relevant Coursework: DBMS, AI, Machine Learning, Data Structures
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Current Path */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] } },
            }}
            whileHover={{ y: -4 }}
            className="glass-card rounded-3xl p-6 sm:p-7 border border-white/[0.06] hover:shadow-[0_8px_30px_rgba(99,102,241,0.04)] transition-all duration-300 flex flex-col items-start text-left"
          >
            <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">
              Current Path
            </h3>

            <div className="flex gap-4 w-full">
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-[#818CF8] shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  Active Learning
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                  Constantly exploring RAG, LLMs, and modern Cloud architectures.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
