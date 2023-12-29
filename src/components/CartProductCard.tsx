/* eslint-disable @next/next/no-img-element */
import { getUserLocalStorage, priceToBRL } from '@/helpers'
import { IGame } from '@/interfaces'
import { getUserCart, removeItemFromCart } from '@/services'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function CartProductCard({
  id,
  image,
  name,
  genrePt,
  price,
}: IGame) {
  const userLocalStorage = getUserLocalStorage() || ''

  const { refetch } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => await getUserCart(userLocalStorage.token),
  })

  return (
    <div key={id} className="flex w-full gap-3 border-b pb-4 sm:pb-2">
      <img
        src={image}
        alt={name}
        className="w-24 h-36 object-cover rounded sm:w-24"
      />
      <div className="flex flex-col justify-between items-start w-full">
        <div className="flex flex-col">
          <h1 className="font-bold text-lg tracking-tight sm:text-sm sm:font-semibold">
            {name}
          </h1>
          <h3 className="text-sm font-light sm:text-xs sm:font-light">
            {genrePt}
          </h3>
        </div>
        <div className="flex justify-between items-center w-full">
          <h2 className="font-extrabold tracking-wider text-lg sm:text-sm sm:font-bold">
            {`R$ ${priceToBRL(price)}`}
          </h2>
          <button
            type="button"
            className="text-xs font-regular tracking-wider uppercase underline hover:text-indigo-400"
            onClick={async () => {
              await removeItemFromCart(userLocalStorage.token, id.toString())
              refetch()
            }}
          >
            Remover
          </button>
        </div>
      </div>
    </div>
  )
}