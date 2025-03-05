import './globals.css'

import type { Metadata } from 'next'
import React from 'react'

import { inter } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'Portal de Serviços | Teresina',
  description: 'Prefeitura de Teresina',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
