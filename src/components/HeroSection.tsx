'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CommandLineIcon, CloudIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import { contactInfo } from '@/config/content'

export default function HeroSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // or a loading skeleton
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-20 transition-opacity duration-500"
        style={{
          backgroundSize: '30px 30px',
          backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`
        }}
      />

      {/* Floating elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/30 dark:bg-blue-400/40 rounded-full"
            animate={{
              y: [-20, -120],
              x: Math.random() * 10 - 5,
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
            }}
          />
        ))}
      </div>

      {/* 3D rotating icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[CommandLineIcon, CloudIcon, CodeBracketIcon].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
            style={{
              left: `${25 + index * 25}%`,
              top: `${30 + (index % 2) * 40}%`,
            }}
          >
            <Icon className="w-16 h-16 text-blue-500/20 dark:text-blue-400/30 transition-colors duration-500" />
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          style={{ y, opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4 transition-colors duration-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {contactInfo.title}
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors duration-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {contactInfo.summary}
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg text-gray-700 dark:text-gray-300 transition-colors duration-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href={`tel:${contactInfo.phone.replace(/[^\d+]/g, '')}`}
                className="flex items-center gap-2 hover:text-blue-500 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {contactInfo.phone}
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 hover:text-blue-500 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {contactInfo.email}
              </a>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-16 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: '#2563eb',
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:shadow-blue-500/25"
              >
                View Experience
              </motion.button>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(59, 130, 246, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:shadow-blue-500/25"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 