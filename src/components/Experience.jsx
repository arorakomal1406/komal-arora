import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Web Developer',
      company: 'Ultivic Pvt Ltd',
      location: 'Mohali, India',
      period: 'August 2023 - Present',
      description: [
        'Leading development of web applications using Laravel, CodeIgniter, CakePHP, Vue.js, React, MySQL, and PostgreSQL',
        'Building and integrating RESTful APIs and managing backend architecture',
        'Collaborating with cross-functional teams to design, develop, and deploy scalable web solutions',
        'Implementing responsive web applications with modern front-end frameworks',
        'Optimizing database queries and ensuring optimal application performance'
      ]
    },
    {
      type: 'work',
      title: 'Web Developer',
      company: 'KVR Technologies',
      location: 'Amritsar, Punjab, India',
      period: 'April 2020 - July 2023',
      description: [
        'Developed responsive web applications using HTML, CSS, JavaScript, jQuery, and Bootstrap',
        'Created and maintained databases using MySQL and SQL Server',
        'Participated in full product lifecycle including development, testing, time estimation, use case mapping, and requirement analysis',
        'Oversaw security and data handling while creating responsive applications',
        'Worked on both front-end and back-end development projects'
      ]
    }
  ]

  const education = [
    {
      type: 'education',
      degree: 'Master of Computer Applications (M.C.A)',
      institution: 'Guru Nanak Dev University, Open & Distance Learning',
      location: 'Amritsar, Punjab, India',
      period: '2020 - 2023',
      description: [
        'Specialized in Web Development and Software Engineering',
        'Advanced coursework in Database Management Systems, Software Engineering, and Web Technologies'
      ]
    },
    {
      type: 'education',
      degree: 'Bachelor of Computer Applications (B.C.A)',
      institution: 'SSSS College of Commerce for Women, GNDU',
      location: 'Amritsar, Punjab, India',
      period: '2017 - 2020',
      description: [
        'Core courses in Programming Languages, Data Structures, Algorithms, and Database Systems',
        'Focused on Web Development and Application Programming',
        'Completed projects in Web Technologies and Database Management'
      ]
    }
  ]

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
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience & Education
        </motion.h2>

        <div className="experience-content">
          <div className="experience-section">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-icon-wrapper work">
                <FaBriefcase />
              </div>
              <h3 className="experience-heading">Work Experience</h3>
            </motion.div>
            <motion.div
              className="timeline"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="timeline-marker">
                    <div className="marker-inner"></div>
                  </div>
                  <div className="timeline-content">
                    {exp.period.includes('Present') && (
                      <div className="timeline-badge">Current</div>
                    )}
                    <div className="timeline-header">
                      <div>
                        <h4 className="timeline-title">{exp.title}</h4>
                        <div className="timeline-company">
                          <FaMapMarkerAlt /> {exp.company} • {exp.location}
                        </div>
                      </div>
                      <span className="timeline-period">
                        <FaCalendarAlt /> {exp.period}
                      </span>
                    </div>
                    <ul className="timeline-description">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>
                          <span className="bullet"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="experience-section">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-icon-wrapper education">
                <FaGraduationCap />
              </div>
              <h3 className="experience-heading">Education</h3>
            </motion.div>
            <motion.div
              className="timeline"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="timeline-item education-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="timeline-marker education">
                    <div className="marker-inner"></div>
                  </div>
                  <div className="timeline-content education-content">
                    <div className="timeline-header">
                      <div>
                        <h4 className="timeline-title">{edu.degree}</h4>
                        <div className="timeline-company">
                          <FaMapMarkerAlt /> {edu.institution} • {edu.location}
                        </div>
                      </div>
                      <span className="timeline-period">
                        <FaCalendarAlt /> {edu.period}
                      </span>
                    </div>
                    <ul className="timeline-description">
                      {edu.description.map((item, idx) => (
                        <li key={idx}>
                          <span className="bullet"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

