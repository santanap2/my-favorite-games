/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useContext } from 'react'
import { ICard } from '@/interfaces'
import Link from 'next/link'
import { priceToBRL } from '@/helpers'
import GamesPlatformContext from '@/context/Context'
import { useRouter } from 'next/navigation'
import { games } from '@/data/games'

export default function ProductCard({ name, areaPt, price, image, id }: ICard) {
  const { setCart } = useContext(GamesPlatformContext)

  const game = games.find((one) => one.id === id)

  const router = useRouter()

  return (
    <div className="rounded-md flex flex-col w-64 h-[500px] bg-white relative items-center justify-center shadow-md hover:shadow-lg cursor-pointer transition-all">
      <Link href={`/game/${id}`} className="w-full">
        <img
          src={image}
          alt={name}
          className="rounded-t-md h-72 w-64 absolute top-0 left-0 object-cover"
        />
      </Link>

      <Link href={`/game/${id}`} className="w-full">
        <div className="absolute top-72 h-40 flex flex-col justify-between items-start px-4 py-2 w-full">
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold text-lg text-zinc-800 w-full max-h-20">
              {name.length > 40 ? `${name.slice(0, 40)}...` : name}
            </h1>
            <h2 className="font-light text-sm w-full">{areaPt}</h2>
          </div>

          <span className="text-xl font-bold text-sky-400">
            {`R$ ${priceToBRL(price)}`}
          </span>
        </div>
      </Link>

      <button
        type="button"
        onClick={() => {
          setCart([game])
          router.push('/finalizar-compra')
        }}
        className="absolute w-56 left-4 right-4 bottom-2 bg-sky-400 py-2 rounded-md text-sm uppercase font-bold  tracking-wide text-white hover:bg-sky-500 transition-all shadow-md"
      >
        Comprar
      </button>
    </div>
  )
}
