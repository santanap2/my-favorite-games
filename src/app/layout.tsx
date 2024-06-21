import React, { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ContextGamesPlatform } from '@/context/Provider'
import ShoppingCart from '@/components/ShoppingCart'
import QueryProvider from '@/context/QueryProvider'
import NextAuthSessionProvider from '@/providers/SessionProvider'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'My favorite games',
  description: 'Buy your favorite games here!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <ContextGamesPlatform>
        <NextAuthSessionProvider>
          <body
            className={`${inter.className} bg-neutral-900 overflow-x-hidden background`}
          >
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
        </NextAuthSessionProvider>
      </ContextGamesPlatform>
    </html>
  )
}
