'use client'
import React, { useContext, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import {
  BookOpenText,
  MagnifyingGlass,
  ShoppingCartSimple,
} from '@phosphor-icons/react/dist/ssr'
import { ITextInput } from '@/interfaces'
import CoursesPlatformContext from '@/context/Context'
import Link from 'next/link'
import { UserCircle } from '@phosphor-icons/react'

export default function Header() {
  const { setShowCart, showCart } = useContext(CoursesPlatformContext)

  const {
    headerSearch,
    setHeaderSearch,
    cart: cartState,
  } = useContext(CoursesPlatformContext)
  const router = useRouter()
  const pathname = usePathname()

  const handlePathname = () => {
    if (pathname.includes('busca')) router.push(headerSearch.headerInput)
    else {
      router.push(`busca/${headerSearch.headerInput}`)
    }
  }
  const inputHandler = ({ target: { value } }: ITextInput) =>
    setHeaderSearch({ headerInput: value })

  const [hoverBtn, setHoverBtn] = useState({
    search: false,
    house: false,
    user: false,
    cart: false,
  })

  const { search, user, cart } = hoverBtn

  return (
    <header>
      <div className="fixed left-0 top-0 z-30 flex h-14 w-screen items-center  justify-between bg-gray-800 px-48 text-sky-400 shadow-xl">
        <Link href="/">
          <h1 className="text-2xl font-extrabold flex items-center justify-center gap-3">
            <BookOpenText size={28} weight="regular" />
            <span>My Fav Courses</span>
          </h1>
        </Link>
        <div className="flex gap-3 items-center justify-center">
          <form
            action=""
            onSubmit={handlePathname}
            className="flex items-center justify-center"
          >
            <input
              type="text"
              className="h-10 rounded-l-md pl-3 focus:outline-none text-zinc-700 hover:shadow-lg"
              placeholder="Qual curso procura?"
              onChange={inputHandler}
              value={headerSearch.headerInput}
            />
            <button
              type="submit"
              onClick={() => router.push(`busca/${headerSearch}`)}
            >
              <MagnifyingGlass
                size={28}
                weight={search ? 'duotone' : 'regular'}
                className="h-10 w-9 text-zinc-700 pr-2 bg-white rounded-r-md flex items-center justify-center cursor-pointer"
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
            className="flex items-center justify-center gap-1 hover:underline"
            onMouseEnter={() =>
              setHoverBtn((prev) => ({ ...prev, user: true }))
            }
            onMouseLeave={() =>
              setHoverBtn((prev) => ({ ...prev, user: false }))
            }
          >
            <UserCircle size={30} weight={user ? 'duotone' : 'regular'} />
            <span className="uppercase font-semibold text-xs">fazer login</span>
          </Link>
          <button className="relative" onClick={() => setShowCart(!showCart)}>
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
            <span className="absolute bg-orange-500 text-sm text-white rounded-full  w-5 h-5 p-2 flex justify-center items-center top-[-8px] right-[-8px]">
              {cartState.length}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
