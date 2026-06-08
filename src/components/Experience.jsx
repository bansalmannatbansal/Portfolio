import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'AI Developer Intern',
    company: 'Groto',
    duration: 'Jun 2026 — Present',
    location: 'Remote',
    description:
      'Collaborating within a small engineering team to build and maintain backend and AI-related features, focusing on context-aware knowledge retrieval tools.',
    achievements: [
      'Working on Retrieval-Augmented Generation (RAG) systems for document retrieval.',
      'Working with ChromaDB and vector databases to index and search content.',
      'Supporting AI-powered workflows and assisting in engineering prompt patterns.',
      'Contributing to Python-based backend features and API integrations.',
    ],
    tech: ['Python', 'RAG Systems', 'ChromaDB', 'Vector Databases', 'Prompt Engineering', 'Git'],
  }
];

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative bg-[#0A0A0A] section-padding overflow-hidden"
    >
      <div className="portfolio-container relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <Briefcase className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Work History
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience
          </h2>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/[0.08] ml-2.5 sm:ml-4 pl-6 sm:pl-8 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border border-white/[0.08] bg-[#0A0A0A] flex items-center justify-center group-hover:border-[#3B82F6] group-hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all duration-300">
                <div className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
                {/* Date */}
                <div className="md:col-span-1 pt-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 block">
                    {exp.duration}
                  </span>
                  <span className="text-[11px] text-gray-600 block mt-0.5 font-medium">
                    {exp.location}
                  </span>
                </div>

                {/* Details */}
                <div className="md:col-span-3 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-[#3B82F6] transition-colors duration-200">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-gray-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="space-y-2.5">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                        Key Contributions
                      </h4>
                      <ul className="space-y-2" aria-label={`Contributions at ${exp.company}`}>
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-gray-400">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-600" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech stack tags */}
                  {exp.tech && exp.tech.length > 0 && (
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((tag) => (
                          <span
                            key={tag}
                            className="rounded border border-white/[0.06] bg-[#0A0A0A]/50 px-2 py-0.5 text-[10px] font-mono text-gray-400 font-medium tracking-wide hover:border-white/20 hover:text-white transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
