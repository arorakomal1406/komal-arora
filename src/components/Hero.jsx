import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaCode, FaRocket } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ['Full Stack Developer', 'Web Developer', 'Software Engineer']
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [roles.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <FaCode /> Available for Opportunities
          </motion.div>
          <motion.div className="hero-greeting" variants={itemVariants}>
            Hi, my name is
          </motion.div>
          <motion.h1 className="hero-name" variants={itemVariants}>
            <span className="name-first">Komal</span>
            <span className="name-last">Arora</span>
          </motion.h1>
          <motion.div className="hero-title-wrapper" variants={itemVariants}>
            <motion.span 
              className="hero-title"
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {roles[currentRole]}
            </motion.span>
            <div className="title-line"></div>
          </motion.div>
          <motion.p className="hero-description" variants={itemVariants}>
            I craft exceptional digital experiences that transform ideas into reality. With expertise spanning 
            from <strong>startup MVPs</strong> to <strong>enterprise-scale platforms</strong>, I build 
            scalable, high-performance web applications using cutting-edge technologies.
          </motion.p>
          <motion.div className="hero-buttons" variants={itemVariants}>
            <a href="#contact" className="btn btn-primary">
              Let's Work Together
              <FaArrowRight />
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Portfolio
            </a>
          </motion.div>
          <motion.div className="hero-social" variants={itemVariants}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/komal-arora-9a7bb818a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:komalarora140699@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="hero-image-wrapper">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
          </div>
        </motion.div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  )
}

export default Hero

