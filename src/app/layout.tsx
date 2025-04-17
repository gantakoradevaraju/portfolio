import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import ThemeToggle from '@/components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Deva Raju Gantakora - DevOps Engineer & Cloud Infrastructure Architect',
  description: 'Portfolio of Deva Raju Gantakora, a DevOps Engineer & Cloud Infrastructure Architect specializing in cloud solutions, automation, and infrastructure optimization.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
        <Providers>
          <ThemeToggle />
          <div className="relative min-h-screen">
            {/* Background gradient */}
            <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30" />
            
            {/* Content wrapper */}
            <div className="relative z-10">
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
                {children}
              </div>

              {/* Tech stack floating badges */}
              <div className="fixed bottom-4 left-4 hidden lg:flex gap-4 animate-float-slow pointer-events-none">
                {/* Tech badges will be added here */}
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
