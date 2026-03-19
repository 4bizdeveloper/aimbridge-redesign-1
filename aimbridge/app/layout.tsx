import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Aimbridge Education – MBBS Abroad | Nursing | Pilot Training',
  description: 'Professional overseas education consultancy in Kerala. Study MBBS in Georgia, Russia, Uzbekistan. Nursing in Georgia. Pilot Training in South Africa & USA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}