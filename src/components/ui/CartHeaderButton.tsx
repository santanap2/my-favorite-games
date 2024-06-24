'use client'

import GamesPlatformContext from '@/context/Context'
import { ShoppingBagOpen } from '@phosphor-icons/react/dist/ssr'
import React, { useContext } from 'react'

export default function CartHeaderButton({
  cartLength,
}: {
  cartLength: number
}) {
  const { setShowCart, showCart } = useContext(GamesPlatformContext)

  return (
    <button
      className="h-full flex items-center justify-center relative hover:text-indigo-600 transition-all"
      onClick={() => setShowCart(!showCart)}
    >
      <ShoppingBagOpen weight="regular" className="text-2xl" />
      <span className="bg-indigo-600 font-extrabold sm:font-bold text-xs sm:text-xxs text-white rounded-full w-5 h-5 sm:w-4 sm:h-4 p-1 flex justify-center items-center absolute sm:-right-1 -right-2 -top-2 sm:top-2">
        {cartLength > 9 ? '9+' : cartLength}
      </span>
    </button>
  )
}
