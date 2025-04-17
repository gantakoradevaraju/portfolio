'use client'

import { motion } from 'framer-motion'
import { skills, aboutContent } from '@/config/content'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#0a0a1f] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          {aboutContent.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-gray-100 dark:hover:bg-white/15 transition-all"
          >
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
              {aboutContent.subtitle}
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              {aboutContent.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skillSet, index) => (
              <motion.div
                key={skillSet.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-white/15 transition-all"
              >
                <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  {skillSet.category}
                </h4>
                <ul className="space-y-2">
                  {skillSet.items.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                      className="text-gray-700 dark:text-gray-300 text-sm flex items-center"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 