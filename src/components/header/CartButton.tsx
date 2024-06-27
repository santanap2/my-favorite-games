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
    <form action={UpdateUserCart}>
      <button type="submit">
        <ShoppingBagOpen weight="regular" className="text-2xl" />
        <span className="bg-indigo-700 font-extrabold sm:font-bold text-xs sm:text-xs text-white rounded-full w-5 h-5 sm:w-4 sm:h-4 p-1 flex justify-center items-center absolute sm:-right-1 -right-2 -top-2 sm:top-2">
          {cartLength}
        </span>
      </button>
    </form>
  )
}
