import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'RAG Knowledge Assistant',
    description: 'Retrieval-Augmented Generation application built for knowledge retrieval and context-aware responses.',
    focus: 'Knowledge Retrieval • Vector Search • Backend Engineering',
    tech: ['Python', 'ChromaDB', 'RAG', 'LLM Integration'],
    github: 'https://github.com/bansalmannatbansal/rag-knowledge-assistant',
    demo: null,
  },
  {
    title: 'RishiLearn LMS',
    description: 'Learning Management System built with Flask containing authentication, leaderboards, and timetable APIs.',
    focus: 'REST APIs • XP Progress System • Leaderboards',
    tech: ['Flask', 'Python', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/bansalmannatbansal/rishilearn-lms',
    demo: null,
  },
  {
    title: 'Netflix Data Analysis',
    description: 'Exploratory data analysis project inspecting 10,000+ Netflix titles to uncover regional outputs and growth trends.',
    focus: 'Data Cleaning • Data Wrangling • EDA & Visualization',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/bansalmannatbansal/netflix-data-analysis',
    demo: null,
  },
  {
    title: 'PrintLab',
    description: 'Campus printing Single Page Application with custom client routing, queue state indicators, and animated ordering.',
    focus: 'Custom SPA Routing • Queue Indicators • Skeleton Loading',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/bansalmannatbansal/print-lab',
    demo: null,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

function ProjectCard({ project }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col justify-between rounded-xl p-6 sm:p-8 glass-card hover:-translate-y-1 hover:shadow-lg hover:shadow-[#3B82F6]/5 transition-all duration-300"
    >
      <div className="space-y-4">
        {/* Title & Links */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#3B82F6] transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mt-1">
              {project.focus}
            </p>
          </div>
          
          {/* Link Icons */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-white/[0.06] bg-[#151515]/60 hover:text-white text-gray-400 hover:border-white/20 transition-all duration-200 hover:scale-105"
              aria-label={`View GitHub repository for ${project.title}`}
            >
              <Github className="w-4 h-4" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg border border-white/[0.06] bg-[#151515]/60 hover:text-white text-gray-400 hover:border-white/20 transition-all duration-200 hover:scale-105"
                aria-label={`View live demo for ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-1.5 pt-2" aria-label="Technology stack">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded border border-white/[0.06] bg-[#0A0A0A]/50 px-2 py-0.5 text-[10px] font-mono text-gray-400 font-medium tracking-wide hover:border-white/20 hover:text-white transition-colors duration-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="relative bg-[#0A0A0A] section-padding overflow-hidden">
      <div className="portfolio-container relative z-10">
        
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <Code2 className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Projects
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        {/* Project grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-6 sm:grid-cols-2 items-stretch"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
