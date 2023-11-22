'use client'
import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import {
  BookOpenText,
  House,
  MagnifyingGlass,
  ShoppingCartSimple,
  User,
} from '@phosphor-icons/react/dist/ssr'
import { ITextInput } from '@/interfaces'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()

  const handlePathname = () => {
    if (pathname.includes('busca')) router.push(searchInput)
    else {
      router.push(`busca/${searchInput}`)
    }
  }
  const [searchInput, setSearchInput] = useState('')

  const inputHandler = ({ target: { value } }: ITextInput) =>
    setSearchInput(value)

  const [hoverBtn, setHoverBtn] = useState({
    search: false,
    house: false,
    user: false,
    cart: false,
  })

  const { search, house, user, cart } = hoverBtn

  return (
    <header>
      <div className="fixed left-0 top-0 z-50 flex h-14 w-screen items-center  justify-between bg-gray-800 px-48 text-sky-400 shadow-xl">
        <a href="/">
          <h1 className="text-2xl font-extrabold flex items-center justify-center gap-3">
            <BookOpenText size={28} weight="regular" />
            <span>My Fav Courses</span>
          </h1>
        </a>
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
            />
            <button
              type="submit"
              onClick={() => router.push(`busca/${searchInput}`)}
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

          <a href="/">
            <House
              size={28}
              weight={house ? 'duotone' : 'regular'}
              onMouseEnter={() =>
                setHoverBtn((prev) => ({ ...prev, house: true }))
              }
              onMouseLeave={() =>
                setHoverBtn((prev) => ({ ...prev, house: false }))
              }
            />
          </a>
          <a href="/login">
            <User
              size={28}
              weight={user ? 'duotone' : 'regular'}
              onMouseEnter={() =>
                setHoverBtn((prev) => ({ ...prev, user: true }))
              }
              onMouseLeave={() =>
                setHoverBtn((prev) => ({ ...prev, user: false }))
              }
            />
          </a>
          <a href="/cart">
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
          </a>
        </div>
      </div>
    </header>
  )
}
