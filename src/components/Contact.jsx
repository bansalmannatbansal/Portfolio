import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const emailAddress = 'mannatbansal0307@gmail.com'

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-[#0A0A0A] section-padding overflow-hidden"
    >
      {/* Giant Background Chat Bubble Watermark */}
      <div className="absolute right-[5%] bottom-[10%] text-white opacity-[0.03] select-none pointer-events-none z-0">
        <MessageSquare size={320} strokeWidth={0.5} />
      </div>

      <div className="portfolio-container relative z-10 w-full">
        
        {/* Section Heading Row */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="mb-14 text-center md:text-left pl-2"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <MessageSquare className="w-4 h-4 text-[#818CF8]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#818CF8]">
              Get in Touch
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none uppercase">
            LET'S BUILD SOMETHING <br />
            <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent italic font-serif mt-1.5 block lowercase tracking-tight">
              meaningful
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed mt-6">
            Whether it's a data analysis pipeline, a complex backend system, or an AI experiment— <br className="hidden sm:inline" />
            I'm always open to discussing new projects and creative ideas.
          </p>
        </motion.div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full relative z-10">
          
          {/* Left Column: Direct Links */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="flex flex-col gap-4 justify-center"
          >
            {/* Email Contact */}
            <a
              href={`mailto:${emailAddress}`}
              className="group flex items-center gap-4 rounded-2xl p-4 sm:p-5 border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#818CF8]"
              aria-label="Send email to Mannat Bansal"
            >
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] group-hover:bg-[#818CF8]/10 group-hover:border-[#818CF8]/20 transition-all duration-300">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-[#818CF8] transition-colors" />
              </div>
              <div>
                <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Email</h3>
                <p className="text-xs sm:text-sm text-gray-300 font-semibold mt-0.5">{emailAddress}</p>
              </div>
            </a>

            {/* LinkedIn Contact */}
            <a
              href="https://www.linkedin.com/in/mannat-bansal/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl p-4 sm:p-5 border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#818CF8]"
              aria-label="View LinkedIn profile"
            >
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] group-hover:bg-[#818CF8]/10 group-hover:border-[#818CF8]/20 transition-all duration-300">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-[#818CF8] transition-colors" />
              </div>
              <div>
                <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">LinkedIn</h3>
                <p className="text-xs sm:text-sm text-gray-300 font-semibold mt-0.5">linkedin.com/in/mannat-bansal</p>
              </div>
            </a>

            {/* GitHub Contact */}
            <a
              href="https://github.com/bansalmannatbansal"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl p-4 sm:p-5 border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#818CF8]"
              aria-label="View GitHub profile"
            >
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] group-hover:bg-[#818CF8]/10 group-hover:border-[#818CF8]/20 transition-all duration-300">
                <Github className="w-5 h-5 text-gray-400 group-hover:text-[#818CF8] transition-colors" />
              </div>
              <div>
                <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">GitHub</h3>
                <p className="text-xs sm:text-sm text-gray-300 font-semibold mt-0.5">github.com/bansalmannatbansal</p>
              </div>
            </a>
          </motion.div>

          {/* Right Column: Message Card */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] } },
            }}
            whileHover={{ y: -4 }}
            className="group glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center text-center relative overflow-hidden transition-all duration-300 hover:shadow-[0_12px_30px_rgba(99,102,241,0.05)] border border-white/[0.06]"
          >
            <div className="absolute inset-0 grid-pattern opacity-[0.15] pointer-events-none" />

            <div className="my-auto space-y-4 relative z-10 max-w-xs">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Have a project or opportunity?
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                Reach out directly by email. I usually respond within 24 hours.
              </p>
            </div>

            <a
              href={`mailto:${emailAddress}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full text-xs font-bold uppercase tracking-widest bg-[#818CF8] hover:bg-[#A5B4FC] text-[#0A0A0A] h-12 px-7 transition-all duration-300 hover:shadow-lg hover:shadow-[#818CF8]/20 active:scale-[0.98] select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#818CF8] relative z-10"
              aria-label="Open email composer"
            >
              Send a Message
              <Mail className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
