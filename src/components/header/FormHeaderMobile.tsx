'use client'

import HeaderHooks from '@/hooks/HeaderHooks'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export default function FormHeaderMobile() {
  const { handleSubmitMobile, registerMobile, handleFormMobileSubmit } =
    HeaderHooks()

  return (
    <form
      onSubmit={handleSubmitMobile(handleFormMobileSubmit)}
      className="flex items-center justify-center relative"
      id="HeaderMobileForm"
    >
      <input
        {...registerMobile('headerMobileSearch.headerMobileInput')}
        type="text"
        className="bg-zinc-900 bg-opacity-40 w-56 outline-none block rounded-full border-0 py-1.5 px-4 pr-10 text-zinc-300 shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-zinc-500 focus:ring-2 focus:ring-inset focus:ring-white text-sm leading-6"
        placeholder="Qual jogo procura?"
      />
      <button type="submit" className="absolute right-2 bg-transparent">
        <MagnifyingGlass weight="regular" className="text-2xl" />
      </button>
    </form>
  )
}
