import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mohtashim Maaz Syed | Portfolio',
  description: 'Portfolio of Mohtashim Maaz Syed - Software Developer & Machine Learning Engineer | AI-powered applications, deep learning models, and scalable full-stack systems',
  keywords: 'portfolio, machine learning, deep learning, semantic segmentation, U-Net, AI, computer vision, NLP, full stack developer, Texas A&M',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

