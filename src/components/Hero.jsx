import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Download } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const blobVariants = (duration, xRange, yRange) => ({
  animate: {
    x: xRange,
    y: yRange,
    scale: [1, 1.1, 0.95, 1.05, 1],
    transition: {
      duration,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    },
  },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* ── Floating gradient blobs ── */}
      <motion.div
        className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#3B82F6]/20 blur-[120px]"
        variants={blobVariants(18, [0, 60, -30, 0], [0, 40, -20, 0])}
        animate="animate"
      />
      <motion.div
        className="pointer-events-none absolute -bottom-40 right-0 h-[600px] w-[600px] rounded-full bg-[#8B5CF6]/15 blur-[140px]"
        variants={blobVariants(22, [0, -50, 30, 0], [0, -30, 50, 0])}
        animate="animate"
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#3B82F6]/10 blur-[100px]"
        variants={blobVariants(20, [0, 40, -40, 0], [0, -50, 20, 0])}
        animate="animate"
      />

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mb-4 text-xl uppercase tracking-wide text-gray-400"
        >
          Software Engineer &amp; Data Analyst
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="mb-6 text-7xl font-black leading-tight tracking-tight md:text-8xl"
        >
          <span className="bg-gradient-to-r from-white via-[#3B82F6] to-white bg-clip-text text-transparent">
            Mannat Bansal
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-500"
        >
          Building data-driven applications, analytics dashboards, and
          AI-powered solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
          {/* Primary – View Projects */}
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-full bg-[#3B82F6] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.45)]"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Outline – Download Resume */}
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-full border border-gray-700 px-8 py-3.5 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-blue-500 hover:text-white"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-1 text-gray-500 transition-colors hover:text-[#3B82F6]"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
