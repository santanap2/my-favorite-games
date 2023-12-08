/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useContext, useState } from 'react'

import {
  MagnifyingGlass,
  ShoppingCartSimple,
} from '@phosphor-icons/react/dist/ssr'
import GamesPlatformContext from '@/context/Context'
import Link from 'next/link'
import { List, UserCircle } from '@phosphor-icons/react'
import HeaderHooks from '@/hooks/HeaderHooks'
import { usePathname, useRouter } from 'next/navigation'
import { games } from '@/data/games'

export default function Header() {
  const {
    setShowCart,
    showCart,
    setShowMenu,
    showMenu,
    cart: cartState,
    setFilteredProducts,
  } = useContext(GamesPlatformContext)

  const {
    handleSubmit,
    register,
    handleFormSubmit,
    handleSubmitMobile,
    registerMobile,
    handleFormMobileSubmit,
  } = HeaderHooks()

  const [hoverBtn, setHoverBtn] = useState({
    search: false,
    user: false,
    cart: false,
    menu: false,
  })

  const [showSearchInputMobile, setShowSearchInputMobile] = useState(false)

  const { search, user, cart, menu } = hoverBtn

  const pathname = usePathname()

  const clickMenu = () => {
    if (pathname.includes('/minha-conta'))
      setShowMenu({ ...showMenu, myAccount: !showMenu.myAccount })

    if (pathname.includes('/home'))
      setShowMenu({ ...showMenu, filters: !showMenu.filters })

    if (pathname.includes('/game'))
      setShowMenu({ ...showMenu, filters: !showMenu.filters })
  }

  const router = useRouter()

  return (
    <header className="fixed left-0 top-0 z-30 flex h-14 w-screen items-center justify-center bg-sky-900 text-sky-400 shadow-xl sm:shadow-lg sm:justify-between sm:px-1 sm:gap-0">
      <button
        type="button"
        onClick={clickMenu}
        className="absolute top-4 left-3 sm:static"
        onMouseEnter={() => setHoverBtn((prev) => ({ ...prev, menu: true }))}
        onMouseLeave={() => setHoverBtn((prev) => ({ ...prev, menu: false }))}
      >
        <List size={28} weight={menu ? 'duotone' : 'regular'} />
      </button>
      <div className="w-3/4 flex justify-between items-center sm:w-fit">
        {showSearchInputMobile ? (
          <form
            onSubmit={handleSubmitMobile(handleFormMobileSubmit)}
            className="relative"
            id="HeaderMobileForm"
          >
            <input
              {...registerMobile('headerMobileSearch.headerMobileInput')}
              type="text"
              className="h-9 rounded-md px-3 focus:outline-none text-zinc-700 w-64"
              placeholder="Qual jogo procura?"
            />
            <button type="submit" className="absolute top-1 right-2">
              <MagnifyingGlass size={28} weight="regular" />
            </button>
          </form>
        ) : (
          <button
            onClick={() => {
              setFilteredProducts(games)
              router.push('/')
            }}
          >
            <img
              src="/logo.png"
              alt="My Favorite Games Logo"
              className="h-12 sm:w-48 sm:h-auto"
            />
          </button>
        )}

        <div className="flex gap-3 items-center justify-center">
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="flex items-center justify-center sm:hidden"
          >
            <input
              {...register('headerSearch.headerInput')}
              type="text"
              className="h-10 rounded-l-md pl-3 focus:outline-none text-zinc-700 hover:shadow-lg"
              placeholder="Qual jogo procura?"
            />
            <button type="submit">
              <MagnifyingGlass
                size={28}
                weight={search ? 'duotone' : 'regular'}
                className="h-10 w-9 text-zinc-700 pr-2 bg-white rounded-r-md flex items-center justify-center cursor-pointer sm:bg-transparent sm:text-sky-400"
                onMouseEnter={() =>
                  setHoverBtn((prev) => ({ ...prev, search: true }))
                }
                onMouseLeave={() =>
                  setHoverBtn((prev) => ({ ...prev, search: false }))
                }
              />
            </button>
          </form>

          <Link
            href="/login"
            className="flex items-center justify-center hover:underline sm:hidden"
            onMouseEnter={() =>
              setHoverBtn((prev) => ({ ...prev, user: true }))
            }
            onMouseLeave={() =>
              setHoverBtn((prev) => ({ ...prev, user: false }))
            }
          >
            <span className="uppercase font-semibold text-xs">login</span>
            <UserCircle size={30} weight={user ? 'duotone' : 'regular'} />
          </Link>
        </div>
      </div>
      <button
        className="absolute top-4 right-8 sm:static"
        onClick={() => setShowCart(!showCart)}
      >
        <ShoppingCartSimple
          size={28}
          weight={cart ? 'duotone' : 'regular'}
          className="text-orange-400 sm:hidden"
          onMouseEnter={() => setHoverBtn((prev) => ({ ...prev, cart: true }))}
          onMouseLeave={() => setHoverBtn((prev) => ({ ...prev, cart: false }))}
        />
        <span className="absolute bg-orange-500 text-sm text-white rounded-full  w-5 h-5 p-2 flex justify-center items-center top-[-8px] right-[-8px] sm:hidden">
          {cartState.length}
        </span>
      </button>

      <div className="hidden sm:static sm:flex sm:gap-1">
        {!showSearchInputMobile && (
          <button
            type="button"
            onClick={() => {
              setShowSearchInputMobile(true)
            }}
          >
            <MagnifyingGlass
              size={28}
              weight={search ? 'duotone' : 'regular'}
              className="h-10 text-zinc-700 cursor-pointer sm:bg-transparent sm:text-sky-400"
            />
          </button>
        )}
        <Link
          href="/login"
          className="flex items-center justify-center hover:underline"
        >
          <span className="uppercase font-semibold text-xs sm:hidden">
            login
          </span>
          <UserCircle size={30} weight={user ? 'duotone' : 'regular'} />
        </Link>

        <button
          className="absolute top-4 right-8 sm:static"
          onClick={() => setShowCart(!showCart)}
        >
          <ShoppingCartSimple
            size={28}
            weight={cart ? 'duotone' : 'regular'}
            className="text-orange-400"
            onMouseEnter={() =>
              setHoverBtn((prev) => ({ ...prev, cart: true }))
            }
            onMouseLeave={() =>
              setHoverBtn((prev) => ({ ...prev, cart: false }))
            }
          />
          <span className="absolute bg-orange-500 text-xs text-white rounded-full  w-4 h-4 p-0 flex justify-center items-center top-2 right-1">
            {cartState.length}
          </span>
        </button>
      </div>
    </header>
  )
}
