import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import HeadshotImage from '../assets/mannat_headshot.png'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault()
    const projectsSec = document.querySelector('#projects')
    if (projectsSec) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = projectsSec.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A0A0A] pt-28 pb-20"
    >
      {/* ── Background Grid ── */}
      <div className="absolute inset-0 grid-pattern opacity-[0.25] pointer-events-none" />

      {/* ── Giant Outline Monogram Watermark (MB) ── */}
      <div className="absolute left-[5vw] top-[25%] font-black text-outline-thick text-[25vw] leading-none select-none pointer-events-none opacity-[0.4] z-0">
        MB
      </div>

      {/* Floating Blur Blobs */}
      <div className="absolute top-[20%] left-[10%] w-[380px] h-[380px] rounded-full bg-[#6366F1]/6 blur-[140px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-[15%] right-[15%] w-[400px] h-[400px] rounded-full bg-[#A78BFA]/5 blur-[150px] animate-float-medium pointer-events-none" />

      {/* ── Content Grid ── */}
      <div className="portfolio-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Biography details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left w-full relative z-10"
          >
            {/* Opportunities Badge */}
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md text-[9px] font-bold uppercase tracking-widest text-gray-300 select-none"
            >
              <span className="h-2 w-2 rounded-full bg-[#818CF8] shadow-[0_0_8px_#818CF8]" />
              AVAILABLE FOR NEW OPPORTUNITIES
            </motion.div>

            {/* Giant Heading */}
            <motion.h1
              variants={itemVariants}
              className="mb-4 text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-[#F9FAFB] leading-[0.95]"
            >
              MANNAT <br />
              BANSAL
            </motion.h1>

            {/* Sub-headline */}
            <motion.h2
              variants={itemVariants}
              className="mb-5 text-lg sm:text-xl font-bold tracking-tight text-[#818CF8]"
            >
              Software Engineer &amp; Data Analyst
            </motion.h2>

            {/* Supporting paragraph description */}
            <motion.p
              variants={itemVariants}
              className="mb-8 text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl"
            >
              Building data-driven applications, backend systems, and AI-powered solutions with a focus on technical clarity and architectural integrity.
            </motion.p>

            {/* Button Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 w-full"
            >
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="group inline-flex items-center justify-center gap-2 rounded-full text-xs font-bold uppercase tracking-widest bg-[#818CF8] hover:bg-[#A5B4FC] text-[#0A0A0A] h-12 px-7 transition-all duration-300 shadow-lg shadow-[#818CF8]/10 hover:shadow-[#818CF8]/20 active:scale-[0.98] select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#818CF8]"
              >
                View Projects
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full text-xs font-bold uppercase tracking-widest bg-transparent hover:bg-white/[0.03] text-gray-200 hover:text-white border border-white/[0.08] hover:border-white/[0.15] h-12 px-7 transition-all duration-300 active:scale-[0.98] select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#818CF8]"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Headshot portrait + vertical CREATIVE DEV text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end items-center relative w-full pt-10 lg:pt-0"
          >
            <div className="relative w-full max-w-[320px] aspect-[4/5] z-10 flex items-center justify-center">
              
              {/* Vertical Rotated Watermark text */}
              <div className="absolute -left-16 bottom-[10%] text-gray-800 tracking-[0.25em] font-black uppercase text-[5vw] lg:text-[3.5rem] select-none pointer-events-none opacity-[0.22] vertical-text">
                CREATIVE DEV
              </div>

              {/* Shifted background box frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-white/[0.05] rounded-[32px] pointer-events-none z-0" />

              {/* Headshot image wrapper */}
              <div className="w-full h-full rounded-[32px] overflow-hidden bg-zinc-950 border border-white/[0.08] relative z-10 hover:border-white/[0.15] transition-all duration-300">
                <img
                  src={HeadshotImage}
                  alt="Mannat Bansal Headshot Portrait"
                  className="w-full h-full object-cover select-none filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
