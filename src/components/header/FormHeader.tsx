'use client'

import HeaderHooks from '@/hooks/HeaderHooks'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import React, { useState } from 'react'

export default function FormHeader() {
  const [hoverBtn, setHoverBtn] = useState({
    search: false,
    user: false,
    cart: false,
    menu: false,
  })

  const { handleSubmit, register, handleFormSubmit } = HeaderHooks()

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex items-center justify-center relative w-96"
    >
      <input
        {...register('headerSearch.headerInput')}
        type="text"
        className="bg-neutral-900 bg-opacity-0 w-full outline-none block rounded-full border-0 py-1.5 px-3 pr-10 text-white shadow-sm ring-1 ring-inset ring-neutral-700 placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Qual jogo procura?"
      />
      <button
        type="submit"
        className="h-9 w-9 bg-transparent flex items-center justify-center cursor-pointer absolute right-1"
      >
        <MagnifyingGlass
          weight={hoverBtn.search ? 'fill' : 'regular'}
          className="text-xl"
          onMouseEnter={() =>
            setHoverBtn((prev) => ({ ...prev, search: true }))
          }
          onMouseLeave={() =>
            setHoverBtn((prev) => ({ ...prev, search: false }))
          }
        />
      </button>
    </form>
  )
}
