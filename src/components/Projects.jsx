import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Real projects with actual screenshots from project screens folder
  const projects = [
    {
      id: 1,
      title: 'Enterprise Task & Project Management System',
      description: 'Developed a comprehensive enterprise-level task and project management system with advanced financial information handling capabilities. Implemented real-time task tracking, project workflows, resource allocation, and automated financial reporting features using SQL Server for robust data management and PHP backend architecture.',
      technologies: ['SQL Server', 'PHP', 'HTML5', 'JavaScript', 'jQuery', 'AJAX', 'Bootstrap'],
      image: '/project-screens/Sofficio1.png',
      github: '#',
      live: 'https://www.sofficio.com',
      category: 'Full Stack',
      teamSize: 2,
      highlights: [
        'Implemented complex task tracking and project workflow management',
        'Designed financial information handling and reporting system',
        'Built responsive UI with Bootstrap and jQuery for enhanced user experience',
        'Developed RESTful APIs using AJAX for seamless data interaction'
      ]
    },
    {
      id: 2,
      title: 'Loyalty Points & Rewards Management Platform',
      description: 'Architected and developed a comprehensive loyalty and rewards management system with multi-panel administration (admin, business, and customer panels). Built a scalable platform featuring reward point tracking, redemption workflows, and customer engagement tools using React Native for mobile app integration and CodeIgniter for backend services.',
      technologies: ['CodeIgniter', 'React Native', 'MySQL', 'PHP', 'JavaScript'],
      image: '/project-screens/Dealsby1.png',
      github: '#',
      live: 'https://dealsby.io',
      category: 'Full Stack',
      teamSize: 2,
      highlights: [
        'Developed admin, business, and customer panel interfaces with role-based access control',
        'Implemented reward point system with tracking and redemption features',
        'Built React Native mobile application for customer-facing interactions',
        'Created RESTful APIs for seamless data synchronization between web and mobile platforms'
      ]
    },
    {
      id: 3,
      title: 'Event Management & Scheduling Platform',
      description: 'Designed and developed a complete event management solution with comprehensive admin panel and robust API architecture. Implemented advanced event scheduling algorithms, attendee management, booking systems, and automated notification services using Laravel framework for scalable backend infrastructure.',
      technologies: ['Laravel', 'MySQL', 'PHP', 'RESTful API', 'JavaScript'],
      image: '/project-screens/Farfaces1.png',
      github: '#',
      live: 'https://farfaces.net',
      category: 'Full Stack',
      teamSize: 1,
      highlights: [
        'Built comprehensive admin panel with event creation and management features',
        'Developed RESTful APIs for event scheduling and booking functionalities',
        'Implemented automated notification system for event reminders and updates',
        'Created scalable database architecture for handling concurrent event bookings'
      ]
    },
    {
      id: 4,
      title: 'Merchant Service Management & Analytics Platform',
      description: 'Engineered a comprehensive merchant service management system with advanced analytics and reporting capabilities. Built robust admin panel using Laravel and developed high-performance RESTful APIs with Node.js for real-time data processing, transaction management, and business intelligence features.',
      technologies: ['Laravel', 'Node.js', 'MySQL', 'RESTful API', 'JavaScript'],
      image: '/project-screens/Wellzon1.png',
      github: '#',
      live: 'https://wellzonapp.com',
      category: 'Full Stack',
      teamSize: 2,
      highlights: [
        'Developed Laravel-based admin panel with comprehensive merchant management features',
        'Built high-performance Node.js APIs for real-time transaction processing',
        'Implemented analytics dashboard with advanced reporting and data visualization',
        'Created scalable architecture supporting multiple merchants and high transaction volumes'
      ]
    },
    {
      id: 5,
      title: 'E-Commerce Platform Migration & Modernization',
      description: 'Led comprehensive migration and enhancement project for large-scale e-commerce platform from legacy CakePHP to modern Laravel framework. Implemented Vue.js for interactive frontend components, enhanced database architecture, and improved application performance, scalability, and maintainability while ensuring zero downtime during migration.',
      technologies: ['Laravel', 'Vue.js', 'CakePHP', 'MySQL', 'PHP', 'JavaScript'],
      image: '/project-screens/Topbanana1.png',
      github: '#',
      live: 'https://topbanana.com.au',
      category: 'Full Stack',
      teamSize: 2,
      highlights: [
        'Successfully migrated legacy CakePHP application to modern Laravel framework',
        'Implemented Vue.js components for enhanced user interface and interactivity',
        'Optimized database queries and improved application performance by 40%',
        'Developed comprehensive migration strategy ensuring data integrity and zero downtime'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    if (isLeftSwipe) nextSlide()
    if (isRightSwipe) prevSlide()
  }

  // Auto-slide (optional - can be disabled)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Auto-advance every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div 
          className="projects-slider-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="slider-container">
            <button 
              className="slider-nav-btn prev-btn"
              onClick={prevSlide}
              aria-label="Previous project"
            >
              <FaChevronLeft />
            </button>
            
            <div className="slider-track">
              {projects.map((project, index) => {
                const position = index - currentIndex
                const isActive = index === currentIndex
                const isNext = position === 1
                const isPrev = position === -1
                
                return (
                  <motion.div
                    key={project.id}
                    className={`project-slide ${isActive ? 'active' : ''} ${isNext ? 'next' : ''} ${isPrev ? 'prev' : ''}`}
                    initial={false}
                    animate={{
                      x: `${position * 100}%`,
                      scale: isActive ? 1 : 0.85,
                      opacity: isActive ? 1 : 0.6,
                      zIndex: isActive ? 10 : 1
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  >
                    <motion.div
                      className="project-card"
                      whileHover={{ 
                        y: -15,
                        rotateY: 5,
                        rotateX: 5,
                        scale: 1.02
                      }}
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="project-image-wrapper">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        <div className="project-image-placeholder" style={{ display: 'none' }}>
                          <span>{project.title}</span>
                        </div>
                        <div className="project-overlay">
                          <span className="project-category">{project.category}</span>
                        </div>
                        <div className="project-hover-overlay">
                          <span className="view-project-btn">View Details</span>
                        </div>
                      </div>
                      <div className="project-info">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description.substring(0, 150)}...</p>
                        <div className="project-technologies">
                          {project.technologies.slice(0, 5).map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                          ))}
                          {project.technologies.length > 5 && (
                            <span className="tech-tag more">+{project.technologies.length - 5}</span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
            
            <button 
              className="slider-nav-btn next-btn"
              onClick={nextSlide}
              aria-label="Next project"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Slider Indicators */}
          <div className="slider-indicators">
            {projects.map((project, index) => (
              <button
                key={project.id}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="project-modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  <FaTimes />
                </button>
                <div className="modal-image">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="project-image-placeholder large" style={{ display: 'none' }}>
                    <span>{selectedProject.title}</span>
                  </div>
                </div>
                <div className="modal-info">
                  <h2>{selectedProject.title}</h2>
                  <p>{selectedProject.description}</p>
                  {selectedProject.highlights && (
                    <div className="modal-highlights">
                      <strong>Key Achievements:</strong>
                      <ul className="highlights-list">
                        {selectedProject.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="modal-technologies">
                    <strong>Technologies Used:</strong>
                    <div className="tech-tags">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  {selectedProject.teamSize && (
                    <div className="modal-team">
                      <strong>Team Size:</strong> {selectedProject.teamSize} {selectedProject.teamSize === 1 ? 'Developer' : 'Developers'}
                    </div>
                  )}
                  <div className="modal-links">
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-link"
                    >
                      <FaExternalLinkAlt /> View Live Project
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects

