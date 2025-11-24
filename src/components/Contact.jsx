import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaSpinner, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  // Formspree Configuration - Easy email sending service
  // To set up Formspree:
  // 1. Go to https://formspree.io and sign up (free)
  // 2. Create a new form
  // 3. Set the form endpoint to receive emails at: komalarora140699@gmail.com
  // 4. Copy your form endpoint URL and replace FORMSPREE_ENDPOINT below
  // Example: 'https://formspree.io/f/YOUR_FORM_ID'
  
  const FORMSPREE_ENDPOINT = 'YOUR_FORMSPREE_ENDPOINT' // Replace with your Formspree endpoint
  
  // Alternative: EmailJS Configuration (if you prefer EmailJS)
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID' // Replace with your EmailJS Service ID
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID' // Replace with your EmailJS Template ID
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY' // Replace with your EmailJS Public Key

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear status when user starts typing again
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Priority 1: Try Formspree if configured
      if (FORMSPREE_ENDPOINT && FORMSPREE_ENDPOINT !== 'YOUR_FORMSPREE_ENDPOINT') {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject || 'Contact Form Inquiry',
            message: formData.message,
            _replyto: formData.email,
            _subject: formData.subject || 'Contact Form Inquiry from Portfolio'
          })
        })

        if (response.ok) {
          setSubmitStatus('success')
          setFormData({ name: '', email: '', subject: '', message: '' })
          setTimeout(() => {
            setSubmitStatus(null)
          }, 5000)
          setIsSubmitting(false)
          return
        } else {
          throw new Error('Formspree submission failed')
        }
      }

      // Priority 2: Try EmailJS if configured
      if (EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' && 
          EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' && 
          EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'Contact Form Inquiry',
          message: formData.message,
          reply_to: formData.email,
          to_email: 'komalarora140699@gmail.com'
        }

        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        )

        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
        setIsSubmitting(false)
        return
      }

      // If neither is configured, show error with setup instructions
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus(null)
      }, 10000)
      
    } catch (error) {
      console.error('Email Error:', error)
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'komalarora140699@gmail.com',
      link: 'mailto:komalarora140699@gmail.com'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91 7526857494',
      link: 'tel:+917526857494'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Chandigarh, Punjab, India',
      link: null
    }
  ]

  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/komal-arora-9a7bb818a', label: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com', label: 'GitHub' }
  ]

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-info">
            <h3>Let's Work Together</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out!
            </p>
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-detail">
                    <span className="contact-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="contact-value">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="spinner" /> Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
            {submitStatus === 'success' && (
              <motion.div
                className="form-message success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FaCheckCircle /> Thank you! Your message has been sent successfully. I'll get back to you soon.
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div
                className="form-message error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FaExclamationCircle /> Oops! There was an error sending your message. Please check the console or configure Formspree/EmailJS. You can also email me directly at komalarora140699@gmail.com
              </motion.div>
            )}
            {(FORMSPREE_ENDPOINT === 'YOUR_FORMSPREE_ENDPOINT' && EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') && (
              <motion.div
                className="form-message info"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FaExclamationCircle /> ⚠️ Email service not configured. Please set up Formspree (recommended) or EmailJS to enable email sending. See Contact.jsx for setup instructions.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

