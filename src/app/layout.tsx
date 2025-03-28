import './globals.css'

import type { Metadata } from 'next'
import React from 'react'

import { Header } from '@/components/header'
import { inter } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'Portal de Serviços | Teresina',
  description: 'Prefeitura de Teresina',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
