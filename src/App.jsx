import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative min-h-screen bg-[#0A0A0A]"
        >
          {/* Film Grain Noise Texture */}
          <div className="noise-overlay" />

          {/* Core Layout */}
          <Navbar />
          
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Stats />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
