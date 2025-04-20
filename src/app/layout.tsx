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
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
        <Providers>
          <ThemeToggle />
          <div className="relative min-h-screen">
            {/* Background gradient */}
            <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30" />
            
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
