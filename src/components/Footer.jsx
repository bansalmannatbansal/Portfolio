import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0A0A0A] py-8">
      <div className="portfolio-container flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-[10px] sm:text-xs text-gray-500 font-bold tracking-widest uppercase select-none">
          © 2025 Mannat Bansal
        </p>

        {/* Social Link Actions */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/bansalmannatbansal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] rounded p-1"
            aria-label="GitHub Profile Link"
          >
            <Github className="w-[18px] h-[18px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/mannat-bansal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] rounded p-1"
            aria-label="LinkedIn Profile Link"
          >
            <Linkedin className="w-[18px] h-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  )
}
