import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import DisclaimerModal from "@/components/disclaimer-modal"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Munish Mittal and Associates | Legal Services",
  description: "Expert legal representation with over 23 years of experience in civil litigation, property disputes, and contract law.",
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico", sizes: "32x32" },
      { url: "/favicon_io/android-chrome-192x192.png", sizes: "192x192" },
      { url: "/favicon_io/android-chrome-512x512.png", sizes: "512x512" },
    ],
    apple: { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180" },
  },
  openGraph: {
    title: "Munish Mittal and Associates | Legal Services",
    description: "Expert legal representation with over 23 years of experience",
    images: [{ url: "/law-office.jpg" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <DisclaimerModal />
      </body>
    </html>
  )
}
