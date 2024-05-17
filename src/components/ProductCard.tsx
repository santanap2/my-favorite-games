/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useContext, useState } from 'react'
import { ICard } from '@/interfaces'
import { priceToBRL } from '@/helpers'
import GamesPlatformContext from '@/context/Context'
import { addItemToCart } from '@/services'
import Link from 'next/link'

export default function ProductCard({
  name,
  category,
  categoryPt,
  price,
  image,
  id,
}: ICard) {
  const { setShowCart, screenSize, loading, setLoading } =
    useContext(GamesPlatformContext)
  const [hover, setHover] = useState<boolean>(false)

  return (
    <div className="flex flex-col w-40 h-fit items-start justify-start animation-opacity animation-opacity transition-all">
      <Link
        href={`/game/${id}`}
        className="w-40 h-60"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="w-40 h-60 overflow-hidden inline-block rounded shadow-[0_0px_5px_rgba(0,0,0,0.2)]">
          <img
            src={image}
            alt={name}
            className={`object-cover transition-all duration-500 w-full h-full rounded ${
              hover ? 'scale-110' : ''
            }`}
          />
        </div>
      </Link>

      <div className="w-full h-40 flex flex-col justify-between items-start xl:h-fit">
        <div className="flex flex-col gap-1 h-20 mt-1">
          <Link href={`/game/${id}`} className="w-fit">
            <h1
              className="font-semibold text-base text-zinc-50 w-fit max-h-20 sm:text-base sm:max-h-11 hover:underline"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {screenSize < 600
                ? name.length > 26
                  ? `${name.slice(0, 26)}...`
                  : name
                : name}
            </h1>
          </Link>

          <Link href={`/home?${category}=true`} className=" w-fit">
            <h2 className="font-light text-sm w-fit sm:text-xs sm:h-8 hover:underline text-zinc-50">
              {categoryPt}
            </h2>
          </Link>
        </div>

        <span className="text-lg font-bold text-rose-500 sm:text-md">
          {`R$ ${priceToBRL(price)}`}
        </span>

        <button
          type="button"
          onClick={async () => {
            setLoading({ ...loading, cart: !loading.cart })
            await addItemToCart(id.toString())
            setShowCart(true)
          }}
          className="mt-1 w-fit h-9 px-4 text-white font-bold uppercase bg-rose-500 py-1 rounded text-sm flex items-center justify-center relative hover:bg-rose-600 transition-all sm:text-xs sm:w-full"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
