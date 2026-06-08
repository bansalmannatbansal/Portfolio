import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Briefcase, Code2, Database } from 'lucide-react';

const achievements = [
  {
    metric: '1 Internship',
    label: 'AI Developer Intern',
    description: 'Collaborating on backend systems and context-aware retrieval solutions at Groto.',
    icon: Briefcase,
  },
  {
    metric: '4 Projects',
    label: 'Systems Built',
    description: 'Designing and building RAG systems, learning platforms, and custom routing engines.',
    icon: Code2,
  },
  {
    metric: '10K+ Records',
    label: 'Data Analyzed',
    description: 'Wrangling and visualizing large datasets to uncover trends and patterns.',
    icon: Database,
  },
  {
    metric: '15+ Tech Stacks',
    label: 'Stack Breadth',
    description: 'Building competencies across data tools, databases, and programming languages.',
    icon: Award,
  },
];

export default function Stats() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="stats"
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
            <Award className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Highlights
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements
          </h2>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group rounded-xl p-6 sm:p-8 glass-card hover:-translate-y-1 hover:shadow-lg hover:shadow-[#3B82F6]/5 transition-all duration-300 flex flex-col justify-between min-h-[200px] sm:min-h-[220px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-sm font-mono text-[#3B82F6] font-bold tracking-wider">
                      {item.metric}
                    </span>
                    <Icon className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-[#3B82F6] transition-colors duration-200">
                    {item.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
