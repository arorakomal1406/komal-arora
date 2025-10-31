import { motion } from 'framer-motion'
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDatabase,
  FaCode
} from 'react-icons/fa'
import { SiMysql, SiPostgresql, SiPhp, SiLaravel, SiCodeigniter, SiBootstrap, SiVuedotjs, SiCakephp } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  // Reorganized skills - React and Vue moved to the end
  const skills = [
    { name: 'Core PHP', icon: <SiPhp />, color: '#777BB4', category: 'Backend' },
    { name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20', category: 'Backend' },
    { name: 'CodeIgniter', icon: <SiCodeigniter />, color: '#EF4223', category: 'Backend' },
    { name: 'CakePHP', icon: <SiCakephp />, color: '#D33C43', category: 'Backend' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', category: 'Frontend' },
    { name: 'jQuery', icon: <FaJs />, color: '#0769AD', category: 'Frontend' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', category: 'Frontend' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6', category: 'Frontend' },
    { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3', category: 'Frontend' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1', category: 'Database' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791', category: 'Database' },
    { name: 'SQL Server', icon: <FaDatabase />, color: '#CC2927', category: 'Database' },
    { name: 'RESTful API', icon: <FaCode />, color: '#FF6B6B', category: 'Tools' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032', category: 'Tools' },
    { name: 'React.js', icon: <FaReact />, color: '#61DAFB', category: 'Frontend' },
    { name: 'Vue.js', icon: <SiVuedotjs />, color: '#4FC08D', category: 'Frontend' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>
        <div className="skills-categories">
          {['Backend', 'Frontend', 'Database', 'Tools'].map((category) => (
            <motion.div
              key={category}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="skill-card"
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.1,
                        rotateY: 10,
                        rotateX: 5,
                        z: 50
                      }}
                      transition={{ 
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }}
                    >
                      <div 
                        className="skill-icon-wrapper"
                        style={{ 
                          '--skill-color': skill.color,
                          background: `linear-gradient(135deg, ${skill.color}15 0%, ${skill.color}05 100%)`
                        }}
                      >
                        <div className="skill-icon" style={{ color: skill.color }}>
                          {skill.icon}
                        </div>
                        <div className="skill-glow" style={{ background: skill.color }}></div>
                      </div>
                      <h3 className="skill-name">{skill.name}</h3>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

