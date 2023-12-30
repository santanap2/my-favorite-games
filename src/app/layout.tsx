import React, { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ContextGamesPlatform } from '@/context/Provider'
import ShoppingCart from '@/components/ShoppingCart'
import QueryProvider from '@/context/QueryProvider'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My favorite games',
  description: 'Buy your favorite games here!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ContextGamesPlatform>
      <html lang="en">
        <body className={`${quicksand.className} bg-zinc-50 overflow-x-hidden`}>
          <div className="flex w-full items-center justify-start flex-col">
            <div className="flex flex-col min-h-screen justify-between items-center w-full">
              <div className="flex w-3/4 flex-col items-center justify-between xxl:w-[95%]">
                <QueryProvider>
                  <Header />
                  <ShoppingCart />
                  {children}
                </QueryProvider>
              </div>
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </ContextGamesPlatform>
  )
}
