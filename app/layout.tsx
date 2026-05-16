import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Nide - The Best Way to Learn German for Free',
  description:
    'Learn German systematically from basics to A1 level for free with Nide. Supports multiple languages including English, Myanmar, and Japanese.',
  keywords: [
    'Nide',
    'Learn German',
    'German A1 Free',
    'German Language App',
    'Language Learning Platform',
    'Study German Online',
  ],
  icons: {
    icon: '/fav.png',
    apple: '/fav.png',
  },
  verification: {
    google: 'iLqVOi2AJZ8t43Z8aGqflsDDZZkQaY5VdZRkywZd1bQ',
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
