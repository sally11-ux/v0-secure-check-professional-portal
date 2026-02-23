import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'SecureCheck | Centro de Formacion en Seguridad Privada',
  description: 'Centro homologado por el Ministerio del Interior. Formacion especializada en seguridad privada, vigilancia y proteccion. Mas de 15 anos formando a los mejores profesionales del sector.',
  keywords: ['seguridad privada', 'vigilante de seguridad', 'formacion', 'curso vigilante', 'escolta privado', 'linares'],
}

export const viewport: Viewport = {
  themeColor: '#0a0e1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
