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
    <div className="flex flex-col w-64 items-start justify-start sm:w-full xxl:w-52 animation-opacity animation-opacity transition-all">
      <Link
        href={`/game/${id}`}
        className="w-64 h-96"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="w-64 h-96 overflow-hidden inline-block rounded sm:h-52 xxl:h-52 shadow-[0_0px_5px_rgba(0,0,0,0.2)]">
          <img
            src={image}
            alt={name}
            className={`object-cover transition-all duration-500 w-full h-full rounded ${
              hover ? 'scale-110' : ''
            }`}
          />
        </div>
      </Link>

      <div className="w-full h-40 flex flex-col justify-between items-start sm:top-52 sm:py-1 sm:h-32 xxl:top-52 xxl:h-32">
        <div className="flex flex-col gap-1 h-20">
          <Link href={`/game/${id}`}>
            <h1
              className="font-semibold text-lg text-zinc-800 w-full max-h-20 sm:text-base sm:max-h-11 hover:underline"
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

          <Link href={`/home?${category}=true`}>
            <h2 className="font-light text-sm w-full sm:text-xs sm:h-8 hover:underline">
              {categoryPt}
            </h2>
          </Link>
        </div>

        <span className="text-xl font-bold text-blue-400 sm:text-lg">
          {`R$ ${priceToBRL(price)}`}
        </span>

        <button
          type="button"
          onClick={async () => {
            setLoading({ ...loading, cart: !loading.cart })
            await addItemToCart(id.toString())
            setShowCart(true)
          }}
          className="w-full h-9 text-white font-bold uppercase bg-blue-400 py-1 rounded text-sm flex items-center justify-center relative hover:bg-blue-500 transition-all shadow-md sm:text-xs "
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
