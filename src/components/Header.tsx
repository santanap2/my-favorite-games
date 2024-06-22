/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { getUserCart } from '@/services'
import { getServerSession } from 'next-auth'
import {
  Bag,
  GameController,
  Heart,
  HouseSimple,
  IdentificationCard,
  ThumbsUp,
  User,
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import ClickMenuHeaderButton from './ui/ClickMenuHeaderButton'
import FormHeader from './FormHeader'
import CartButtonHeader from './ui/BagButtonHeader'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { links } from '@/helpers/myAccount'
import MyAccountHeaderButton from './MyAccountHeaderButton'
import SignOutButton from './SignOutButton'

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
          <HouseSimple weight="regular" className="lg:flex hidden text-xl" />
        </Link>
      </div>

      <FormHeader />

      <div className="flex items-center justify-end lg:space-x-2 space-x-4 w-96">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`${!session ? 'text-transparent' : 'hover:text-indigo-600'}`}
              >
                <MyAccountHeaderButton
                  session={session}
                  username={username as string}
                />
              </NavigationMenuTrigger>
              {session && (
                <NavigationMenuContent className="min-w-fit bg-neutral-950 bg-opacity-80 flex flex-col gap-3 rounded-md p-4 mr-20 text-xs font-semibold">
                  <Link
                    href={links.myAccount}
                    className="hover:text-indigo-600 transition-all"
                  >
                    <NavigationMenuLink className="flex gap-2">
                      <User weight="regular" className="text-lg" />
                      <span>Minha conta</span>
                    </NavigationMenuLink>
                  </Link>

                  <Link
                    href={links.myOrders}
                    className="hover:text-indigo-600 transition-all"
                  >
                    <NavigationMenuLink className="flex gap-2">
                      <Bag weight="regular" className="text-lg" />
                      <span>Meus pedidos</span>
                    </NavigationMenuLink>
                  </Link>

                  <Link
                    href={links.myData}
                    className="hover:text-indigo-600 transition-all"
                  >
                    <NavigationMenuLink className="flex gap-2">
                      <IdentificationCard
                        weight="regular"
                        className="text-lg"
                      />
                      <span>Meus dados</span>
                    </NavigationMenuLink>
                  </Link>

                  <Link
                    href={links.myGames}
                    className="hover:text-indigo-600 transition-all"
                  >
                    <NavigationMenuLink className="flex gap-2">
                      <GameController weight="regular" className="text-lg" />
                      <span>Meus games</span>
                    </NavigationMenuLink>
                  </Link>

                  <Link
                    href={links.myFavorites}
                    className="hover:text-indigo-600 transition-all"
                  >
                    <NavigationMenuLink className="flex gap-2">
                      <Heart weight="regular" className="text-lg" />
                      <span>Meus favoritos</span>
                    </NavigationMenuLink>
                  </Link>

                  <Link
                    href={links.myEvaluations}
                    className="hover:text-indigo-600 transition-all"
                  >
                    <NavigationMenuLink className="flex gap-2">
                      <ThumbsUp weight="regular" className="text-lg" />
                      <span>Minhas avaliações</span>
                    </NavigationMenuLink>
                  </Link>

                  <NavigationMenuLink className="flex gap-2 hover:text-orange-600 transition-all">
                    <SignOutButton />
                  </NavigationMenuLink>
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <CartButtonHeader cartLength={session ? cart.products.length : 0} />
      </div>
    </header>
  )
}
