'use server'

import { UpdateUserCart } from '@/actions'
import { ShoppingBagOpen } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export default async function CartButton({
  cartLength,
}: {
  cartLength: number
}) {
  return (
    <form
      action={UpdateUserCart}
      className="h-full flex items-center justify-center"
    >
      <button type="submit" className="relative">
        <ShoppingBagOpen weight="regular" className="text-2xl" />
        <span className="bg-neutral-200 font-extrabold sm:font-bold text-xs sm:text-xs text-neutral-800 rounded-full w-5 h-5 sm:w-4 sm:h-4 p-1 flex justify-center items-center absolute -top-2 -right-2">
          {cartLength}
        </span>
      </button>
    </form>
  )
}
