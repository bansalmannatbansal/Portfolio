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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#101013] pt-32 pb-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_20%,rgba(255,255,255,0.035),transparent_22%),linear-gradient(180deg,#121216_0%,#101013_55%,#0b0b0d_100%)] pointer-events-none" />

      <div className="absolute left-10 top-48 hidden lg:block font-black text-outline-thick text-[12rem] xl:text-[16rem] leading-none select-none pointer-events-none opacity-[0.35] z-0">
        MB
      </div>

      {/* ── Content Grid ── */}
      <div className="portfolio-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
          
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
              className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.035] text-[0.72rem] font-bold uppercase tracking-widest text-[#B8BBC6] select-none"
            >
              <span className="h-2 w-2 rounded-full bg-[#AFC2FF] shadow-[0_0_8px_#AFC2FF]" />
              AVAILABLE FOR NEW OPPORTUNITIES
            </motion.div>

            {/* Giant Heading */}
            <motion.h1
              variants={itemVariants}
              className="mb-8 text-7xl sm:text-8xl lg:text-[9rem] xl:text-[11rem] font-black tracking-normal text-[#F2F0F3] leading-[0.86]"
            >
              MANNAT <br />
              BANSAL
            </motion.h1>

            {/* Sub-headline */}
            <motion.h2
              variants={itemVariants}
              className="mb-5 text-3xl sm:text-4xl font-black italic tracking-normal text-[#AFC2FF]"
            >
              Software Engineer &amp; Data Analyst
            </motion.h2>

            {/* Supporting paragraph description */}
            <motion.p
              variants={itemVariants}
              className="mb-10 text-lg sm:text-xl text-[#C8CAD3] leading-relaxed max-w-2xl"
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
                className="group inline-flex items-center justify-center gap-2 rounded-full text-base font-bold bg-[#AFC2FF] hover:bg-[#C4D1FF] text-[#101013] h-14 px-9 transition-all duration-300 shadow-lg shadow-[#AFC2FF]/10 hover:shadow-[#AFC2FF]/20 active:scale-[0.98] select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AFC2FF]"
              >
                View Projects
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full text-base font-bold bg-transparent hover:bg-white/[0.03] text-gray-200 hover:text-white border border-white/[0.1] hover:border-white/[0.18] h-14 px-9 transition-all duration-300 active:scale-[0.98] select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AFC2FF]"
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
            <div className="relative w-full max-w-[520px] aspect-[4/5] z-10 flex items-center justify-center">
              
              {/* Vertical Rotated Watermark text */}
              <div className="absolute -left-14 bottom-[8%] hidden xl:block text-[#343846] font-black uppercase text-7xl select-none pointer-events-none opacity-[0.5] vertical-text">
                CREATIVE
              </div>

              {/* Shifted background box frame */}
              <div className="absolute -bottom-7 -right-7 w-full h-full border border-[#AFC2FF]/15 rounded-lg pointer-events-none z-0" />

              {/* Headshot image wrapper */}
              <div className="w-full h-full rounded-lg overflow-hidden bg-zinc-950 border border-white/[0.08] relative z-10 hover:border-white/[0.15] transition-all duration-300">
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
