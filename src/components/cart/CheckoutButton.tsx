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
      className="text-sm uppercase font-bold text-neutral-800 py-2 bg-neutral-300  rounded-md tracking-wide shadow-sm hover:shadow-lg w-4/5 sm:w-fit sm:px-4"
    >
      {`Finalizar compra -  R$ ${calcSum(userCart.products || []).string}`}
    </button>
  )
}
