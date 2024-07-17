/* eslint-disable @next/next/no-img-element */

import React from 'react'
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
import FormHeader from './FormHeader'
import CartButton from '../cart/Cart'

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
import SignOutButton from '../menus/SignOutButton'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'

export default async function Header() {
  const session = await getServerSession(nextAuthOptions)
  const email = session?.user?.email as string
  const username = session?.user?.name

  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/get-user-cart?email=${email}`,
    {
      next: {
        tags: ['user-cart'],
      },
    },
  )

  const data = await result.json()

  return (
    <header className="md:hidden w-screen h-14 flex items-center justify-between fixed left-0 top-0 z-30 bg-stone-950 bg-opacity-80 border-b border-stone-800 backdrop-blur-sm text-stone-300 px-6 pr-8">
      <div className="flex items-center justify-start lg:space-x-2 space-x-4 w-96">
        <Link href="/home">
          <img
            src="/logo.png"
            alt="My Favorite Games Logo"
            className="w-64 lg:hidden"
          />
        </Link>
        <Link
          href="/home"
          className="hover:bg-stone-300 hover:bg-opacity-10 p-2 rounded-md"
        >
          <HouseSimple
            weight="regular"
            className="lg:flex hidden text-xl transition-all"
          />
        </Link>
      </div>

      <FormHeader />

      <div className="flex items-center justify-end lg:space-x-2 w-96">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`${!session ? 'text-transparent' : 'hover:bg-stone-300 hover:bg-opacity-10 p-2 rounded-md hover:text-stone-300'} mr-1`}
              >
                <MyAccountHeaderButton
                  session={session}
                  username={username as string}
                />
              </NavigationMenuTrigger>
              {session && (
                <NavigationMenuContent className="w-44 shadow-md bg-stone-950 border border-stone-800 flex flex-col gap-1 rounded-md p-1 mr-20 text-xs font-semibold">
                  <Link
                    href={links.myAccount}
                    className="hover:bg-stone-300 hover:bg-opacity-10 p-2 rounded-md transition-all"
                  >
                    <NavigationMenuLink className="flex gap-2">
                      <User weight="regular" className="text-lg" />
                      <span>Resumo</span>
                    </NavigationMenuLink>
                  </Link>

                  <Link
                    href={links.myOrders}
                    className="hover:bg-stone-300 hover:bg-opacity-10 p-2 rounded-md transition-all"
                  >
                    <NavigationMenuLink className="flex gap-2">
                      <Bag weight="regular" className="text-lg" />
                      <span>Meus pedidos</span>
                    </NavigationMenuLink>
                  </Link>

                  <Link
                    href={links.myData}
                    className="hover:bg-stone-300 hover:bg-opacity-10 p-2 rounded-md transition-all"
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
                    className="hover:bg-stone-300 hover:bg-opacity-10 p-2 rounded-md transition-all"
                  >
                    <NavigationMenuLink className="flex gap-2">
                      <GameController weight="regular" className="text-lg" />
                      <span>Meus games</span>
                    </NavigationMenuLink>
                  </Link>

                  <Link
                    href={links.myFavorites}
                    className="hover:bg-stone-300 hover:bg-opacity-10 p-2 rounded-md transition-all"
                  >
                    <NavigationMenuLink className="flex gap-2">
                      <Heart weight="regular" className="text-lg" />
                      <span>Meus favoritos</span>
                    </NavigationMenuLink>
                  </Link>

                  <Link
                    href={links.myEvaluations}
                    className="hover:bg-stone-300 hover:bg-opacity-10 p-2 rounded-md transition-all"
                  >
                    <NavigationMenuLink className="flex gap-2">
                      <ThumbsUp weight="regular" className="text-lg" />
                      <span>Minhas avaliações</span>
                    </NavigationMenuLink>
                  </Link>

                  <NavigationMenuLink className="flex gap-2 hover:text-red-600 hover:bg-stone-300 hover:bg-opacity-10 p-2 rounded-md transition-all">
                    <SignOutButton />
                  </NavigationMenuLink>
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <CartButton userCart={data.cart} sessionEmail={email} />
      </div>
    </header>
  )
}
