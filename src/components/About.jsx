import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, BookOpen, Terminal, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-[#0A0A0A] section-padding overflow-hidden"
    >
      <div className="portfolio-container relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <User className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              About Me
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Background
          </h2>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Main Bio Text */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="md:col-span-2 space-y-5 text-gray-400 text-base leading-relaxed"
          >
            <p>
              I am a Computer Science (Data Science) student and currently work as an{' '}
              <span className="text-white font-semibold border-b border-[#3B82F6]/30 pb-0.5">
                AI Developer Intern at Groto
              </span>.
            </p>
            <p>
              My focus is building software systems, backend applications, automation tools, and data-driven solutions that solve practical problems.
            </p>
            <p>
              I enjoy working across software development, data analytics, backend engineering, and modern AI technologies.
            </p>
          </motion.div>

          {/* Quick Info Sidebar */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
            }}
            className="glass-card rounded-xl p-6 space-y-5 transition-all duration-300"
          >
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 border-b border-white/[0.08] pb-2">
              Focus Areas
            </h3>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <BookOpen className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Education</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-normal">B.Tech in CS (Data Science)</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Terminal className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Current Focus</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-normal">Backend &amp; Data Analytics</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Sparkles className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Specialization</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-normal">RAG Architectures &amp; Vector Indexes</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
