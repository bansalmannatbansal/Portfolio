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

function App() {
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
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Noise texture overlay */}
          <div className="noise-overlay" />
          
          {/* Navigation */}
          <Navbar />
          
          {/* Main content */}
          <main>
            <Hero />
            <div className="section-divider" />
            <About />
            <div className="section-divider" />
            <Experience />
            <div className="section-divider" />
            <Projects />
            <div className="section-divider" />
            <Skills />
            <div className="section-divider" />
            <Stats />
            <div className="section-divider" />
            <Contact />
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
