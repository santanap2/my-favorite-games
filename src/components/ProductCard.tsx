/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useContext } from 'react'
import { ICard } from '@/interfaces'
import Link from 'next/link'
import { priceToBRL, addToCart, addOnlyOneToCart } from '@/helpers'
import GamesPlatformContext from '@/context/Context'
import { useRouter } from 'next/navigation'
import { ShoppingCartSimple, PlusCircle } from '@phosphor-icons/react'

export default function ProductCard({
  name,
  genre,
  genrePt,
  price,
  image,
  id,
  description,
}: ICard) {
  const { setShowCart, screenSize } = useContext(GamesPlatformContext)
  const router = useRouter()

  return (
    <div className="rounded flex flex-col w-64 h-[500px] bg-white relative items-center justify-center shadow-md hover:shadow-lg hover:scale-105 cursor-pointer transition-all sm:w-full sm:h-96 xxl:w-52 xxl:h-96 xxl:hover:scale-100 animation-opacity">
      <Link href={`/game/${id}`} className="w-full">
        <img
          src={image}
          alt={name}
          className="rounded-t h-72 w-64 absolute top-0 left-0 object-cover sm:h-52 xxl:h-52"
        />
      </Link>

      <Link href={`/game/${id}`} className="w-full">
        <div className="absolute top-72 w-full h-40 flex flex-col justify-between items-start px-[5%] py-2 sm:top-52 sm:px-2 sm:py-1 sm:h-32 xxl:top-52 xxl:h-32">
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold text-lg text-zinc-800 w-full max-h-20 sm:text-base sm:max-h-11">
              {screenSize < 600
                ? name.length > 26
                  ? `${name.slice(0, 26)}...`
                  : name
                : name}
            </h1>
            <h2 className="font-light text-sm w-full sm:text-xs sm:h-8">
              {genrePt}
            </h2>
          </div>

          <span className="text-xl font-bold text-indigo-400 sm:text-lg">
            {`R$ ${priceToBRL(price)}`}
          </span>
        </div>
      </Link>

      <div className="absolute w-56 left-4 right-4 bottom-2 flex gap-[2.5%] sm:w-[90%] sm:left-[5%] sm:right-[5%] sm:bottom-[1.5%] xxl:w-[90%] xxl:left-[5%]">
        <button
          type="button"
          onClick={() => {
            addOnlyOneToCart({
              name,
              genre,
              genrePt,
              price,
              image,
              id,
              description,
            })
            router.push('/finalizar-compra')
          }}
          className="w-[72.5%] h-9 bg-indigo-400 py-2 rounded text-sm uppercase font-bold  tracking-wide text-white hover:bg-indigo-500 transition-all shadow-md  sm:text-xs xxl:hover:bg-indigo-400"
        >
          Comprar
        </button>
        <button
          type="button"
          onClick={() => {
            setShowCart(true)
            addToCart({ name, genre, genrePt, price, image, id, description })
          }}
          className="w-1/4 h-9 bg-indigo-400 py-1 rounded text-sm uppercase flex items-center justify-center relative hover:bg-indigo-500 transition-all shadow-md sm:text-xs xxl:hover:bg-indigo-400"
        >
          <ShoppingCartSimple
            size={screenSize < 1000 ? 20 : 24}
            weight="bold"
            className="text-white relative"
          />
          <PlusCircle
            size={screenSize < 1280 ? 14 : 20}
            weight="fill"
            className="text-white absolute top-0 right-1 xxl:top-1 xxl:right-1"
          />
        </button>
      </div>
    </div>
  )
}
