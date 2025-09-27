import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://snack-rouge-cyan.vercel.app'),
  title: 'スナック Rouge | ちょっと一杯　気軽に寄れるRouge',
  description: 'お一人様も大歓迎　初めてでも、いつものようにくつろげます',
  applicationName: 'snack-rouge',
  themeColor: '#b1124f',
  formatDetection: { telephone: true },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    url: 'https://snack-rouge-cyan.vercel.app',
    siteName: 'スナック Rouge',
    title: 'スナック Rouge',
    description: 'ちょっと一杯　気軽に寄れるRouge',
    images: [{ url: '/og.svg', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'スナック Rouge',
    description: 'ちょっと一杯　気軽に寄れるRouge',
    images: ['/og.svg']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BarOrPub',
    name: 'スナック Rouge',
    telephone: '0596-22-7233',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'JP',
      addressRegion: '三重県',
      addressLocality: '伊勢市',
      streetAddress: '一之木丁目10-8 三交ビルパートⅡ'
    },
    url: 'https://snack-rouge-cyan.vercel.app',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday'], opens: '18:00', closes: '24:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday','Saturday'], opens: '18:00', closes: '24:00' }
    ],
    servesCuisine: 'Drinks',
    paymentAccepted: 'Cash, Credit Card',
    priceRange: '¥¥',
    sameAs: [
      'https://line.me/',
      'https://www.instagram.com/'
    ]
  }

  return (
    <html lang="ja">
      <body>
        {children}
        <Script id="ld-json" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  )
}
