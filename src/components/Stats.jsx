import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Folder, Briefcase, Database } from "lucide-react";

const stats = [
  { target: 10, label: "Projects Completed", icon: Folder },
  { target: 1, label: "Internship Experience", icon: Briefcase },
  { target: 5, label: "Datasets Analyzed", icon: Database },
];

function AnimatedCounter({ target, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    setCount(0);
    const duration = 2000;
    let start = null;
    let rafId;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target]);

  return (
    <span className="text-4xl sm:text-5xl font-bold text-white tabular-nums">
      {count}+
    </span>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="stats"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* top divider gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[720px] rounded-full bg-blue-500/[0.04] blur-3xl" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center text-sm font-medium uppercase tracking-[0.2em] text-gray-500"
        >
          By the Numbers
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="group relative flex flex-col items-center rounded-2xl border border-white/[0.06] bg-white/[0.03] px-6 py-10 text-center backdrop-blur-md transition-colors duration-300 hover:border-blue-500/30 hover:bg-white/[0.05]"
              >
                {/* icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <Icon className="h-6 w-6 text-[#3B82F6]" />
                </div>

                {/* animated number */}
                <AnimatedCounter target={stat.target} inView={isInView} />

                {/* label */}
                <span className="mt-3 text-sm text-gray-400">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* bottom divider gradient */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
    </section>
  );
}
