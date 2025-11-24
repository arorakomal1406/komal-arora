import { useMemo, useState } from 'react'
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
  const mailConfig = useMemo(() => ({
    formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim() || '',
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() || '',
    targetEmail: import.meta.env.VITE_CONTACT_TARGET_EMAIL?.trim() || 'komalarora140699@gmail.com'
  }), [])
  const isEmailConfigured = useMemo(
    () => Boolean(mailConfig.serviceId && mailConfig.templateId && mailConfig.publicKey),
    [mailConfig]
  )
  const isFormspreeConfigured = Boolean(mailConfig.formspreeEndpoint)

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
      if (isFormspreeConfigured) {
        const response = await fetch(mailConfig.formspreeEndpoint, {
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
            _subject: formData.subject || 'Portfolio Contact Form'
          })
        })

        if (!response.ok) {
          throw new Error('Formspree submission failed')
        }

        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
        return
      }

      if (!isEmailConfigured) {
        throw new Error('No email service configured')
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Contact Form Inquiry',
        message: formData.message,
        reply_to: formData.email,
        to_email: mailConfig.targetEmail
      }

      await emailjs.send(
        mailConfig.serviceId,
        mailConfig.templateId,
        templateParams,
        mailConfig.publicKey
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)

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
                <FaExclamationCircle /> Oops! There was an error sending your message. Please try again or email me directly at komalarora140699@gmail.com
              </motion.div>
            )}
            {!isFormspreeConfigured && !isEmailConfigured && (
              <motion.div
                className="form-message info"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FaExclamationCircle /> ⚠️ Email service not configured. Add a Formspree endpoint (<code>VITE_FORMSPREE_ENDPOINT</code>) or EmailJS keys to <code>.env.local</code>. See <code>FORM_SETUP.md</code> for the quick guide.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

