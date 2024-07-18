'use client'

import { IServerSession } from '@/interfaces'
import { addItemToCart, removeItemFromCart } from '@/services'
import { PlusCircle, ShoppingBagOpen } from '@phosphor-icons/react/dist/ssr'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

export default function AddToCartButton({
  email,
  gameId,
  session,
}: {
  email: string
  gameId: string
  session: IServerSession | null
}) {
  const router = useRouter()
  return (
    <button
      type={session ? 'submit' : 'button'}
      form="add-to-cart-form"
      onClick={async () => {
        if (!session) {
          router.push('/api/auth/signin')
          return
        }

        const {
          data: { message },
        } = await addItemToCart({ email, gameId })

        toast(message, {
          action: {
            label: 'Desfazer',
            onClick: async () => await removeItemFromCart({ email, gameId }),
          },
          actionButtonStyle: {
            backgroundColor: 'rgb(212, 212, 212)',
            color: 'rgb(38, 38, 38)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bolder',
          },
        })
      }}
      className="w-14 h-14 bg-zinc-300 rounded-lg text-lg font-bold uppercase tracking-wider text-zinc-800 flex items-center justify-center relative shadow-sm  transition-all sm:h-12 sm:w-12"
    >
      <ShoppingBagOpen weight="bold" className="relative text-3xl" />
      <PlusCircle
        weight="fill"
        className="absolute top-1 right-1 sm:top-0 sm:right-0 text-xl"
      />
    </button>
  )
}
