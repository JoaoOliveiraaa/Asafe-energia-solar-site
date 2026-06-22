import type { Metadata } from 'next'
import { Cinzel, Montserrat } from 'next/font/google'

import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '500', '600', '700'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'ASAFE Energia Solar | Energia Limpa e Sustentavel',
  description:
    'A ASAFE Energia Solar oferece solucoes completas em energia solar fotovoltaica para residencias, empresas e industrias. Economize na conta de luz com energia limpa.',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={`${cinzel.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
