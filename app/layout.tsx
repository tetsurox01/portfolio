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
    { media: '(prefers-color-scheme: light)', color: '#F8F9FC' },
    { media: '(prefers-color-scheme: dark)', color: '#0F1E3C' },
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
  title: 'Automate With Rox | Custom Automation Systems for Service Businesses',
  description:
    'Roxli Cahayag builds custom automation systems for service-based businesses using Zapier, Make, n8n, and AI. Eliminate manual work, reduce errors by up to 60%, and scale without hiring — starting with a free 30-minute discovery call.',
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
    title: 'Automate With Rox | Custom Automation Systems for Service Businesses',
    description:
      'Custom workflow systems for service-based businesses — built on Zapier, Make, n8n, and AI. Up to 60% less manual work, fully documented, free discovery call.',
    siteName: 'Automate With Rox',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automate With Rox | Custom Automation Systems for Service Businesses',
    description:
      'Custom workflow systems that eliminate manual work by up to 60%. Built on Zapier, Make, n8n, and AI. Book a free discovery call.',
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
