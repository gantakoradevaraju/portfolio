'use client'

import { motion } from 'framer-motion'
import { experiences, experienceContent } from '@/config/content'

export default function ExperienceSection() {
  // Split experiences into top and bottom rows
  const topExperiences = experiences.slice(0, 2)
  const bottomExperiences = experiences.slice(2)

  return (
    <section id="experience" className="py-20 bg-white dark:bg-[#0a0a1f] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          {experienceContent.title}
        </h2>
        
        {/* Top Row - 2 experiences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {topExperiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-white/10 backdrop-blur-sm rounded-lg p-6 relative hover:bg-gray-100 dark:hover:bg-white/15 transition-all h-full flex flex-col"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {experience.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                  {experience.company}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {experience.period}
                </p>
              </div>
              
              <div className="flex-grow">
                {/* <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                  {experience.description}
                </p> */}
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-2 text-gray-700 dark:text-gray-300 text-sm">
                        <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* <div className="mt-4">
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full text-xs hover:bg-blue-200 dark:hover:bg-blue-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* Bottom Row - 3 experiences */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bottomExperiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 2) * 0.2 }}
              className="bg-gray-50 dark:bg-white/10 backdrop-blur-sm rounded-lg p-6 relative hover:bg-gray-100 dark:hover:bg-white/15 transition-all h-full flex flex-col"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {experience.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                  {experience.company}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {experience.period}
                </p>
              </div>
              
              <div className="flex-grow">
                {/* <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                  {experience.description}
                </p> */}
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-2 text-gray-700 dark:text-gray-300 text-sm">
                        <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* <div className="mt-4">
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full text-xs hover:bg-blue-200 dark:hover:bg-blue-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 