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
        className="bg-neutral-900 bg-opacity-40 w-56 outline-none block rounded-full border-0 py-1.5 px-4 pr-10 text-white shadow-sm ring-1 ring-inset ring-neutral-700 placeholder:text-neutral-500 focus:ring-2 focus:ring-inset focus:ring-indigo-700 text-sm leading-6"
        placeholder="Qual jogo procura?"
      />
      <button type="submit" className="absolute right-2 bg-transparent">
        <MagnifyingGlass weight="regular" className="text-2xl" />
      </button>
    </form>
  )
}
