'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Initialize in dark mode
    document.documentElement.classList.add('dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark')
  }

  if (!mounted) return null

  return (
    <div className="fixed top-0 right-0 mt-4 mr-4 z-[9999]">
      <motion.button
        onClick={toggleTheme}
        className="relative p-3 rounded-full bg-white/10 dark:bg-gray-800/90 shadow-lg backdrop-blur-sm dark:backdrop-blur-md border border-gray-200/20 dark:border-gray-700/30 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        layout
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <motion.div
          initial={false}
          animate={{
            rotate: theme === 'dark' ? 0 : 180,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          {theme === 'dark' ? (
            <SunIcon className="w-5 h-5 text-yellow-400" />
          ) : (
            <MoonIcon className="w-5 h-5 text-gray-800" />
          )}
        </motion.div>
        
        {/* Enhanced glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          animate={{
            boxShadow: theme === 'dark'
              ? '0 0 0 2px rgba(250, 204, 21, 0.3), 0 0 20px 4px rgba(250, 204, 21, 0.3)'
              : '0 0 0 2px rgba(30, 41, 59, 0.2), 0 0 20px 2px rgba(30, 41, 59, 0.2)',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    </div>
  )
} 