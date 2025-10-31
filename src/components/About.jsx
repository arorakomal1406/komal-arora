import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-main-card" variants={itemVariants}>
            <div className="about-text-content">
              <p className="about-intro">
                I am a passionate <strong>Full Stack Web Developer</strong> with 5+ years of experience building 
                robust, scalable web applications. My journey spans from fast-paced <strong>startup environments</strong> 
                where I deliver end-to-end solutions, to <strong>enterprise-level organizations</strong> where I 
                architect complex systems handling high-traffic volumes.
              </p>
              <p className="about-detail">
                I've successfully delivered projects ranging from <strong>MVP prototypes for startups</strong> to 
                <strong> enterprise-grade platforms</strong> requiring high availability and scalability. This diverse 
                experience has equipped me with the flexibility to adapt to different business needs, from agile 
                startup teams to large enterprise development groups.
              </p>
            </div>
            
            <div className="about-stats-compact" variants={itemVariants}>
              <div className="stat-item-compact">
                <div className="stat-number-compact">5+</div>
                <div className="stat-label-compact">Years</div>
              </div>
              <div className="stat-item-compact">
                <div className="stat-number-compact">50+</div>
                <div className="stat-label-compact">Projects</div>
              </div>
              <div className="stat-item-compact">
                <div className="stat-number-compact">Startup → Enterprise</div>
                <div className="stat-label-compact">Experience</div>
              </div>
              <div className="stat-item-compact">
                <div className="stat-number-compact">Full Stack</div>
                <div className="stat-label-compact">Expertise</div>
              </div>
            </div>
          </motion.div>

          <motion.div className="about-highlights-compact" variants={itemVariants}>
            <div className="highlight-card-compact">
              <div className="highlight-icon-compact">🚀</div>
              <div>
                <h4>Startup Projects</h4>
                <p>Rapid MVP development & lean architecture</p>
              </div>
            </div>
            <div className="highlight-card-compact">
              <div className="highlight-icon-compact">🏢</div>
              <div>
                <h4>Enterprise Solutions</h4>
                <p>Scalable systems & high-availability platforms</p>
              </div>
            </div>
            <div className="highlight-card-compact">
              <div className="highlight-icon-compact">⚡</div>
              <div>
                <h4>Versatile Developer</h4>
                <p>Adaptable across all business scales</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

