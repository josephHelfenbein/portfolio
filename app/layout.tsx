import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
const baseUrl = 'https://www.josephhelfenbein.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Joseph Helfenbein Portfolio',
    template: '%s | Joseph Helfenbein Portfolio',
  },
  description: "I'm a student at The City College of New York studying Computer Science and Physics. I have experience in full-stack web application development, JavaScript, TypeScript, React, Next.js, Three.js, C++, C#, and Python from my projects. I'm constantly trying to learn new things and broaden my experience.",
  openGraph: {
    title: 'My Portfolio',
    description: "I'm a student at The City College of New York studying Computer Science and Physics. I have experience in full-stack web application development, JavaScript, TypeScript, React, Next.js, Three.js, C++, C#, and Python from my projects. I'm constantly trying to learn new things and broaden my experience.",
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased max-w-full mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
