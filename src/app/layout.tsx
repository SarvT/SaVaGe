import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../app/components/theme-provider"
import Header from "../app/components/header"
import Footer from "../app/components/footer"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SVG Wizard - Interactive SVG Editor",
  description: "Create, edit, and animate SVGs with ease using our interactive editor.",
  icons:{
    icon:[
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/icon.svg',
        href: '/images/icon.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/icon.svg',
        href: '/images/icon.svg',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

