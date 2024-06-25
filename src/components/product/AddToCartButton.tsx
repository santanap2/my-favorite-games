'use client'

import GamesPlatformContext from '@/context/Context'
import { addItemToCart } from '@/services'
import { PlusCircle, ShoppingBagOpen } from '@phosphor-icons/react/dist/ssr'
import React, { useContext } from 'react'

export default function AddToCartButton({
  email,
  gameId,
}: {
  email: string
  gameId: string
}) {
  const { setShowCart, loading, setLoading } = useContext(GamesPlatformContext)

  return (
    <button
      type="button"
      onClick={async () => {
        setLoading({ ...loading, cart: !loading.cart })
        await addItemToCart({ email, gameId })
        setShowCart(true)
      }}
      className="w-14 h-14 bg-indigo-600 lg:rounded-lg rounded-xl text-lg font-bold uppercase tracking-wider text-white flex items-center justify-center relative shadow-sm hover:bg-indigo-700 transition-all sm:h-12 sm:w-12"
    >
      <ShoppingBagOpen weight="bold" className="text-white relative text-3xl" />
      <PlusCircle
        weight="fill"
        className="absolute top-1 right-1 sm:top-0 sm:right-0 text-xl"
      />
    </button>
  )
}
