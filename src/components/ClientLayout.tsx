'use client'

import React from 'react'
import ThemeToggle from '@/components/ThemeToggle'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <ThemeToggle />
      {children}
    </div>
  )
} 