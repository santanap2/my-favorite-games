'use client'

import React, { useContext, useRef } from 'react'
import MenuItem from './MenuItem'
import {
  Bag,
  GameController,
  Chat,
  Heart,
  IdentificationCard,
  SignOut,
  UserCircle,
} from '@phosphor-icons/react'
import GamesPlatformContext from '@/context/Context'
import { CSSTransition } from 'react-transition-group'

export default function LateralMyAccount() {
  const { showMenu } = useContext(GamesPlatformContext)
  const nodeRef = useRef(null)

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={showMenu.myAccount}
        timeout={200}
        classNames="slide-menu"
        unmountOnExit
      >
        <div
          className="w-56 fixed left-0 top-0 bottom-0 flex flex-col pt-20 pl-6 h-full justify-between bg-zinc-100 shadow-md"
          ref={nodeRef}
        >
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
              Icon={GameController}
              name="Meus games"
              size={34}
              link="/minha-conta/meus-games"
              especialClass="hover:text-sky-400"
              iconClass="text-sky-600"
            />
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
      </CSSTransition>
    </>
  )
}
