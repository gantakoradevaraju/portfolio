'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBracketIcon, GlobeAltIcon, CommandLineIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'Personal Portfolio',
    description: "A sleek, responsive developer portfolio built with Next.js, Tailwind CSS, and TypeScript, featuring dark mode, animations, and interactive components.",
    icon: <GlobeAltIcon className="w-6 h-6" />,
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    // link: '#',
    // github: 'https://github.com/yourusername/portfolio'
  },
  {
    title: 'Multi-Cloud Terraform',
    description: 'Built a reusable Terraform module library for scalable Azure and AWS infrastructure provisioning using infrastructure as code best practices.',
    icon: <CodeBracketIcon className="w-6 h-6" />,
    tags: ['Terraform', 'Azure', 'AWS', 'Infrastructure as Code'],
    // link: '#',
    // github: 'https://github.com/yourusername/terraform-modules'
  },
  {
    title: 'Unified Monitoring',
    description: 'Built a unified observability platform using Prometheus, Grafana, and ELK Stack to monitor and analyze logs and metrics across multi-cloud Kubernetes environments.',
    icon: <CommandLineIcon className="w-6 h-6" />,
    tags: ["Prometheus", "Grafana", "ELK Stack", "Kubernetes"],
    // link: '#',
    // github: 'https://github.com/yourusername/cli-tool'
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 opacity-50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-600">
            Featured Projects
          </h2>
          {/* <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for web development.
          </p> */}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-xl transform transition-transform group-hover:scale-105" />
                <div className="relative bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200/20 dark:border-gray-700/30">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-primary-500/10 dark:bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 text-primary-500 group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                      {project.title}
                    </h3>
                    {/* <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3"> */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* <div className="flex items-center gap-4">
                      <a
                        href={project.link}
                        className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                      >
                        Live Demo
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                      <a
                        href={project.github}
                        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium"
                      >
                        GitHub
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                        </svg>
                      </a>
                    </div> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 