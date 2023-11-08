import './globals.css'
import { Roboto } from 'next/font/google'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'


export const metadata = {
  title: 'Domakedev',
  description: 'Portafolio de César Guevara Cabrera',
}

const roboto = Roboto({
  weight: ['300','400', '700'],
  subsets: [ 'latin' ],
  display: 'swap',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
