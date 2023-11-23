import React, { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ContextCoursesPlatform } from '@/context/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Courses Platform',
  description: 'Buy your favorite courses here!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <React.StrictMode>
      <ContextCoursesPlatform>
        <html lang="en">
          <body className={`${inter.className} bg-zinc-50 min-h-screen`}>
            <div className="flex w-full min-h-screen items-center justify-between flex-col">
              <Header />
              <div className="flex w-4/5 min-h-screen flex-col justify-between items-center">
                {children}
                <Footer />
              </div>
            </div>
          </body>
        </html>
      </ContextCoursesPlatform>
    </React.StrictMode>
  )
}
