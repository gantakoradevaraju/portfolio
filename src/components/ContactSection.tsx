'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'

const contactInfo = {
  name: "DEVA RAJU GANTAKORA",
  phone: "+1 3304592734",
  email: "gantakoradevaraju@gmail.com",
  linkedin: "https://linkedin.com/in/devaraju-gantakora",
  github: "https://github.com/devaraju-gantakora"
}

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Let's Connect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
              
              <motion.a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-3 text-muted hover:text-primary-500 transition-colors"
                whileHover={{ x: 5 }}
              >
                <FiPhone className="w-5 h-5" />
                <span>{contactInfo.phone}</span>
              </motion.a>

              <motion.a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 text-muted hover:text-primary-500 transition-colors"
                whileHover={{ x: 5 }}
              >
                <FiMail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </motion.a>

              <motion.a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted hover:text-primary-500 transition-colors"
                whileHover={{ x: 5 }}
              >
                <FiLinkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </motion.a>

              <motion.a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted hover:text-primary-500 transition-colors"
                whileHover={{ x: 5 }}
              >
                <FiGithub className="w-5 h-5" />
                <span>GitHub Profile</span>
              </motion.a>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2 px-4 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection 