'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CommandLineIcon, CloudIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const contactInfo = {
  name: process.env.NEXT_PUBLIC_NAME || "DEVA RAJU GANTAKORA",
  phone: process.env.NEXT_PUBLIC_PHONE || "+1 330-459-2734",
  email: process.env.NEXT_PUBLIC_EMAIL || "gantakoradevaraju@gmail.com",
  title: "DevOps Engineer & Cloud Infrastructure Architect",
  summary: "Architecting scalable cloud solutions with a focus on automation, security, and operational excellence"
}

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
      {/* Animated background with gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black" />
      
      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-20"
        style={{
          backgroundSize: '30px 30px',
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`
        }}
      />

      {/* Floating elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-500 rounded-full"
            animate={{
              y: [-20, -120],
              x: Math.random() * 10 - 5,
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
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
                repeatType: "reverse"
              }
            }}
            style={{
              left: `${25 + index * 25}%`,
              top: `${30 + (index % 2) * 40}%`,
            }}
          >
            <Icon className="w-16 h-16 text-primary-500/30" />
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
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 text-white"
              whileHover={{ scale: 1.05 }}
            >
              {contactInfo.name}
            </motion.h1>
            
            <motion.h2
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {contactInfo.title}
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {contactInfo.summary}
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg text-muted"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href={`tel:${contactInfo.phone.replace(/[^\d+]/g, '')}`}
                className="flex items-center gap-2 hover:text-primary-500 transition-colors"
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
                className="flex items-center gap-2 hover:text-primary-500 transition-colors"
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
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold shadow-lg hover:bg-primary-600 transition-colors"
              >
                View Experience
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-primary-500 text-primary-500 rounded-lg font-semibold hover:bg-primary-500/10 transition-colors"
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Animated tech stack */}
            <motion.div 
              className="mt-16 flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium text-gray-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full p-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-1 h-2 bg-primary-500 rounded-full mx-auto"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
} 