import { links } from '@/helpers/myAccount'
import {
  ArrowFatUp,
  Bag,
  GameController,
  Heart,
  IdentificationCard,
  SignOut,
  ThumbsUp,
  UserCircle,
} from '@phosphor-icons/react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function MyAccountPopUp() {
  return (
    <div className="w-fit bg-neutral-800 pl-4 pr-2 pt-5 pb-3 rounded shadow-md absolute top-12 right-0 z-50 flex flex-col gap-4 items-end justify-center text-neutral-100 appear-animation animation-opacity transition-all">
      <ArrowFatUp
        weight="fill"
        className="text-neutral-800 absolute -top-2 right-0 text-3xl"
      />
      <Link
        href={links.myAccount}
        className="text-sm font-semibold hover:underline transition-all flex gap-2"
      >
        <span>Minha conta</span>
        <UserCircle weight="duotone" className="text-xl text-indigo-500" />
      </Link>

      <Link
        href={links.myOrders}
        className="text-sm font-semibold hover:underline transition-all flex gap-2"
      >
        <span>Meus pedidos</span>
        <Bag weight="duotone" className="text-xl text-indigo-500" />
      </Link>

      <Link
        href={links.myData}
        className="text-sm font-semibold hover:underline transition-all flex gap-2"
      >
        <span>Meus dados</span>
        <IdentificationCard
          weight="duotone"
          className="text-xl text-indigo-500"
        />
      </Link>

      <Link
        href={links.myGames}
        className="text-sm font-semibold hover:underline transition-all flex gap-2"
      >
        <span>Meus games</span>
        <GameController weight="duotone" className="text-xl text-indigo-500" />
      </Link>

      <Link
        href={links.myFavorites}
        className="text-sm font-semibold hover:underline transition-all flex gap-2"
      >
        <span>Meus favoritos</span>
        <Heart weight="duotone" className="text-xl text-indigo-500" />
      </Link>

      <Link
        href={links.myEvaluations}
        className="text-sm font-semibold hover:underline transition-all flex gap-2"
      >
        <span>Minhas avaliações</span>
        <ThumbsUp weight="duotone" className="text-xl text-indigo-500" />
      </Link>

      <button
        className="text-sm text-orange-600 font-semibold hover:underline transition-all mt-2 flex gap-2"
        onClick={() => signOut({ redirect: true, callbackUrl: '/home' })}
      >
        <span>Sair</span>
        <SignOut weight="duotone" className="text-xl" />
      </button>
    </div>
  )
}
