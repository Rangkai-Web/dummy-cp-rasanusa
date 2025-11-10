/* eslint-disable @typescript-eslint/no-unused-vars */
import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RasaNusa - Menghadirkan Rasa Asli Nusantara ke Meja Anda",
  description:
    "RasaNusa adalah brand kuliner modern yang menghadirkan cita rasa autentik Nusantara melalui hidangan restoran, paket catering, dan bumbu siap masak.",
  keywords: "RasaNusa, restoran, bumbu masak, nusantara, makanan Indonesia",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
