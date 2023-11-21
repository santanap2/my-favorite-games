import {
  BookOpenText,
  House,
  MagnifyingGlass,
  ShoppingCartSimple,
  User,
} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export default function Header() {
  return (
    <header>
      <div className="fixed left-0 top-0 z-50 flex h-14 w-screen items-center  justify-between bg-gray-800 px-80 text-sky-400 shadow-lg">
        <a href="/">
          <h1 className="text-2xl font-extrabold flex items-center justify-center gap-3">
            <BookOpenText size={28} weight="regular" />
            <span>My Fav Courses</span>
          </h1>
        </a>
        <div className="flex gap-3 items-center justify-center">
          <div className="flex items-center justify-center">
            <input
              type="text"
              className="h-10 rounded-l-md pl-3 focus:outline-none text-zinc-700"
              placeholder="Qual curso procura?"
            />
            <MagnifyingGlass
              size={28}
              weight="regular"
              className="h-10 w-9 text-zinc-700 pr-2 bg-white rounded-r-md flex items-center justify-center cursor-pointer"
            />
          </div>
          <a href="/">
            <House size={28} weight="regular" />
          </a>
          <a href="/user">
            <User size={28} weight="regular" />
          </a>
          <a href="/cart">
            <ShoppingCartSimple
              size={28}
              weight="regular"
              className="text-orange-400"
            />
          </a>
        </div>
      </div>
    </header>
  )
}
