/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useContext, useEffect, useRef } from 'react'
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
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LateralMyAccount() {
  const { showMenu, setShowMenu, screenSize } = useContext(GamesPlatformContext)
  const nodeRef = useRef(null)

  const pathname = usePathname()
  const links = {
    myAccount: '/minha-conta',
    myData: '/minha-conta/meus-dados',
    myOrders: '/minha-conta/meus-pedidos',
    myGames: '/minha-conta/meus-games',
    myFavorites: '/minha-conta/meus-favoritos',
    help: '/minha-conta/ajuda',
    logout: '/logout',
  }

  useEffect(() => {
    if (screenSize < 1280) setShowMenu({ ...showMenu, myAccount: false })
    else setShowMenu({ ...showMenu, myAccount: true })
  }, [])

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
          className="w-56 fixed left-0 top-0 bottom-0 flex flex-col pt-20 pl-6 h-full justify-between bg-zinc-100 shadow-md z-20 sm:shadow-2xl"
          ref={nodeRef}
        >
          <div className="flex flex-col">
            <Link href={links.myAccount}>
              <div
                className={`flex gap-3 px-4 items-center w-64  text-sm font-light text-zinc-500 h-14 rounded-md hover:text-sky-400 transition-all`}
              >
                <UserCircle
                  weight={pathname === links.myAccount ? 'fill' : 'duotone'}
                  size={34}
                  className="text-sky-600"
                />
                <span className="w-full">Minha conta</span>
              </div>
            </Link>

            <Link href={links.myData}>
              <div
                className={`flex gap-3 px-4 items-center w-64  text-sm font-light text-zinc-500 h-14 rounded-md hover:text-sky-400 transition-all`}
              >
                <IdentificationCard
                  weight={pathname === links.myData ? 'fill' : 'duotone'}
                  size={34}
                  className="text-sky-600"
                />
                <span className="w-full">Meus dados</span>
              </div>
            </Link>

            <Link href={links.myOrders}>
              <div
                className={`flex gap-3 px-4 items-center w-64  text-sm font-light text-zinc-500 h-14 rounded-md hover:text-sky-400 transition-all`}
              >
                <Bag
                  weight={pathname === links.myOrders ? 'fill' : 'duotone'}
                  size={34}
                  className="text-sky-600"
                />
                <span className="w-full">Meus pedidos</span>
              </div>
            </Link>

            <Link href={links.myGames}>
              <div
                className={`flex gap-3 px-4 items-center w-64  text-sm font-light text-zinc-500 h-14 rounded-md hover:text-sky-400 transition-all`}
              >
                <GameController
                  weight={pathname === links.myGames ? 'fill' : 'duotone'}
                  size={34}
                  className="text-sky-600"
                />
                <span className="w-full">Meus games</span>
              </div>
            </Link>

            <Link href={links.myFavorites}>
              <div
                className={`flex gap-3 px-4 items-center w-64  text-sm font-light text-zinc-500 h-14 rounded-md hover:text-sky-400 transition-all`}
              >
                <Heart
                  weight={pathname === links.myFavorites ? 'fill' : 'duotone'}
                  size={34}
                  className="text-sky-600"
                />
                <span className="w-full">Meus favoritos</span>
              </div>
            </Link>

            <Link href={links.help}>
              <div
                className={`flex gap-3 px-4 items-center w-64  text-sm font-light text-zinc-500 h-14 rounded-md hover:text-sky-400 transition-all`}
              >
                <Chat
                  weight={pathname === links.help ? 'fill' : 'duotone'}
                  size={34}
                  className="text-sky-600"
                />
                <span className="w-full">Ajuda</span>
              </div>
            </Link>
          </div>

          <Link href={links.logout}>
            <div
              className={`flex gap-3 px-4 items-center w-64  text-sm font-light text-zinc-500 h-14 rounded-md mb-4 hover:text-orange-400 transition-all`}
            >
              <SignOut
                weight={pathname === links.help ? 'fill' : 'duotone'}
                size={34}
                className="text-orange-600"
              />
              <span className="w-full">Sair</span>
            </div>
          </Link>
        </div>
      </CSSTransition>
    </>
  )
}
