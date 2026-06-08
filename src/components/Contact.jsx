import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";

const links = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/mannatbansal",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/mannatbansal",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:mannatbansal@email.com",
    icon: Mail,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* subtle top glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[480px] w-[640px] rounded-full bg-blue-500/[0.04] blur-3xl" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-3xl px-6 text-center">
        {/* heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-400"
        >
          I'm always open to discussing new opportunities, interesting projects,
          and collaborations.
        </motion.p>

        {/* social cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                custom={i + 2}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center justify-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-6 py-5 backdrop-blur-md transition-colors duration-300 hover:border-blue-500/50 hover:bg-white/[0.06]"
              >
                <Icon className="h-5 w-5 text-[#3B82F6]" />
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {link.name}
                </span>
                <ArrowUpRight className="h-4 w-4 text-gray-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#3B82F6]" />
              </motion.a>
            );
          })}
        </div>

        {/* CTA button */}
        <motion.div
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12"
        >
          <a
            href="mailto:mannatbansal@email.com"
            className="inline-flex items-center gap-2 rounded-full bg-[#3B82F6] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:bg-blue-400 hover:shadow-blue-500/40 hover:scale-105 active:scale-[0.98]"
          >
            <Mail className="h-4 w-4" />
            Say Hello
          </a>
        </motion.div>

        {/* footer */}
        <motion.p
          variants={fadeUp}
          custom={6}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-24 text-xs text-gray-600"
        >
          © 2026 Mannat Bansal. Built with passion and code.
        </motion.p>
      </div>
    </section>
  );
}
