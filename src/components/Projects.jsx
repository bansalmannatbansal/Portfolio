import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Daily Sahayak',
    description:
      'A comprehensive daily assistance platform that helps users manage tasks, schedules, and daily routines with intelligent recommendations and real-time notifications.',
    tech: ['Python', 'Flask', 'REST API', 'HTML/CSS', 'JavaScript'],
    github: '#',
    demo: '#',
  },
  {
    title: 'RishiLearn LMS',
    description:
      'Full-stack Learning Management System with course creation, progress tracking, quiz modules, and analytics dashboard for educational institutions.',
    tech: ['Python', 'Flask', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Netflix Analytics Dashboard',
    description:
      'Interactive data analytics dashboard visualizing Netflix content trends, user engagement patterns, and recommendation insights using advanced data visualization.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Power BI'],
    github: '#',
    demo: '#',
  },
  {
    title: 'RAG Chatbot',
    description:
      'Intelligent conversational AI chatbot powered by Retrieval-Augmented Generation, capable of answering domain-specific questions from custom knowledge bases.',
    tech: ['Python', 'LangChain', 'ChromaDB', 'Flask', 'OpenAI API'],
    github: '#',
    demo: '#',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function ProjectCard({ project }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-colors duration-300 hover:border-blue-500/50"
    >
      {/* Gradient accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500" />

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="mb-4 flex items-center gap-3">
          <Folder className="h-5 w-5 text-blue-400" />
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        </div>

        {/* Description */}
        <p className="mb-6 leading-relaxed text-gray-400">
          {project.description}
        </p>

        {/* Tech stack badges */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition-colors duration-200 hover:border-white/30 hover:text-white"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-600"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="mx-auto h-1 w-12 rounded-full bg-blue-500" />
        </motion.div>

        {/* Project grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-6 sm:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
