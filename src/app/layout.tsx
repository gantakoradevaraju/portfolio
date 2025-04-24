import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import ThemeToggle from '@/components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Deva Raju Gantakora - DevOps Engineer & Cloud Infrastructure Architect',
  description: 'Portfolio of Deva Raju Gantakora, a DevOps Engineer & Cloud Infrastructure Architect specializing in cloud solutions, automation, and infrastructure optimization.',
  icons: {
    apple: [
      { url: '/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/manifest.json' },
      { rel: 'msapplication-TileColor', url: '#ffffff' },
      { rel: 'msapplication-TileImage', url: '/ms-icon-144x144.png' },
      { rel: 'theme-color', url: '#ffffff' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <ThemeToggle />
          <div className="relative min-h-screen">
            {/* Light theme background */}
            <div className="fixed inset-0 bg-gradient-to-br from-white/90 to-blue-50/90 transition-opacity duration-300 ease-in-out dark:opacity-0">
              <div className="absolute inset-0 bg-[url('/images/devops-bg.jpg')] bg-cover bg-center bg-fixed opacity-20" />
            </div>
            
            {/* Dark theme background */}
            <div className="fixed inset-0 bg-gradient-to-br from-gray-950 to-blue-950 opacity-0 transition-opacity duration-300 ease-in-out dark:opacity-100">
              <div className="absolute inset-0 bg-[url('/images/devops-bg.jpg')] bg-cover bg-center bg-fixed opacity-30 mix-blend-overlay" />
            </div>
            
            {/* Content wrapper */}
            <div className="relative z-10">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
