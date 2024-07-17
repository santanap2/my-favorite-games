'use client'

import { IServerSession } from '@/interfaces'
import { buyOneItem } from '@/services/cart.requests'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function BuyNowButton({
  email,
  gameId,
  session,
}: {
  email: string
  gameId: string
  session?: IServerSession | null
}) {
  const router = useRouter()
  return (
    <button
      onClick={async () => {
        if (!session) {
          router.push('/api/auth/signin')
          return
        }

        await buyOneItem({ email, gameId })
        router.push('/finalizar-compra')
      }}
      className="w-64 h-14 bg-stone-300 rounded-lg text-lg font-bold uppercase tracking-wider text-stone-800 shadow-sm  transition-all sm:w-3/5 sm:font-semibold sm:text-sm sm:h-12"
    >
      Comprar agora
    </button>
  )
}
