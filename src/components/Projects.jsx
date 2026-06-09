import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import RagThumb from '../assets/rag_project_thumb.png'
import RishiThumb from '../assets/rishilearn_project_thumb.png'
import NetflixThumb from '../assets/netflix_project_thumb.png'
import PrintlabThumb from '../assets/printlab_project_thumb.png'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const projects = [
  {
    num: '01',
    category: 'AI / MACHINE LEARNING',
    title: 'RAG Knowledge Engine',
    description: 'High-performance retrieval system architected with LangChain and vector databases to empower private-data intelligence.',
    tags: ['Python', 'ChromaDB'],
    image: RagThumb,
    github: 'https://github.com/bansalmannatbansal/rag-knowledge-assistant',
    demo: null,
  },
  {
    num: '02',
    category: 'LMS PLATFORM',
    title: 'RishiLearn',
    description: 'Full-stack learning management system with course catalog, leaderboard, XP system, and attendance tracking.',
    tags: ['Flask', 'Python', 'REST APIs', 'SQLite'],
    image: RishiThumb,
    github: 'https://github.com/bansalmannatbansal/rishilearn-lms',
    demo: '#',
  },
  {
    num: '03',
    category: 'DATA ENGINEERING',
    title: 'Netflix Insight Lab',
    description: 'Deciphering global content consumption patterns through intensive data modeling and Power BI visualization.',
    tags: ['Python', 'Pandas'],
    image: NetflixThumb,
    github: 'https://github.com/bansalmannatbansal/netflix-data-analysis',
    demo: null,
  },
  {
    num: '04',
    category: 'FRONTEND SPA',
    title: 'PrintLab OS',
    description: 'Campus print workflow architecture with cart ordering, queue indicators, and responsive SPA flows.',
    tags: ['JavaScript', 'CSS'],
    image: PrintlabThumb,
    github: 'https://github.com/bansalmannatbansal/print-lab',
    demo: '#',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="projects"
      ref={ref}
      className="relative bg-[#0B0B0D] section-padding overflow-hidden"
    >
      <div className="portfolio-container relative z-10 w-full">
        
        {/* Section Heading Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-20 w-full relative min-h-72">
          {/* Giant background PROJECTS watermark */}
          <div className="absolute -left-24 -top-10 hidden lg:block font-black text-outline text-[15rem] leading-none select-none pointer-events-none opacity-[0.25] z-0">
            PROJECTS
          </div>

          {/* Left Column: Heading */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="lg:col-span-6 text-left relative z-10"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-[#AFC2FF] block mb-8">
              SELECTED WORK
            </span>
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white tracking-normal leading-[0.95]">
              Portfolio <br />
              Projects
            </h2>
          </motion.div>

          {/* Right Column: Description paragraph */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="lg:col-span-5 lg:col-start-8 text-left relative z-10 lg:pb-8"
          >
            <p className="text-xl sm:text-2xl text-[#C8CAD3] leading-relaxed max-w-xl border-l border-white/[0.12] pl-7">
              Technical solutions blending AI engineering, full-stack development, and data-driven narratives.
            </p>
          </motion.div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-8 lg:grid-cols-12 items-start w-full"
        >
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className={`group relative flex flex-col justify-between rounded-lg border border-white/[0.06] bg-[#111114] hover:border-white/[0.12] transition-all duration-300 overflow-hidden ${
                idx === 0 ? 'lg:col-span-7' : idx === 1 ? 'lg:col-span-5 lg:mt-20' : 'lg:col-span-6'
              }`}
            >
              <div className="flex flex-col h-full justify-between">
                
                {/* 1. Card Top Metadata Row */}
                <div className="absolute left-6 top-6 z-20 flex items-center justify-between w-[calc(100%-3rem)]">
                  {/* Outline Number index */}
                  <span className="text-5xl font-black text-white/25 select-none tracking-normal leading-none">
                    {proj.num}
                  </span>

                  {/* Category Pill badge */}
                  <span className="rounded-full bg-[#AFC2FF] px-4 py-1 text-xs font-bold tracking-widest text-[#101013] uppercase">
                    {proj.category}
                  </span>
                </div>

                {/* 2. Visual Image Thumbnail */}
                <div className={`w-full overflow-hidden bg-zinc-950 relative select-none ${
                  idx === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'
                }`}>
                  <img
                    src={proj.image}
                    alt={`${proj.title} Thumbnail`}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>

                {/* 3. Description & Links Block */}
                <div className="space-y-5 p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-3xl font-black text-white tracking-normal group-hover:text-[#AFC2FF] transition-colors duration-300">
                      {proj.title}
                    </h3>

                    {/* Links */}
                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-white/[0.08] bg-white/[0.02] text-[#AFC2FF] hover:text-white hover:border-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AFC2FF]"
                        aria-label={`View GitHub repository for ${proj.title}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {proj.demo && (
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-white/[0.08] bg-white/[0.02] text-[#AFC2FF] hover:text-white hover:border-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AFC2FF]"
                          aria-label={`View live demo for ${proj.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-lg text-[#C8CAD3] leading-relaxed font-normal text-left max-w-2xl">
                    {proj.description}
                  </p>

                  {/* Tech Stack badging */}
                  <div className="flex flex-wrap gap-1.5 pt-1" aria-label="Project tech stack">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-white/[0.08] bg-white/[0.015] px-3 py-1 text-sm text-[#B8BBC6] font-semibold tracking-normal hover:border-white/20 hover:text-white transition-colors duration-300 select-none"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
