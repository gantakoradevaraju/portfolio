'use client'

import { motion } from 'framer-motion'
import { experiences, experienceContent } from '@/config/content'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-[#0a0a1f] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          {experienceContent.title}
        </h2>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-white/10 backdrop-blur-sm rounded-lg p-8 relative hover:bg-gray-100 dark:hover:bg-white/15 transition-all"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {experience.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {experience.company}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {experience.period}
                </p>
              </div>
              
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {experience.description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-2 text-gray-700 dark:text-gray-300">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 