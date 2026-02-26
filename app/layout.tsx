import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5faf6' },
    { media: '(prefers-color-scheme: dark)', color: '#1a2a1f' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.automatewithrox.com'),
  verification: {
    google: 'XU-L5tqEgFEqixEs30dqf9Cc1xzITtTBkaAGpqLO3T8',
  },
  title: 'Roxli Cahayag | Automation Specialist & AI Workflow Architect',
  description:
    'Results-driven Automation Specialist and AI Workflow Architect. Expert in Zapier, Make, n8n, and GoHighLevel automation systems. Helping businesses reduce manual work by up to 60% through custom AI-powered workflow solutions.',
  keywords: [
    'Automation Specialist',
    'AI Workflow Architect',
    'Zapier Expert',
    'Make Integromat',
    'n8n',
    'GoHighLevel',
    'CRM Automation',
    'Business Process Optimization',
    'AI Integrations',
    'Workflow Automation',
    'Lead Generation Automation',
    'Roxli Cahayag',
  ],
  authors: [{ name: 'Roxli Cahayag' }],
  creator: 'Roxli Cahayag',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Roxli Cahayag | Automation Specialist & AI Workflow Architect',
    description:
      'Helping businesses reduce manual work by up to 60% through AI-powered automation solutions. Expert in Zapier, Make, n8n, and GoHighLevel.',
    siteName: 'Roxli Cahayag Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roxli Cahayag | Automation Specialist & AI Workflow Architect',
    description:
      'Helping businesses reduce manual work by up to 60% through AI-powered automation solutions.',
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
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
