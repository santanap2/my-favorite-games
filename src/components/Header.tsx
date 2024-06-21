/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  MagnifyingGlass,
  ShoppingCartSimple,
  List,
  UserCircle,
  X,
} from '@phosphor-icons/react/dist/ssr'
import GamesPlatformContext from '@/context/Context'
import Link from 'next/link'
import HeaderHooks from '@/hooks/HeaderHooks'
import { usePathname } from 'next/navigation'
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
      className="fixed left-0 top-0 z-30 flex h-14 w-screen items-center justify-center bg-neutral-950 bg-opacity-80 border-b border-neutral-800 backdrop-blur-sm text-indigo-600 shadow-xl xl:shadow-lg xl:justify-between md:px-1 xl:gap-0 xl:px-8"
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
              className="h-9 rounded-md px-3 focus:outline-none bg-neutral-800 text-white placeholder:text-white0 sm:w-64 xl:w-96 "
              placeholder="Qual jogo procura?"
            />
            <button
              type="submit"
              className="absolute top-1 right-2 bg-neutral-800"
            >
              <MagnifyingGlass
                className="text-3xl text-white"
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

        <Link href="/">
          <img
            src="/logo.png"
            alt="My Favorite Games Logo"
            className="h-12 sm:w-48 sm:h-auto"
          />
        </Link>

        <div className="flex gap-3 items-center justify-center relative">
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="flex items-center justify-center xl:hidden relative"
          >
            <input
              {...register('headerSearch.headerInput')}
              type="text"
              className="bg-neutral-900 bg-opacity-80 w-full outline-none block rounded-md border-0 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-neutral-700 placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Qual jogo procura?"
            />
            <button
              type="submit"
              className="h-9 w-9 text-indigo-600 bg-transparent flex items-center justify-center cursor-pointer absolute right-1"
            >
              <MagnifyingGlass
                weight={hoverBtn.search ? 'fill' : 'regular'}
                size={24}
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
          className="text-indigo-600 xl:hidden text-3xl"
          onMouseEnter={() => setHoverBtn((prev) => ({ ...prev, cart: true }))}
          onMouseLeave={() => setHoverBtn((prev) => ({ ...prev, cart: false }))}
        />
        <span className="absolute bg-indigo-600 text-sm text-white rounded-full  w-5 h-5 p-2 flex justify-center items-center top-[-8px] right-[-8px] xl:hidden">
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
              className="h-10 text-white cursor-pointer sm:bg-transparent xl:text-indigo-600 text-3xl"
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
            className="text-indigo-600 text-3xl"
            onMouseEnter={() =>
              setHoverBtn((prev) => ({ ...prev, cart: true }))
            }
            onMouseLeave={() =>
              setHoverBtn((prev) => ({ ...prev, cart: false }))
            }
          />
          <span className="absolute bg-indigo-600 text-xs text-white rounded-full  w-4 h-4 p-0 flex justify-center items-center top-2 md:right-1 xl:right-7">
            {cartData?.data.data.products.length
              ? cartData?.data.data.products.length
              : '0'}
          </span>
        </button>
      </div>
    </header>
  )
}
