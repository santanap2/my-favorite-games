import React, { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ContextGamesPlatform } from '@/context/Provider'
import ShoppingCart from '@/components/ShoppingCart'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My favorite games',
  description: 'Buy your favorite games here!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <React.StrictMode>
      <ContextGamesPlatform>
        <html lang="en">
          <body className={`${inter.className} bg-zinc-50 overflow-x-hidden`}>
            <div className="flex w-full items-center justify-start flex-col">
              <Header />
              <ShoppingCart />
              <div className="flex flex-col min-h-screen justify-between items-center w-full">
                <div className="flex w-3/4 flex-col items-center justify-between pl-12">
                  {children}
                </div>
                <Footer />
              </div>
            </div>
          </body>
        </html>
      </ContextGamesPlatform>
    </React.StrictMode>
  )
}
