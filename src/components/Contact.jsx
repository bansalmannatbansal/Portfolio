import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Github, Mail, Copy, Check, Download } from "lucide-react";
import Button from "./Button";

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);
  const emailAddress = "mannatbansal0307@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative bg-[#0A0A0A] section-padding overflow-hidden">
      <div ref={ref} className="portfolio-container relative z-10 text-center">
        
        {/* Header / CTA */}
        <div className="max-w-2xl mx-auto mb-10">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Get in Touch
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4"
          >
            Let's Build Something Meaningful
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto"
          >
            I am actively looking for{' '}
            <strong className="text-white font-semibold">Software Engineer</strong>{' '}
            and{' '}
            <strong className="text-white font-semibold">Data Analyst</strong>{' '}
            roles. If you have an opening that matches my profile or would like to discuss my work, please reach out!
          </motion.p>
        </div>

        {/* Buttons Grid */}
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap items-center justify-center gap-3 max-w-xl mx-auto mb-16"
        >
          {/* Email Copy */}
          <Button
            variant="primary"
            onClick={handleCopyEmail}
            icon={copied ? Check : Copy}
          >
            {copied ? "Copied Email!" : "Copy Email"}
          </Button>

          {/* Mailto Link */}
          <Button
            variant="secondary"
            href={`mailto:${emailAddress}`}
            icon={Mail}
          >
            Send Email
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

          {/* Resume Download */}
          <Button
            variant="secondary"
            href="/resume.pdf"
            download
            icon={Download}
          >
            Resume
          </Button>
        </motion.div>

        {/* Footer info */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="border-t border-white/[0.08] pt-8"
        >
          <p className="text-[10px] text-gray-500 font-semibold tracking-wide uppercase">
            © 2026 Mannat Bansal. Student B.Tech CS (Data Science) • AI Developer Intern at Groto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
