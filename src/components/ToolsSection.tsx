'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

const tools = [
  {
    category: 'Cloud Platforms',
    items: ['AWS', 'Azure', 'Google Cloud Platform', 'DigitalOcean']
  },
  {
    category: 'Container Orchestration',
    items: ['Kubernetes', 'Docker', 'Docker Compose', 'OpenShift']
  },
  {
    category: 'CI/CD',
    items: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'CircleCI']
  },
  {
    category: 'Infrastructure as Code',
    items: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi']
  },
  {
    category: 'Monitoring & Logging',
    items: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog']
  },
  {
    category: 'Version Control & Collaboration',
    items: ['Git', 'GitHub', 'GitLab', 'Bitbucket']
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function ToolsSection() {
  return (
    <section id="tools" className="relative w-full py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900" />
      <div className="absolute inset-0 grid-background opacity-30" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{
              x: [Math.random() * 500 - 250, Math.random() * 500 - 250],
              y: [Math.random() * 500 - 250, Math.random() * 500 - 250],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            className="text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-600"
          >
            Tools & Technologies
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {tools.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-3"
                  >
                    <WrenchScrewdriverIcon className="w-5 h-5 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((tool, toolIndex) => (
                    <motion.span
                      key={toolIndex}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: toolIndex * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 