import type { Metadata, Viewport } from 'next'
import { Dela_Gothic_One, Playfair_Display, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { CookieBanner } from '@/components/cookie-banner'

const delaGothicOne = Dela_Gothic_One({
  weight: '400',
  subsets: ['latin', 'cyrillic'],
  variable: '--font-dela',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
})

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
})

const SITE_URL = 'https://www.yukod95.com'
const SITE_TITLE = 'Yukon KOD 95 — Получи Код 95 для работы в Европе'
const SITE_DESCRIPTION =
  'Помогаем водителям легально работать в Европе. Обучение онлайн, всего 1 визит в Краков. Короткий и длинный курс Код 95, замена прав, чип-карта.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s — Yukon KOD 95',
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: 'Yukon KOD 95',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
  verification: {
    other: {
      "facebook-domain-verification": "waunt6mkeis2xdtmwmr64cf7s4ntad",
    },
  },
}

// Данные о компании для Google (карточка организации в поиске)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Yukon KOD 95',
  legalName: 'YUKON INTERNATIONAL GROUP Sp. z o.o.',
  url: SITE_URL,
  email: 'kod95@yukon.com.pl',
  telephone: '+48452650325',
  vatID: 'PL9452250355',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'al. 29 Listopada 130/421',
    postalCode: '31-406',
    addressLocality: 'Kraków',
    addressCountry: 'PL',
  },
  sameAs: ['https://www.instagram.com/yukon_kod_95/'],
}

export const viewport: Viewport = {
  themeColor: '#00416a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
  <html lang="ru">
    <body className={`${delaGothicOne.variable} ${playfairDisplay.variable} ${montserrat.variable} font-sans antialiased`}>
      
      {children}
      <CookieBanner />
      {/* Статистика посещений без cookie */}
      <Analytics />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </body>
  </html>
);
}
