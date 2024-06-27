import { HouseSimple, User } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React from 'react'
import CartButton from '../cart/Cart'
import MenuHeaderButton from './MenuHeaderButton'
import { getServerSession } from 'next-auth'
import FormHeaderMobile from './FormHeaderMobile'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'

export default async function HeaderMobile() {
  const session = await getServerSession(nextAuthOptions)
  const email = session?.user?.email as string

  const result = await fetch(
    `http://localhost:3003/get-user-cart?email=${email}`,
    {
      next: {
        tags: ['user-cart'],
      },
    },
  )

  const data = await result.json()

  return (
    <header className="hidden w-screen h-14 md:flex items-center justify-between fixed left-0 top-0 z-30 bg-neutral-950 bg-opacity-80 border-b border-neutral-800 backdrop-blur-sm text-white px-2">
      <div className="w-fit h-full flex items-center justify-center space-x-1">
        <MenuHeaderButton />
        <Link href="/home">
          <HouseSimple weight="regular" className="text-2xl" />
        </Link>
      </div>

      <FormHeaderMobile />

      <div className="w-fit h-full flex items-center justify-center space-x-1">
        <Link
          href="/api/auth/signin"
          className="h-full w-full flex items-center justify-center"
        >
          <User className="text-2xl" weight="regular" />
        </Link>

        <CartButton userCart={data.cart} sessionEmail={email} />
      </div>
    </header>
  )
}
