'use client'

import React from 'react'
import {
  Bag,
  GameController,
  Heart,
  IdentificationCard,
  SignOut,
  ThumbsUp,
  User,
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { links } from '@/helpers/myAccount'
import { signOut } from 'next-auth/react'

export default function LateralMyAccount() {
  const pathname = usePathname()

  return (
    <div className="w-56 min-w-[224px] flex flex-col h-dvh justify-between md:hidden text-neutral-200">
      <div className="flex flex-col gap-1">
        <Link href={links.myAccount}>
          <div
            className={`flex gap-3 px-4 py-2 items-center w-full text-sm font-semibold hover:bg-neutral-200 hover:bg-opacity-10 transition-all rounded-md ${pathname === links.myAccount && 'bg-opacity-30 bg-neutral-200'}`}
          >
            <User weight="regular" className="text-xl" />
            <span>Resumo</span>
          </div>
        </Link>

        <Link href={links.myOrders}>
          <div
            className={`flex gap-3 px-4 py-2 items-center w-full text-sm font-semibold hover:bg-neutral-200 hover:bg-opacity-10 transition-all rounded-md ${pathname.includes(links.myOrders) && 'bg-opacity-30 bg-neutral-200'}`}
          >
            <Bag weight="regular" className="text-xl" />
            <span>Meus pedidos</span>
          </div>
        </Link>

        <Link href={links.myData}>
          <div
            className={`flex gap-3 px-4 py-2 items-center w-full text-sm font-semibold hover:bg-neutral-200 hover:bg-opacity-10 transition-all rounded-md ${pathname.includes(links.myData) && 'bg-opacity-30 bg-neutral-200'}`}
          >
            <IdentificationCard weight="regular" className="text-xl" />
            <span>Meus dados</span>
          </div>
        </Link>

        <Link href={links.myGames}>
          <div
            className={`flex gap-3 px-4 py-2 items-center w-full text-sm font-semibold hover:bg-neutral-200 hover:bg-opacity-10 transition-all rounded-md ${pathname.includes(links.myGames) && 'bg-opacity-30 bg-neutral-200'}`}
          >
            <GameController weight="regular" className="text-xl" />
            <span>Meus games</span>
          </div>
        </Link>

        <Link href={links.myFavorites}>
          <div
            className={`flex gap-3 px-4 py-2 items-center w-full text-sm font-semibold hover:bg-neutral-200 hover:bg-opacity-10 transition-all rounded-md ${pathname.includes(links.myFavorites) && 'bg-opacity-30 bg-neutral-200'}`}
          >
            <Heart weight="regular" className="text-xl" />
            <span>Meus favoritos</span>
          </div>
        </Link>

        <Link href={links.myEvaluations}>
          <div
            className={`flex gap-3 px-4 py-2 items-center w-full text-sm font-semibold hover:bg-neutral-200 hover:bg-opacity-10 transition-all rounded-md ${pathname.includes(links.myEvaluations) && 'bg-opacity-30 bg-neutral-200'}`}
          >
            <ThumbsUp weight="regular" className="text-xl" />
            <span>Minhas avaliações</span>
          </div>
        </Link>

        <button
          className="flex gap-3 px-4 py-2 items-center w-full text-sm font-semibold hover:bg-neutral-200 hover:bg-opacity-10 transition-all rounded-md"
          onClick={() => signOut({ redirect: true, callbackUrl: '/home' })}
        >
          <SignOut weight="regular" className="text-xl" />
          <span>Sair</span>
        </button>
      </div>
    </div>
  )
}
