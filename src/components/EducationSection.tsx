'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AcademicCapIcon } from '@heroicons/react/24/outline'

const educationData = [
  {
    degree: "Master of Science in DevOps",
    school: "Tech University",
    period: "2020 - 2022",
    description: "Specialized in Cloud Infrastructure and CI/CD pipelines",
    achievements: [
      "Graduated with Distinction",
      "Led DevOps transformation projects",
      "Published research on containerization strategies"
    ]
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "Engineering College",
    period: "2016 - 2020",
    description: "Focus on software development and system architecture",
    achievements: [
      "First Class Honours",
      "Best Project Award",
      "Technical Lead for college projects"
    ]
  }
]

const certifications = [
  {
    name: "AWS Certified DevOps Engineer Professional",
    issuer: "Amazon Web Services",
    date: "2023"
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2022"
  },
  {
    name: "HashiCorp Certified Terraform Associate",
    issuer: "HashiCorp",
    date: "2022"
  }
]

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-gray-600 dark:text-gray-300">My academic journey and professional certifications</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <AcademicCapIcon className="w-6 h-6 text-primary-500" />
              Education
            </h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-gray-700/50 p-6 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-600"
                >
                  <h4 className="text-xl font-semibold mb-2 text-primary-600 dark:text-primary-400">{edu.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.school}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{edu.period}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{edu.description}</p>
                  <ul className="list-disc list-inside space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 text-sm">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-gray-700/50 p-5 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-600 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h4 className="text-lg font-semibold mb-2 text-primary-600 dark:text-primary-400">{cert.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{cert.date}</p>
                  <motion.div
                    className="absolute right-4 top-4 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.2 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 