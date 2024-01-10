import type { Metadata } from 'next'
import './globals.css'
import { relative } from 'path'
import { Footer, Navbar } from '@/components'


export const metadata: Metadata = {
  title: 'DBM motos',
  description: 'Conquista el camino con estilo y potencia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="relative">
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  )
}
