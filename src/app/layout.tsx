import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";
import React from "react";

export const metadata: Metadata = {
  title: "Portal de Serviços",
  description: "Prefeitura de Teresina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
