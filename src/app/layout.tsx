import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth dark">
      <head>
        <meta name="theme-color" content="#111827" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Background container */}
        <div className="fixed inset-0">
          {/* Main background image */}
          <div 
            style={{ backgroundImage: 'url("/images/devops-bg.jpg")' }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500 transform scale-105 motion-safe:animate-subtle-zoom opacity-20"
          />

          {/* Dark theme overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-blue-900/30 to-gray-900/60 opacity-100 transition-all duration-500" />

          {/* Additional overlay effects */}
          <div className="absolute inset-0">
            {/* Animated gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-gradient-slow" />
            
            {/* Dot pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-[0.2]" />
          </div>

          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-float-delayed" />
          </div>
        </div>

        {/* Content */}
        <div className="relative min-h-screen w-full">
          <ClientLayout>
            {children}
          </ClientLayout>
        </div>

        {/* Tech stack floating badges */}
        <div className="fixed bottom-4 left-4 hidden lg:flex gap-4 animate-float-slow pointer-events-none">
          {/* Tech badges will be added here */}
        </div>
      </body>
    </html>
  )
}
