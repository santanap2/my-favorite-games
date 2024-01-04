import {
  ArrowFatUp,
  Bag,
  GameController,
  Heart,
  IdentificationCard,
  SignOut,
  UserCircle,
} from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

export default function MyAccountPopUp() {
  const links = {
    myAccount: '/minha-conta',
    myData: '/minha-conta/meus-dados',
    myOrders: '/minha-conta/meus-pedidos',
    myGames: '/minha-conta/meus-games',
    myFavorites: '/minha-conta/meus-favoritos',
    help: '/minha-conta/ajuda',
    logout: '/logout',
  }

  return (
    <div className="w-fit bg-white pl-4 pr-2 pt-5 pb-3 rounded shadow-md absolute top-12 right-0 z-50 flex flex-col gap-4 items-end justify-center text-violet-600 appear-animation animation-opacity">
      <ArrowFatUp
        size={28}
        weight="fill"
        className="text-white absolute -top-2 right-0"
      />
      <Link
        href={links.myAccount}
        className="text-sm font-semibold hover:underline transition-all flex gap-2"
      >
        <span>Minha conta</span>
        <UserCircle weight="duotone" size={20} />
      </Link>

      <Link
        href={links.myOrders}
        className="text-sm font-semibold hover:underline transition-all flex gap-2"
      >
        <span>Meus pedidos</span>
        <Bag weight="duotone" size={20} />
      </Link>

      <Link
        href={links.myData}
        className="text-sm font-semibold hover:underline transition-all flex gap-2"
      >
        <span>Meus dados</span>
        <IdentificationCard weight="duotone" size={20} />
      </Link>

      <Link
        href={links.myGames}
        className="text-sm font-semibold hover:underline transition-all flex gap-2"
      >
        <span>Meus games</span>
        <GameController weight="duotone" size={20} />
      </Link>

      <Link
        href={links.myFavorites}
        className="text-sm font-semibold hover:underline transition-all flex gap-2"
      >
        <span>Meus favoritos</span>
        <Heart weight="duotone" size={20} />
      </Link>

      <Link
        href={links.logout}
        className="text-sm text-orange-600 font-semibold hover:underline transition-all mt-2 flex gap-2"
      >
        <span>Sair</span>
        <SignOut weight="duotone" size={20} />
      </Link>
    </div>
  )
}
