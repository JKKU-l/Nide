// metadata typing removed for compatibility with this Next version
// font import removed for compatibility with this Next version
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

// font constants removed

export const metadata = {
  title: 'Nide - The Best Way to Learn German for Free',
  description:
    'Learn German systematically from basics to A1 level for free with Nide. Supports multiple languages including English, Myanmar, and Japanese.',
  keywords: 'Nide, Learn German, German A1 Free, German Language App, Language Learning Platform, Study German Online',
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
