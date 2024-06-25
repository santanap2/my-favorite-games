'use client'

import { buyOneItem } from '@/services/cart.requests'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function BuyNowButton({
  email,
  gameId,
}: {
  email: string
  gameId: string
}) {
  const router = useRouter()
  return (
    <button
      onClick={async () => {
        await buyOneItem({ email, gameId })
        router.push('/finalizar-compra')
      }}
      className="w-64 h-14 bg-indigo-600 lg:rounded-lg rounded-xl text-lg font-bold uppercase tracking-wider text-white shadow-sm hover:bg-indigo-700 transition-all sm:w-3/5 sm:font-semibold sm:text-sm sm:h-12"
    >
      Comprar agora
    </button>
  )
}
