import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Courses Platform',
  description: 'Buy your favorite courses here!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-50`}>
        <div className="flex w-full items-center justify-center">
          <div className="flex w-4/5 flex-col items-center justify-center">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
