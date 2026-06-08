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
    title: 'RAG Knowledge Assistant',
    description: 'Semantic search and knowledge retrieval system using vector embeddings and RAG architecture.',
    tags: ['Python', 'ChromaDB', 'RAG', 'LLM'],
    image: RagThumb,
    github: 'https://github.com/bansalmannatbansal/rag-knowledge-assistant',
    demo: null,
  },
  {
    num: '02',
    category: 'LMS PLATFORM',
    title: 'RishiLearn LMS',
    description: 'Full-stack learning management system with course catalog, leaderboard, XP system, and attendance tracking.',
    tags: ['Flask', 'Python', 'REST APIs', 'SQLite'],
    image: RishiThumb,
    github: 'https://github.com/bansalmannatbansal/rishilearn-lms',
    demo: '#',
  },
  {
    num: '03',
    category: 'DATA ENGINEERING',
    title: 'Netflix Data Analysis',
    description: 'Exploratory data analysis on 10,000+ Netflix titles — cleaning, regional trends, and visualization.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    image: NetflixThumb,
    github: 'https://github.com/bansalmannatbansal/netflix-data-analysis',
    demo: null,
  },
  {
    num: '04',
    category: 'FRONTEND SPA',
    title: 'PrintLab',
    description: 'Campus printing SPA with custom routing, skeleton loading, cart ordering, and queue indicators.',
    tags: ['HTML', 'CSS', 'JavaScript'],
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
      className="relative bg-[#0A0A0A] section-padding overflow-hidden"
    >
      <div className="portfolio-container relative z-10 w-full">
        
        {/* Section Heading Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 w-full relative">
          {/* Giant background PROJECTS watermark */}
          <div className="absolute left-0 -top-8 font-black text-outline text-[12vw] leading-none select-none pointer-events-none opacity-[0.25] z-0">
            PROJECTS
          </div>

          {/* Left Column: Heading */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="lg:col-span-6 text-left relative z-10 pl-2"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#818CF8] block mb-2">
              SELECTED WORK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-none uppercase">
              Portfolio <br />
              Projects
            </h2>
          </motion.div>

          {/* Right Column: Description paragraph */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="lg:col-span-6 text-left relative z-10 lg:pb-1"
          >
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-md border-l border-white/[0.08] pl-5">
              Technical solutions blending AI engineering, full-stack development, and data-driven narratives.
            </p>
          </motion.div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-8 sm:grid-cols-2 items-stretch w-full"
        >
          {projects.map((proj) => (
            <motion.div
              key={proj.title}
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: '0 12px 35px rgba(129,138,248,0.05)' }}
              className="group relative flex flex-col justify-between rounded-3xl p-6 border border-white/[0.06] bg-white/[0.01] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
            >
              <div className="space-y-5 flex flex-col h-full justify-between">
                
                {/* 1. Card Top Metadata Row */}
                <div className="flex items-center justify-between w-full">
                  {/* Outline Number index */}
                  <span className="text-xl font-black text-outline font-mono select-none tracking-tighter leading-none">
                    {proj.num}
                  </span>

                  {/* Category Pill badge */}
                  <span className="rounded-full bg-white/[0.02] border border-white/[0.08] px-3.5 py-1 text-[8px] font-extrabold tracking-widest text-[#818CF8] uppercase">
                    {proj.category}
                  </span>
                </div>

                {/* 2. Visual Image Thumbnail */}
                <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-950 border border-white/[0.04] relative select-none">
                  <img
                    src={proj.image}
                    alt={`${proj.title} Thumbnail`}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>

                {/* 3. Description & Links Block */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#818CF8] transition-colors duration-300">
                      {proj.title}
                    </h3>

                    {/* Links */}
                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-white/[0.06] bg-white/[0.02] text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#818CF8]"
                        aria-label={`View GitHub repository for ${proj.title}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {proj.demo && (
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-white/[0.06] bg-white/[0.02] text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#818CF8]"
                          aria-label={`View live demo for ${proj.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal text-left">
                    {proj.description}
                  </p>

                  {/* Tech Stack badging */}
                  <div className="flex flex-wrap gap-1.5 pt-1" aria-label="Project tech stack">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-white/[0.05] bg-white/[0.01] px-2.5 py-0.5 text-[9px] font-mono text-gray-400 font-semibold tracking-wide hover:border-white/20 hover:text-white transition-colors duration-300 select-none"
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
