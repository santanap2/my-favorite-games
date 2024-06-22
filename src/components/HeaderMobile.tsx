import { HouseSimple, User } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React from 'react'
import CartButtonHeader from './ui/BagButtonHeader'
import ClickMenuHeaderButton from './ui/ClickMenuHeaderButton'
import { getUserCart } from '@/services'
import { getServerSession } from 'next-auth'
import FormHeaderMobile from './FormHeaderMobile'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'

export default async function HeaderMobile() {
  const session = await getServerSession(nextAuthOptions)
  const email = session?.user?.email as string

  const {
    data: { message, cart },
  } = await getUserCart(email)

  return (
    <header className="hidden w-screen h-14 sm:flex items-center justify-between fixed left-0 top-0 z-30 bg-neutral-950 bg-opacity-80 border-b border-neutral-800 backdrop-blur-sm text-white px-2">
      <div className="w-fit h-full flex items-center justify-center space-x-1">
        <ClickMenuHeaderButton />
        <Link href="/home">
          <HouseSimple
            weight="regular"
            className="text-2xl hover:text-indigo-600"
          />
        </Link>
      </div>

      <FormHeaderMobile />

      <div className="w-fit h-full flex items-center justify-center space-x-1">
        <Link
          href="/api/auth/signin"
          className="h-full w-full flex items-center justify-center"
        >
          <User className="sm:text-2xl text-3xl" weight="regular" />
        </Link>

        <CartButtonHeader
          cartLength={
            !session || message === 'Carrinho não encontrado'
              ? 0
              : cart.products.length
          }
        />
      </div>
    </header>
  )
}
