/* eslint-disable @next/next/no-img-element */
import { priceToBRL } from '@/helpers'
import { IGame } from '@/interfaces'
import { getUserCart, removeItemFromCart } from '@/services'
import { MinusCircle } from '@phosphor-icons/react/dist/ssr'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function CartProductCard({
  id,
  image,
  name,
  category,
  price,
}: IGame) {
  const { data } = useSession()
  const email = data?.user?.email as string

  const { refetch } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => await getUserCart(email),
  })

  return (
    <div className="flex justify-between items-center w-full gap-3 border-b border-neutral-900 pb-4 sm:pb-2 animation-opacity transition-all">
      <div className="w-24 h-24 min-w-[96px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full min-w-full min-h-full object-cover rounded-md sm:w-24"
        />
      </div>
      <div className="flex flex-col justify-start items-start w-full h-full">
        <div className="flex flex-col">
          <h1 className="font-bold text-base sm:tracking-tight sm:text-sm sm:font-bold">
            {name}
          </h1>
          <h3 className="text-sm sm:text-xs sm:font-light sm:tracking-tight text-neutral-500">
            {category.namePt}
          </h3>
        </div>
        <div className="flex justify-between items-center w-full">
          <h2 className="font-bold tracking-wider text-base sm:text-sm">
            {`R$ ${priceToBRL(price)}`}
          </h2>

          <button
            type="button"
            className="text-xs font-sm font-semibold hover:text-indigo-600 flex items-center justify-center space-x-1"
            onClick={async () => {
              await removeItemFromCart({ email, gameId: id.toString() })
              refetch()
            }}
          >
            <MinusCircle weight="fill" size={18} />
            <span>Remover</span>
          </button>
        </div>
      </div>
    </div>
  )
}
