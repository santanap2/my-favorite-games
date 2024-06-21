/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useContext, useState } from 'react'
import { ICard } from '@/interfaces'
import { priceToBRL } from '@/helpers'
import Link from 'next/link'
import { PlusCircle, ShoppingCart } from '@phosphor-icons/react/dist/ssr'
import { addItemToCart } from '@/services'
import GamesPlatformContext from '@/context/Context'

export default function ProductCard({
  name,
  category,
  categoryPt,
  price,
  image,
  id,
}: ICard) {
  const { loading, setLoading, setShowCart } = useContext(GamesPlatformContext)
  const [hover, setHover] = useState<boolean>(false)
  const [hoverPrice, setHoverPrice] = useState<boolean>(false)

  return (
    <div className="w-40 flex flex-col h-fit items-center justify-start rounded">
      <Link
        href={`/game/${id}`}
        className="w-fit"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="w-40 h-60 overflow-hidden inline-block rounded shadow-[0_0px_5px_rgba(0,0,0,0.2)]">
          <img
            src={image}
            alt={name}
            className={`object-cover transition-all duration-500 w-40 h-full rounded ${
              hover ? 'scale-110' : ''
            }`}
          />
        </div>
      </Link>

      <div className="w-full h-fit flex flex-col justify-between items-start xl:h-fit">
        <div className="flex flex-col gap-1 h-20 mt-1">
          <Link href={`/game/${id}`} className="w-fit">
            <h1
              className="font-semibold text-base text-neutral-50 w-fit max-h-20 sm:text-base sm:max-h-11 hover:underline"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {name.length > 26 ? `${name.slice(0, 27)}...` : name}
            </h1>
          </Link>

          <Link href={`/home?${category}=true`} className=" w-fit">
            <h2 className="font-extralight text-sm w-fit sm:text-xs sm:h-8 hover:underline text-neutral-50">
              {categoryPt}
            </h2>
          </Link>
        </div>

        <button
          type="button"
          className="flex items-center justify-center h-8 text-sm font-bold text-neutral-200 sm:text-md bg-indigo-800 w-full p-2 rounded text-center hover:bg-indigo-600 transition-all duration-300"
          onMouseEnter={() => {
            setHover(true)
            setHoverPrice(true)
          }}
          onMouseLeave={() => {
            setHover(false)
            setHoverPrice(false)
          }}
          onClick={async () => {
            setLoading({ ...loading, cart: !loading.cart })
            await addItemToCart(id.toString())
            setShowCart(true)
          }}
        >
          {hoverPrice ? (
            <>
              <PlusCircle weight="fill" size={16} />
              <ShoppingCart size={24} weight="regular" />
            </>
          ) : (
            <span className="flex items-center justify-center gap-6 w-full">
              R$ {priceToBRL(price)}
              <span className="hidden md:flex items-center justify-center">
                <PlusCircle weight="fill" size={16} />
                <ShoppingCart size={24} weight="regular" />
              </span>
            </span>
          )}
        </button>
      </div>
    </div>
  )
}
