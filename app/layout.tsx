import type { Metadata, Viewport } from 'next'
import { Dela_Gothic_One, Playfair_Display, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Script from 'next/script'

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

export const metadata: Metadata = {
  title: 'Yukon KOD 95 — Получи Код 95 для работы в Европе',
  description:
    'Помогаем водителям легально работать в Европе. Обучение онлайн, всего 1 визит в Краков. Короткий и длинный курс Код 95, замена прав, чип-карта.',
  verification: {
    other: {
      "facebook-domain-verification": "waunt6mkeis2xdtmwmr64cf7s4ntad",
    },
  },
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
      
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
          (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
          
          // Вот эта команда ЖЕСТКО убивает SubscribedButtonClick и прочий мусор
          fbq('set', 'autoConfig', false, '1292910256020888'); 
          
          fbq('init', '1292910256020888'); 
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Вставляем noscript сразу после Script или в начало body */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }} 
          src="https://www.facebook.com/tr?id=1292910256020888&ev=PageView&noscript=1" 
        />
      </noscript>

      {children}
    </body>
  </html>
);
}
