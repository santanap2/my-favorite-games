'use client'

import React, { useContext } from 'react'
import MenuItem from './MenuItem'
import {
  Bag,
  Books,
  Chat,
  Heart,
  IdentificationCard,
  SignOut,
  ThumbsUp,
  UserCircle,
} from '@phosphor-icons/react'
import GamesPlatformContext from '@/context/Context'

export default function LateralMyAccount() {
  const { showMenu } = useContext(GamesPlatformContext)
  return (
    <>
      {showMenu.myAccount && (
        <div className="w-56 fixed left-0 top-0 bottom-0 flex flex-col pt-20 pl-6 h-full justify-between bg-zinc-100 shadow-md slideshow-left">
          <div className="flex flex-col">
            <MenuItem
              Icon={UserCircle}
              name="Minha conta"
              size={34}
              link="/minha-conta"
              especialClass="hover:text-sky-400"
              iconClass="text-sky-600"
            />
            <MenuItem
              Icon={IdentificationCard}
              name="Meus dados"
              size={34}
              link="/minha-conta/meus-dados"
              especialClass="hover:text-sky-400"
              iconClass="text-sky-600"
            />
            <MenuItem
              Icon={Bag}
              name="Meus pedidos"
              size={34}
              link="/minha-conta/meus-pedidos"
              especialClass="hover:text-sky-400"
              iconClass="text-sky-600"
            />
            <MenuItem
              Icon={Books}
              name="Meus games"
              size={34}
              link="/minha-conta/meus-games"
              especialClass="hover:text-sky-400"
              iconClass="text-sky-600"
            />
            {/* <MenuItem
              Icon={ThumbsUp}
              name="Avaliações"
              size={34}
              link="/minha-conta/minhas-avaliacoes"
              especialClass="hover:text-sky-400"
              iconClass="text-sky-600"
            /> */}
            <MenuItem
              Icon={Heart}
              name="Meus favoritos"
              size={34}
              link="/minha-conta/meus-favoritos"
              especialClass="hover:text-sky-400"
              iconClass="text-sky-600"
            />
            <MenuItem
              Icon={Chat}
              name="Ajuda"
              size={34}
              link="/minha-conta/ajuda"
              especialClass="hover:text-sky-400"
              iconClass="text-sky-600"
            />
          </div>

          <MenuItem
            Icon={SignOut}
            name="Sair"
            size={34}
            link="/logout"
            especialClass="mb-4 hover:text-orange-400"
            iconClass="text-orange-600"
          />
        </div>
      )}
    </>
  )
}
