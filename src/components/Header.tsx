/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { getUserCart } from '@/services'
import { getServerSession } from 'next-auth'
import { HouseSimple } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import ClickMenuHeaderButton from './ui/ClickMenuHeaderButton'
import FormHeader from './FormHeader'
import CartButtonHeader from './ui/BagButtonHeader'
import MyAccountHeaderButton from './MyAccountHeaderButton'

export default async function Header() {
  const session = await getServerSession()
  const email = session?.user?.email as string
  const username = session?.user?.name

  let cart

  if (session) {
    const { data } = await getUserCart(email)
    cart = data.cart
  }

  return (
    <header className="sm:hidden w-screen h-14 flex items-center justify-between fixed left-0 top-0 z-30 bg-neutral-950 bg-opacity-80 border-b border-neutral-800 backdrop-blur-sm text-neutral-300 px-6 pr-8">
      <div className="flex items-center justify-start lg:space-x-2 space-x-4 w-96">
        <ClickMenuHeaderButton />
        <Link href="/home">
          <img
            src="/logo.png"
            alt="My Favorite Games Logo"
            className="w-64 lg:hidden"
          />
        </Link>
        <Link href="/home">
          <HouseSimple weight="regular" className="lg:flex hidden text-3xl" />
        </Link>
      </div>

      <FormHeader />

      <div className="flex items-center justify-end lg:space-x-2 space-x-4 w-96">
        <MyAccountHeaderButton
          session={session}
          username={username as string}
        />

        <CartButtonHeader cartLength={session ? cart.products.length : 0} />
      </div>
    </header>
  )
}
