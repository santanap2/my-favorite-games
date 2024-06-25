'use client'

import { calcSum } from '@/helpers'
import { IShoppingCart } from '@/interfaces'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function CheckoutButton({
  userCart,
}: {
  userCart: IShoppingCart
}) {
  const router = useRouter()
  return (
    <button
      type="button"
      onClick={() => {
        router.push('/finalizar-compra')
      }}
      className="text-sm uppercase font-bold text-white py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md tracking-wide shadow-sm hover:shadow-lg w-4/5 sm:w-fit sm:px-4"
    >
      {`Finalizar compra -  R$ ${calcSum(userCart.products || []).string}`}
    </button>
  )
}
