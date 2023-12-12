/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useContext } from 'react'
import { ICard, IGame } from '@/interfaces'
import Link from 'next/link'
import { priceToBRL } from '@/helpers'
import GamesPlatformContext from '@/context/Context'
import { useRouter } from 'next/navigation'
import { ShoppingCartSimple, PlusCircle } from '@phosphor-icons/react'

export default function ProductCard({
  name,
  area,
  areaPt,
  price,
  image,
  id,
  description,
}: ICard) {
  const { cart, setCart, setShowCart, screenSize } =
    useContext(GamesPlatformContext)

  const router = useRouter()

  const addCartItem = (item: IGame) => {
    setShowCart(true)
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id)
    if (!isItemInCart) setCart([...cart, item])
  }

  return (
    <div className="rounded-md flex flex-col w-64 h-[500px] bg-white relative items-center justify-center shadow-md hover:shadow-lg hover:scale-105 cursor-pointer transition-all sm:w-full sm:h-96 sm:hover:scale-100">
      <Link href={`/game/${id}`} className="w-full">
        <img
          src={image}
          alt={name}
          className="rounded-t-md h-72 w-64 absolute top-0 left-0 object-cover sm:h-52"
        />
      </Link>

      <Link href={`/game/${id}`} className="w-full">
        <div className="absolute top-72 h-40 flex flex-col justify-between items-start px-4 py-2 w-full sm:top-52 sm:px-2 sm:py-1 sm:h-32">
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold text-lg text-zinc-800 w-full max-h-20 sm:text-base sm:max-h-11">
              {name.length > 26 ? `${name.slice(0, 26)}...` : name}
            </h1>
            <h2 className="font-light text-sm w-full sm:text-xs sm:h-8">
              {areaPt}
            </h2>
          </div>

          <span className="text-xl font-bold text-sky-400 sm:text-lg">
            {`R$ ${priceToBRL(price)}`}
          </span>
        </div>
      </Link>

      <div className="absolute w-56 left-4 right-4 bottom-2 flex gap-[2.5%] sm:w-[90%] sm:left-[5%] sm:right-[5%] sm:bottom-[1.5%]">
        <button
          type="button"
          onClick={() => {
            setCart([{ name, area, areaPt, price, image, id, description }])
            router.push('/finalizar-compra')
          }}
          className="w-[72.5%] bg-sky-400 py-2 rounded-md text-sm uppercase font-bold  tracking-wide text-white hover:bg-sky-500 transition-all shadow-md  sm:text-xs"
        >
          Comprar
        </button>
        <button
          type="button"
          onClick={() =>
            addCartItem({ name, area, areaPt, price, image, id, description })
          }
          className="w-1/4 bg-sky-400 py-1 rounded-md text-sm uppercase flex items-center justify-center relative hover:bg-sky-500 transition-all shadow-md sm:text-xs"
        >
          <ShoppingCartSimple
            size={screenSize < 600 ? 20 : 24}
            weight="bold"
            className="text-white relative"
          />
          <PlusCircle
            size={screenSize < 600 ? 14 : 20}
            weight="fill"
            className="text-white absolute top-0 right-1 sm:top-1 sm:right-0"
          />
        </button>
      </div>
    </div>
  )
}
