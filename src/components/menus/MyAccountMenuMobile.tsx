/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useContext, useRef } from 'react'
import {
  Bag,
  GameController,
  Heart,
  IdentificationCard,
  SignOut,
  ThumbsUp,
  User,
} from '@phosphor-icons/react'
import GamesPlatformContext from '@/context/Context'
import { CSSTransition } from 'react-transition-group'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { links } from '@/helpers/myAccount'
import { signOut } from 'next-auth/react'

export default function MyAccountMenuMobile() {
  const { showMenu, setShowMenu } = useContext(GamesPlatformContext)
  const nodeRef = useRef(null)

  const pathname = usePathname()

  return (
    <>
      {showMenu.myAccount && (
        <div
          className="hidden md:flex bg-black bg-opacity-40 backdrop-blur-sm w-screen min-h-screen h-full fixed top-0 left-0 bottom-0 right-0 z-20 overflow-hidden"
          onClick={() =>
            setShowMenu({ ...showMenu, myAccount: !showMenu.myAccount })
          }
        />
      )}

      <CSSTransition
        nodeRef={nodeRef}
        in={showMenu.myAccount}
        timeout={200}
        classNames="slide-menu"
        unmountOnExit
      >
        <div
          className="hidden md:flex w-56 fixed left-0 top-14 bottom-0 flex-col h-full bg-neutral-950 text-neutral-300 bg-opacity-90 backdrop-blur-sm px-2 py-6 justify-between items-center z-50 border-r border-neutral-800"
          ref={nodeRef}
        >
          <div className="flex flex-col gap-1 w-full">
            <Link href={links.myAccount}>
              <div
                className={`flex gap-3 px-4 py-2 items-center w-full text-sm font-semibold transition-all rounded-md ${pathname === links.myAccount && 'bg-opacity-30 bg-neutral-300'}`}
              >
                <User weight="regular" className="text-xl" />
                <span>Resumo</span>
              </div>
            </Link>

            <Link href={links.myOrders}>
              <div
                className={`flex gap-3 px-4 py-2 items-center w-full text-sm font-semibold transition-all rounded-md ${pathname === links.myOrders && 'bg-opacity-30 bg-neutral-300'}`}
              >
                <Bag weight="regular" className="text-xl" />
                <span>Meus pedidos</span>
              </div>
            </Link>

            <Link href={links.myData}>
              <div
                className={`flex gap-3 px-4 py-2 items-center w-full text-sm font-semibold transition-all rounded-md ${pathname === links.myData && 'bg-opacity-30 bg-neutral-300'}`}
              >
                <IdentificationCard weight="regular" className="text-xl" />
                <span>Meus dados</span>
              </div>
            </Link>

            <Link href={links.myGames}>
              <div
                className={`flex gap-3 px-4 py-2 items-center w-full text-sm font-semibold transition-all rounded-md ${pathname === links.myGames && 'bg-opacity-30 bg-neutral-300'}`}
              >
                <GameController weight="regular" className="text-xl" />
                <span>Meus games</span>
              </div>
            </Link>

            <Link href={links.myFavorites}>
              <div
                className={`flex gap-3 px-4 py-2 items-center w-full text-sm font-semibold transition-all rounded-md ${pathname === links.myFavorites && 'bg-opacity-30 bg-neutral-300'}`}
              >
                <Heart weight="regular" className="text-xl" />
                <span>Meus favoritos</span>
              </div>
            </Link>

            <Link href={links.myEvaluations}>
              <div
                className={`flex gap-3 px-4 py-2 items-center w-full text-sm font-semibold transition-all rounded-md ${pathname === links.myEvaluations && 'bg-opacity-30 bg-neutral-300'}`}
              >
                <ThumbsUp weight="regular" className="text-xl" />
                <span>Minhas avaliações</span>
              </div>
            </Link>

            <button
              className="flex gap-3 px-4 py-2 items-center w-full text-sm font-semibold transition-all rounded-md"
              onClick={() => signOut({ redirect: true, callbackUrl: '/home' })}
            >
              <SignOut weight="regular" className="text-xl" />
              <span>Sair</span>
            </button>
          </div>
        </div>
      </CSSTransition>
    </>
  )
}
