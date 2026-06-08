import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import Button from './Button';

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const handleScrollToNext = (e) => {
    e.preventDefault();
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = nextSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A0A0A] pt-24"
    >
      <div className="portfolio-container grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
        
        {/* Left: Biography Details */}
        <motion.div
          className="lg:col-span-8 flex flex-col text-left items-start"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.06 } }
          }}
        >
          {/* Label */}
          <motion.div
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#111111] border border-white/[0.08] text-[10px] font-bold uppercase tracking-wider text-gray-400"
          >
            Software Engineer &amp; Data Analyst
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="mb-3 text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight text-white leading-[1.05]"
          >
            Mannat Bansal
          </motion.h1>

          {/* Subheadline / Title */}
          <motion.h2
            variants={fadeUp}
            className="mb-5 text-lg sm:text-xl font-bold tracking-tight text-gray-300"
          >
            Building data-driven applications, backend systems, and AI-powered tools.
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            variants={fadeUp}
            className="mb-8 text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl"
          >
            Currently working on Retrieval-Augmented Generation (RAG) systems and vector databases at Groto while pursuing a B.Tech in Computer Science (Data Science).
          </motion.p>

          {/* Actions & Links Grid */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 w-full">
            {/* View Projects */}
            <Button
              variant="primary"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const projectsSec = document.querySelector('#projects');
                if (projectsSec) {
                  window.scrollTo({
                    top: projectsSec.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 80,
                    behavior: 'smooth'
                  });
                }
              }}
              icon={ArrowRight}
            >
              View Projects
            </Button>

            {/* Resume Download */}
            <Button
              variant="secondary"
              href="/resume.pdf"
              download
              icon={Download}
            >
              Resume
            </Button>

            {/* GitHub */}
            <Button
              variant="secondary"
              href="https://github.com/bansalmannatbansal"
              target="_blank"
              rel="noopener noreferrer"
              icon={Github}
            >
              GitHub
            </Button>

            {/* LinkedIn */}
            <Button
              variant="secondary"
              href="https://www.linkedin.com/in/mannat-bansal/"
              target="_blank"
              rel="noopener noreferrer"
              icon={Linkedin}
            >
              LinkedIn
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: Abstract Terminal Visual (Slightly smaller, cols-4) */}
        <motion.div
          className="lg:col-span-4 hidden lg:flex justify-end"
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col rounded-xl border border-white/[0.08] bg-[#111111] overflow-hidden text-left font-mono text-[10px] w-full max-w-[300px] aspect-[4/3] shadow-xl relative">
            <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40" />
            <div className="flex items-center gap-1.5 px-3.5 py-2.5 bg-[#151515] border-b border-white/[0.08] relative z-10">
              <div className="w-2 h-2 rounded-full bg-white/10" />
              <div className="w-2 h-2 rounded-full bg-white/10" />
              <div className="w-2 h-2 rounded-full bg-white/10" />
              <span className="text-[8px] text-gray-500 ml-2 select-none">query.py</span>
            </div>
            <div className="p-4 space-y-2.5 text-gray-400 relative z-10 select-none">
              <div className="flex gap-2">
                <span className="text-[#3B82F6]">&gt;</span>
                <span>python run.py --query="portfolio"</span>
              </div>
              <div className="text-gray-500 leading-normal text-[9px]">
                [12:24:09] Scanning chromaDB indexes...
              </div>
              <div className="text-[#3B82F6] border-l border-[#3B82F6]/30 pl-3 py-0.5">
                <div className="font-bold text-white mb-0.5">MATCH [score: 0.99]</div>
                <div>Name: Mannat Bansal</div>
                <div>Role: Software Developer</div>
                <div>Intern: AI Dev @ Groto</div>
              </div>
              <div className="flex gap-2">
                <span className="text-[#3B82F6]">&gt;</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.4 }}
      >
        <a
          href="#about"
          onClick={(e) => handleScrollToNext(e)}
          className="flex flex-col items-center gap-1.5 text-gray-500 transition-colors hover:text-[#3B82F6] focus:outline-none"
          aria-label="Scroll to about section"
        >
          <span className="text-[9px] uppercase tracking-widest font-semibold text-gray-500">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-3.5 w-3.5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
