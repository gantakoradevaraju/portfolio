'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { toolsContent } from '@/config/content'

export default function ToolsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredTools = toolsContent.tools.filter(tool => 
    selectedCategory === 'All' || tool.category === selectedCategory
  )

  return (
    <section id="tools" className="py-20 bg-gray-50 dark:bg-[#020617] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Tools & Technologies
        </h2>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {toolsContent.categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-white dark:bg-[#1e1e3f] text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2a2a4f] border border-gray-200 dark:border-transparent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="wait">
            {filteredTools.map((tool) => (
              <motion.div
                key={tool.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-[#1e1e3f] rounded-lg p-4 flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-[#2a2a4f] transition-all duration-300 border border-gray-200 dark:border-transparent"
              >
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={40}
                    height={40}
                    style={{ width: 'auto', height: 'auto' }}
                    className="object-contain"
                    priority
                    unoptimized
                  />
                </div>
                <span className="text-gray-900 dark:text-white font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
} 