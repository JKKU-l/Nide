import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Nide - Language Learning Dashboard',
  description: 'Modern Language Learning Platform with Glassmorphism Design',
  generator: 'v0.app',
  icons: {
    icon: '/fav.png',
    apple: '/fav.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-gradient-to-br from-blue-300/40 via-white to-orange-300/40 min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
