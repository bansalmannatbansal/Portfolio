import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, BarChart3, Database, Brain, Globe, Wrench } from 'lucide-react';

const skillCategories = [
  {
    name: 'Programming',
    icon: Code2,
    skills: ['Python', 'JavaScript', 'SQL', 'C++'],
  },
  {
    name: 'Data Analytics & Visualization',
    icon: BarChart3,
    skills: [
      'Power BI',
      'Matplotlib',
      'Seaborn',
      'Pandas',
      'NumPy',
      'Excel',
      'Data Cleaning',
      'EDA',
    ],
  },
  {
    name: 'Databases',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    name: 'AI & Machine Learning',
    icon: Brain,
    skills: [
      'RAG Systems',
      'LLM Applications',
      'Prompt Engineering',
      'LangChain',
      'ChromaDB',
      'ML Fundamentals',
    ],
  },
  {
    name: 'Web Development',
    icon: Globe,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Flask', 'REST APIs'],
  },
  {
    name: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
  },
];

function SkillCard({ category, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors duration-300"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <Icon className="w-5 h-5 text-blue-400" />
        </div>
        <h3 className="text-lg font-semibold text-white">{category.name}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/50 text-gray-300 hover:text-white rounded-lg px-3 py-2 text-sm transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative py-24 px-6">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium tracking-widest uppercase text-blue-400 mb-3">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Skills
            </span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
