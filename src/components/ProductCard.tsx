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
  const { setShowCart, loading, setLoading } = useContext(GamesPlatformContext)
  const [hover, setHover] = useState<boolean>(false)

  return (
    <div className="flex flex-col w-40 h-fit items-start justify-start">
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

      <div className="w-full h-fit flex flex-col justify-between items-start xl:h-fit">
        <div className="flex flex-col gap-1 h-20 mt-1">
          <Link href={`/game/${id}`} className="w-fit">
            <h1
              className="font-semibold text-base text-slate-50 w-fit max-h-20 sm:text-base sm:max-h-11 hover:underline"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {name.length > 26 ? `${name.slice(0, 27)}...` : name}
            </h1>
          </Link>

          <Link href={`/home?${category}=true`} className=" w-fit">
            <h2 className="font-light text-sm w-fit sm:text-xs sm:h-8 hover:underline text-slate-50">
              {categoryPt}
            </h2>
          </Link>
        </div>

        <span className="text-lg font-bold text-emerald-500 sm:text-md">
          {`R$ ${priceToBRL(price)}`}
        </span>

        <button
          type="button"
          onClick={async () => {
            setLoading({ ...loading, cart: !loading.cart })
            await addItemToCart(id.toString())
            setShowCart(true)
          }}
          className="mt-1 w-fit h-9 px-4 text-slate-100 font-bold uppercase py-1 rounded text-sm bg-emerald-500 flex items-center justify-center relative hover:bg-emerald-600 transition-all sm:text-xs sm:w-full sm:px-0 sm:font-semibold"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
