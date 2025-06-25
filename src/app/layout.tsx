import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artistly - Performing Artist Booking Platform',
  description: 'Connect event planners with talented performing artists. Book singers, dancers, speakers, DJs and more for your events.',
  keywords: 'artist booking, event planning, performers, entertainment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 Artistly. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

