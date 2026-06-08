import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = ['hero', 'projects', 'skills']
    
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0.15,
    })
    
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/[0.08] py-3'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
        aria-label="Global navigation"
      >
        <div className="portfolio-container flex items-center justify-between">
          {/* Logo Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-white font-extrabold text-xl tracking-tighter hover:opacity-85 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] rounded px-1.5 py-0.5"
            aria-label="Mannat Bansal Homepage"
          >
            M.B.
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] rounded-sm ${
                    isActive ? 'text-[#F9FAFB]' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#6366F1]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}

            {/* Resume button in navbar */}
            <a
              href="/resume.pdf"
              download
              className="text-xs font-bold uppercase tracking-wider bg-white hover:bg-gray-100 text-black px-6 py-2.5 rounded-full shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1]"
              aria-label="Download Resume"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1]"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile navigation overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] md:hidden flex flex-col justify-center items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex flex-col items-center gap-8 w-full px-6"
            >
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className={`text-xl font-bold uppercase tracking-widest transition-colors ${
                      isActive ? 'text-[#6366F1]' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                )
              })}

              <motion.a
                href="/resume.pdf"
                download
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full text-center text-sm font-bold uppercase tracking-widest bg-white text-black py-3.5 rounded-full shadow-lg max-w-xs"
              >
                Resume
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
