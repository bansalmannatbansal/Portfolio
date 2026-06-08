import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experience = {
  role: 'AI Developer Intern',
  company: 'Groto',
  duration: '2025 — Present',
  description:
    'Developed intelligent AI applications leveraging RAG (Retrieval-Augmented Generation) systems, prompt engineering, and LLM integration to build production-grade conversational AI solutions.',
  achievements: [
    'Built end-to-end RAG pipeline using LangChain and ChromaDB for document retrieval',
    'Engineered optimized prompts for domain-specific AI assistants',
    'Integrated LLM APIs to power intelligent chatbot applications',
    'Collaborated with cross-functional teams to deploy AI solutions',
  ],
  tech: ['RAG', 'LangChain', 'ChromaDB', 'Python', 'Prompt Engineering'],
};

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-28 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* ── Section heading ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block h-2 w-2 rounded-full bg-[#3B82F6]" />
          <span className="text-sm font-medium tracking-widest uppercase text-[#3B82F6]">
            Experience
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Where I've Worked
        </h2>
      </motion.div>

      {/* ── Timeline ── */}
      <div className="relative ml-4 md:ml-8">
        {/* Vertical timeline line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="absolute left-0 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-[#3B82F6]/60 via-[#3B82F6]/20 to-transparent"
        />

        {/* Timeline entry */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.35 }}
          className="relative pl-10 md:pl-14"
        >
          {/* Pulsing timeline dot */}
          <span className="absolute left-0 top-1 -translate-x-1/2 flex items-center justify-center">
            <span className="absolute h-5 w-5 rounded-full bg-[#3B82F6]/20 animate-ping" />
            <span className="relative h-3 w-3 rounded-full bg-[#3B82F6] ring-4 ring-[#3B82F6]/20" />
          </span>

          {/* Glassmorphism card */}
          <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.07]">
            {/* Top row — role + duration */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3B82F6]/10 text-[#3B82F6]">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <p className="text-sm text-white/50">{experience.company}</p>
                </div>
              </div>
              <span className="text-xs font-medium tracking-wide text-white/40 sm:text-sm">
                {experience.duration}
              </span>
            </div>

            {/* Description */}
            <p className="mb-5 text-sm leading-relaxed text-white/60 md:text-base">
              {experience.description}
            </p>

            {/* Achievements */}
            <ul className="mb-6 space-y-2.5">
              {experience.achievements.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + i * 0.1,
                    ease: 'easeOut',
                  }}
                  className="flex items-start gap-2.5 text-sm text-white/50"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]/60" />
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {experience.tech.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.7 + i * 0.08,
                    ease: 'easeOut',
                  }}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60 transition-colors duration-200 hover:border-[#3B82F6]/40 hover:text-[#3B82F6]"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
