'use client'

import { priceToBRL } from '@/helpers'
import { IServerSession } from '@/interfaces'
import { addItemToCart, removeItemFromCart } from '@/services'
import { PlusCircle, ShoppingBagOpen } from '@phosphor-icons/react/dist/ssr'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

export default function ProductCardButton({
  email,
  id,
  price,
  session,
}: {
  email: string
  id: number
  price: number
  session: IServerSession | null
}) {
  const [, setHover] = useState<boolean>(false)
  const [hoverPrice, setHoverPrice] = useState<boolean>(false)
  const router = useRouter()

  return (
    <button
      type={session ? 'submit' : 'button'}
      form="product-card-form"
      className="flex items-center justify-center h-8 text-sm font-bold text-white sm:text-md bg-indigo-800 w-full p-2 rounded-md text-center hover:bg-indigo-700 transition-all duration-300"
      onMouseEnter={() => {
        setHover(true)
        setHoverPrice(true)
      }}
      onMouseLeave={() => {
        setHover(false)
        setHoverPrice(false)
      }}
      onClick={async () => {
        if (!session) {
          router.push('/api/auth/signin')
          return
        }

        const {
          data: { message },
        } = await addItemToCart({ email, gameId: id.toString() })

        toast(message, {
          cancel: {
            label: 'Desfazer',
            onClick: async () =>
              await removeItemFromCart({ email, gameId: id.toString() }),
          },
          cancelButtonStyle: {
            backgroundColor: 'rgb(79 70 229)',
            color: 'rgb(255 255 255)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
          },
        })
      }}
    >
      {hoverPrice ? (
        <>
          <PlusCircle weight="fill" className="text-base" />
          <ShoppingBagOpen className="text-2xl" weight="regular" />
        </>
      ) : (
        <span className="flex items-center justify-center gap-6 w-full">
          R$ {priceToBRL(price)}
          <span className="hidden md:flex items-center justify-center">
            <PlusCircle weight="fill" className="text-base" />
            <ShoppingBagOpen className="text-2xl" weight="regular" />
          </span>
        </span>
      )}
    </button>
  )
}
