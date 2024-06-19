/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  MagnifyingGlass,
  ShoppingCartSimple,
} from '@phosphor-icons/react/dist/ssr'
import GamesPlatformContext from '@/context/Context'
import Link from 'next/link'
import { List, UserCircle, X } from '@phosphor-icons/react'
import HeaderHooks from '@/hooks/HeaderHooks'
import { usePathname, useRouter } from 'next/navigation'
import { CSSTransition } from 'react-transition-group'
import { getUserCart } from '@/services'
import { useQuery } from '@tanstack/react-query'
import MyAccountPopUp from './MyAccountPopUp'
import { useSession } from 'next-auth/react'

export default function Header() {
  const {
    setShowCart,
    showCart,
    setShowMenu,
    showMenu,
    showSearchInputMobile,
    setShowSearchInputMobile,
    screenSize,
    loading,
  } = useContext(GamesPlatformContext)

  const { data: session, status } = useSession()
  const isAuthenticated = status === 'authenticated'

  const [hoverBtn, setHoverBtn] = useState({
    search: false,
    user: false,
    cart: false,
    menu: false,
  })

  const [showPopup, setShowPopup] = useState(false)

  const pathname = usePathname()
  const router = useRouter()
  const nodeRef = useRef(null)

  const {
    handleSubmit,
    register,
    handleFormSubmit,
    handleSubmitMobile,
    registerMobile,
    handleFormMobileSubmit,
  } = HeaderHooks()

  const { data: cartData, refetch: cartRefetch } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => await getUserCart(),
    retry: false,
  })

  useEffect(() => {
    cartRefetch()
  }, [loading.cart])

  const clickMenu = () => {
    if (pathname.includes('/minha-conta'))
      setShowMenu({ ...showMenu, myAccount: !showMenu.myAccount })

    if (pathname.includes('/home'))
      setShowMenu({ ...showMenu, filters: !showMenu.filters })

    if (pathname.includes('/game'))
      setShowMenu({ ...showMenu, filters: !showMenu.filters })

    if (pathname.includes('/pedido'))
      setShowMenu({ ...showMenu, myAccount: !showMenu.myAccount })

    if (pathname.includes('/avaliar-produto'))
      setShowMenu({ ...showMenu, myAccount: !showMenu.myAccount })
  }

  return (
    <header
      className="fixed left-0 top-0 z-30 flex h-14 w-screen items-center justify-center bg-neutral-950 bg-opacity-80 border-b border-neutral-800 backdrop-blur-sm text-indigo-500 shadow-xl xl:shadow-lg xl:justify-between md:px-1 xl:gap-0 xl:px-8"
      onMouseLeave={() => {
        setShowPopup(false)
      }}
    >
      <button
        type="button"
        onClick={clickMenu}
        className="absolute top-4 left-3 xl:static"
        onMouseEnter={() => setHoverBtn((prev) => ({ ...prev, menu: true }))}
        onMouseLeave={() => setHoverBtn((prev) => ({ ...prev, menu: false }))}
      >
        <List
          className="text-3xl"
          weight={hoverBtn.menu ? 'duotone' : 'regular'}
        />
      </button>
      <div className="w-3/4 flex justify-between items-center xl:w-fit">
        <CSSTransition
          nodeRef={nodeRef}
          in={showSearchInputMobile}
          timeout={200}
          classNames="slide-menu"
          unmountOnExit
        >
          <form
            onSubmit={handleSubmitMobile(handleFormMobileSubmit)}
            className="absolute sm:left-10"
            id="HeaderMobileForm"
            ref={nodeRef}
          >
            <input
              {...registerMobile('headerMobileSearch.headerMobileInput')}
              type="text"
              className="h-9 rounded px-3 focus:outline-none bg-neutral-800 text-neutral-100 placeholder:text-neutral-500 sm:w-64 xl:w-96 "
              placeholder="Qual jogo procura?"
            />
            <button
              type="submit"
              className="absolute top-1 right-2 bg-neutral-800"
            >
              <MagnifyingGlass
                className="text-3xl text-neutral-100"
                weight="regular"
              />
            </button>
            {screenSize > 376 && (
              <button
                type="button"
                onClick={() => setShowSearchInputMobile(false)}
              >
                <X
                  weight="bold"
                  className="text-indigo-400 absolute top-2 -right-6 text-xl"
                />
              </button>
            )}
          </form>
        </CSSTransition>
        <button
          onClick={() => {
            router.push('/')
          }}
        >
          <img
            src="/logo.png"
            alt="My Favorite Games Logo"
            className="h-12 sm:w-48 sm:h-auto"
          />
        </button>

        <div className="flex gap-3 items-center justify-center relative">
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="flex items-center justify-center xl:hidden"
          >
            <input
              {...register('headerSearch.headerInput')}
              type="text"
              className="h-10 rounded-l pl-3 focus:outline-none bg-neutral-800 text-neutral-100 placeholder:text-neutral-500 hover:shadow-lg"
              placeholder="Qual jogo procura?"
            />
            <button type="submit">
              <MagnifyingGlass
                weight={hoverBtn.search ? 'duotone' : 'regular'}
                className="h-10 w-9 text-neutral-200 pr-2 bg-neutral-800 rounded-r flex items-center justify-center cursor-pointer sm:bg-transparent sm:text-indigo-400 text-3xl"
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
            href={isAuthenticated ? '/minha-conta' : '/api/auth/signin'}
            className="flex items-center justify-center hover:underline xl:hidden relative"
            onMouseEnter={() => {
              setHoverBtn((prev) => ({ ...prev, user: true }))
              setShowPopup(true)
            }}
            onMouseLeave={() => {
              setHoverBtn((prev) => ({ ...prev, user: false }))
            }}
          >
            <span className="uppercase font-semibold text-xs">
              {isAuthenticated
                ? session?.user?.name?.split(' ')[0]
                : status === 'loading'
                  ? ''
                  : 'Entrar'}
            </span>
            <UserCircle
              className="text-3xl"
              weight={hoverBtn.user ? 'duotone' : 'regular'}
            />
          </Link>
          {isAuthenticated && showPopup && <MyAccountPopUp />}
        </div>
      </div>
      <button
        className="absolute top-4 right-8 sm:static"
        onClick={() => setShowCart(!showCart)}
      >
        <ShoppingCartSimple
          weight={hoverBtn.cart ? 'duotone' : 'regular'}
          className="text-indigo-500 xl:hidden text-3xl"
          onMouseEnter={() => setHoverBtn((prev) => ({ ...prev, cart: true }))}
          onMouseLeave={() => setHoverBtn((prev) => ({ ...prev, cart: false }))}
        />
        <span className="absolute bg-indigo-500 text-sm text-neutral-100 rounded-full  w-5 h-5 p-2 flex justify-center items-center top-[-8px] right-[-8px] xl:hidden">
          {cartData?.data.data.products.length
            ? cartData?.data.data.products.length
            : '0'}
        </span>
      </button>

      <div className="hidden xl:static xl:flex xl:gap-1 items-center justify-center">
        {!showSearchInputMobile && (
          <button
            type="button"
            onClick={() => {
              setShowSearchInputMobile(true)
            }}
          >
            <MagnifyingGlass
              weight={hoverBtn.search ? 'duotone' : 'regular'}
              className="h-10 text-neutral-200 cursor-pointer sm:bg-transparent xl:text-indigo-500 text-3xl"
            />
          </button>
        )}
        <Link
          href={isAuthenticated ? '/minha-conta' : '/api/auth/signin'}
          className="flex items-center justify-center hover:underline relative"
        >
          <span className="uppercase font-semibold text-xs sm:hidden">
            {isAuthenticated
              ? session?.user?.name?.split(' ')[0]
              : status === 'loading'
                ? ''
                : 'Entrar'}
          </span>
          <UserCircle
            className="text-3xl"
            weight={hoverBtn.user ? 'duotone' : 'regular'}
          />
        </Link>

        <button
          className="absolute top-4 right-8 xl:static"
          onClick={() => setShowCart(!showCart)}
        >
          <ShoppingCartSimple
            weight={hoverBtn.cart ? 'duotone' : 'regular'}
            className="text-indigo-500 text-3xl"
            onMouseEnter={() =>
              setHoverBtn((prev) => ({ ...prev, cart: true }))
            }
            onMouseLeave={() =>
              setHoverBtn((prev) => ({ ...prev, cart: false }))
            }
          />
          <span className="absolute bg-indigo-500 text-xs text-neutral-100 rounded-full  w-4 h-4 p-0 flex justify-center items-center top-2 md:right-1 xl:right-7">
            {cartData?.data.data.products.length
              ? cartData?.data.data.products.length
              : '0'}
          </span>
        </button>
      </div>
    </header>
  )
}
