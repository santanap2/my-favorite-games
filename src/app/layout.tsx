import React, { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/general/Footer'
import { ContextGamesPlatform } from '@/context/Provider'
import QueryProvider from '@/context/QueryProvider'
import NextAuthSessionProvider from '@/context/SessionProvider'
import HeaderMobile from '@/components/header/HeaderMobile'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'My favorite games',
  description: 'Buy your favorite games here!',
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <ContextGamesPlatform>
        <NextAuthSessionProvider>
          <body
            className={`${inter.className} bg-neutral-900 overflow-x-hidden background`}
          >
            <div className="flex w-full items-center justify-start flex-col">
              <div className="flex flex-col min-h-screen justify-between items-center w-full">
                <div className="flex w-4/5 flex-col items-center justify-between xxl:w-[95%]">
                  <QueryProvider>
                    <Header />
                    <HeaderMobile />
                    <Toaster />
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
