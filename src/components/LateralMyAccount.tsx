/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useContext, useEffect, useRef } from 'react'
import {
  Bag,
  GameController,
  Heart,
  IdentificationCard,
  SignOut,
  UserCircle,
  ThumbsUp,
} from '@phosphor-icons/react'
import GamesPlatformContext from '@/context/Context'
import { CSSTransition } from 'react-transition-group'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { links } from '@/helpers/myAccount'

export default function LateralMyAccount() {
  const { showMenu, setShowMenu, screenSize } = useContext(GamesPlatformContext)
  const nodeRef = useRef(null)

  const pathname = usePathname()

  useEffect(() => {
    setShowMenu({ ...showMenu, myAccount: true })
    if (screenSize < 1280) setShowMenu({ ...showMenu, myAccount: false })
  }, [])

  return (
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
              className={`flex gap-3 px-4 items-center w-full text-sm font-light h-14 rounded hover:text-rose-400 transition-all`}
            >
              <UserCircle
                weight={pathname === links.myAccount ? 'fill' : 'duotone'}
                className="text-rose-600 text-4xl"
              />
              <span
                className={`${
                  pathname === links.myAccount
                    ? 'text-rose-500 font-semibold'
                    : 'text-zinc-500'
                } w-full`}
              >
                Minha conta
              </span>
            </div>
          </Link>

          <Link href={links.myOrders}>
            <div
              className={`flex gap-3 px-4 items-center w-full text-sm font-light h-14 rounded hover:text-rose-400 transition-all`}
            >
              <Bag
                weight={pathname === links.myOrders ? 'fill' : 'duotone'}
                className="text-rose-600 text-4xl"
              />
              <span
                className={`${
                  pathname === links.myOrders
                    ? 'text-rose-500 font-semibold'
                    : 'text-zinc-500'
                } w-full`}
              >
                Meus pedidos
              </span>
            </div>
          </Link>

          <Link href={links.myData}>
            <div
              className={`flex gap-3 px-4 items-center w-full text-sm font-light h-14 rounded hover:text-rose-400 transition-all`}
            >
              <IdentificationCard
                weight={pathname === links.myData ? 'fill' : 'duotone'}
                className="text-rose-600 text-4xl"
              />
              <span
                className={`${
                  pathname === links.myData
                    ? 'text-rose-500 font-semibold'
                    : 'text-zinc-500'
                } w-full`}
              >
                Meus dados
              </span>
            </div>
          </Link>

          <Link href={links.myGames}>
            <div
              className={`flex gap-3 px-4 items-center w-full text-sm font-light h-14 rounded hover:text-rose-400 transition-all`}
            >
              <GameController
                weight={pathname === links.myGames ? 'fill' : 'duotone'}
                className="text-rose-600 text-4xl"
              />
              <span
                className={`${
                  pathname === links.myGames
                    ? 'text-rose-500 font-semibold'
                    : 'text-zinc-500'
                } w-full`}
              >
                Meus games
              </span>
            </div>
          </Link>

          <Link href={links.myFavorites}>
            <div
              className={`flex gap-3 px-4 items-center w-full text-sm font-light h-14 rounded hover:text-rose-400 transition-all`}
            >
              <Heart
                weight={pathname === links.myFavorites ? 'fill' : 'duotone'}
                className="text-rose-600 text-4xl"
              />
              <span
                className={`${
                  pathname === links.myFavorites
                    ? 'text-rose-500 font-semibold'
                    : 'text-zinc-500'
                } w-full`}
              >
                Meus favoritos
              </span>
            </div>
          </Link>

          <Link href={links.myEvaluations}>
            <div
              className={`flex gap-3 px-4 items-center w-full text-sm font-light h-14 rounded hover:text-rose-400 transition-all`}
            >
              <ThumbsUp
                weight={pathname === links.myEvaluations ? 'fill' : 'duotone'}
                className="text-rose-600 text-4xl"
              />
              <span
                className={`${
                  pathname === links.myEvaluations
                    ? 'text-rose-500 font-semibold'
                    : 'text-zinc-500'
                } w-full`}
              >
                Minhas avaliações
              </span>
            </div>
          </Link>
        </div>

        <Link href={links.logout}>
          <div
            className={`flex gap-3 px-4 items-center w-full text-sm font-light text-zinc-500 h-14 rounded mb-4 hover:text-orange-400 transition-all`}
          >
            <SignOut
              weight={pathname === links.help ? 'fill' : 'duotone'}
              className="text-orange-600 text-4xl"
            />
            <span className="w-full">Sair</span>
          </div>
        </Link>
      </div>
    </CSSTransition>
  )
}
