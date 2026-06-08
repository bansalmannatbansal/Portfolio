import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Terminal, BarChart2, Cpu, Settings } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
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

const skillCategories = [
  {
    name: 'Data Analytics',
    icon: BarChart2,
    skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Power BI', 'Excel', 'Matplotlib', 'Seaborn'],
  },
  {
    name: 'Software Development',
    icon: Cpu,
    skills: ['JavaScript', 'React', 'Flask', 'REST APIs', 'HTML5', 'CSS3'],
  },
  {
    name: 'AI & Automation',
    icon: Terminal,
    skills: ['RAG Systems', 'ChromaDB', 'Vector Databases', 'Prompt Engineering'],
  },
  {
    name: 'Tools & Platforms',
    icon: Settings,
    skills: ['Git', 'GitHub', 'Arduino IDE', 'ESP32'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="skills"
      ref={ref}
      className="relative bg-[#0A0A0A] section-padding overflow-hidden"
    >
      <div className="portfolio-container relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={cardVariants}
          className="mb-14 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <Terminal className="w-4 h-4 text-[#6366F1]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#6366F1]">
              Expertise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F9FAFB] tracking-tight">
            Skills &amp; Tech Stack
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-6 sm:grid-cols-2 w-full"
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.name}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(99,102,241,0.06)' }}
                className="rounded-2xl p-6 sm:p-8 glass-card border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-3 border-b border-white/[0.06] pb-3 mb-5">
                    <IconComponent className="w-4.5 h-4.5 text-[#6366F1]" />
                    <h3 className="text-sm font-bold text-[#F9FAFB] tracking-widest uppercase">
                      {category.name}
                    </h3>
                  </div>

                  {/* Pills Grid */}
                  <ul className="flex flex-wrap gap-2" aria-label={`${category.name} skills`}>
                    {category.skills.map((skill) => (
                      <li key={skill}>
                        <span className="inline-block rounded-full border border-white/[0.06] bg-white/[0.01] hover:border-white/20 hover:text-white px-3 py-1 text-[10px] font-mono text-gray-400 font-semibold tracking-wide transition-all duration-300 select-none cursor-default">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
