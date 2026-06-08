import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal } from 'lucide-react';

const skillCategories = [
  {
    name: 'Data Analytics',
    description: 'Analyzing datasets and constructing dynamic reporting solutions.',
    skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Power BI', 'Excel', 'Matplotlib', 'Seaborn'],
  },
  {
    name: 'Software Development',
    description: 'Building client interfaces and scalable backend integration APIs.',
    skills: ['JavaScript', 'React', 'Flask', 'REST APIs', 'HTML5', 'CSS3'],
  },
  {
    name: 'AI & Automation',
    description: 'Integrating vector search mechanisms and Large Language Models.',
    skills: ['RAG Systems', 'ChromaDB', 'Vector Databases', 'Prompt Engineering'],
  },
  {
    name: 'Tools & Hardware',
    description: 'Collaborating using standard git versioning and hardware IDEs.',
    skills: ['Git', 'GitHub', 'Arduino IDE', 'ESP32'],
  },
];

function SkillCategory({ category, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="rounded-xl p-6 sm:p-8 glass-card hover:-translate-y-1 hover:shadow-lg hover:shadow-[#3B82F6]/5 transition-all duration-300"
    >
      <h3 className="text-sm font-bold text-white tracking-tight uppercase tracking-widest mb-1 group-hover:text-[#3B82F6] transition-colors">
        {category.name}
      </h3>
      <p className="text-xs text-gray-400 mb-5 leading-relaxed">
        {category.description}
      </p>
      <ul className="flex flex-wrap gap-1.5" aria-label={`${category.name} Skills`}>
        {category.skills.map((skill) => (
          <li key={skill}>
            <span className="inline-block rounded border border-white/[0.06] bg-[#0A0A0A]/50 px-2.5 py-1 text-[10px] font-mono text-gray-400 font-medium tracking-wide hover:border-white/20 hover:text-white transition-colors duration-300 cursor-default select-none">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative bg-[#0A0A0A] section-padding overflow-hidden"
    >
      <div className="portfolio-container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <Terminal className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Expertise
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.name}
              category={category}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
