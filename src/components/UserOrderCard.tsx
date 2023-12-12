/* eslint-disable @next/next/no-img-element */
import { IUserOrderCard } from '@/interfaces'
import { Heart } from '@phosphor-icons/react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function UserOrderCard({
  image,
  name,
  isGame,
  gameId,
  isFavorite,
  productId,
}: IUserOrderCard) {
  const [favorited, setFavorited] = useState(true)

  const whichLink = () => {
    if (isFavorite) return `/game/${productId}`
    if (isGame) return `/minha-conta/meus-games/${gameId}`
    return '/'
  }

  return (
    <div className="bg-white rounded-md shadow-md w-80 h-60 relative flex justify-center items-end hover:scale-105 hover:shadow-lg transition-all sm:w-44 sm:h-56 sm:hover:scale-100">
      <Link href={whichLink()}>
        <img
          className="w-full absolute top-0 left-0 right-0 rounded-t-md h-40 object-cover"
          src={image}
          alt={name}
        />
      </Link>
      <div className="absolute top-40 px-3 py-3 w-full h-20 rounded-b-md sm:p-1 sm:h-fit">
        <Link href={whichLink()} className="">
          <div className="w-64 text-md font-semibold mb-4 text-zinc-700 h-14 sm:text-sm sm:max-h-14 sm:mb-0 sm:w-full">
            {name.length > 55 ? `${name.slice(0, 55)}...` : name}
          </div>
        </Link>
        {isFavorite && (
          <button
            type="button"
            onClick={() => setFavorited(!favorited)}
            className="absolute -top-4 right-1 p-2 bg-white rounded-full sm:-top-9 sm:right-0 sm:rounded-tl-md sm:rounded-tr-none sm:rounded-b-none sm:pt-2 sm:px-1"
          >
            <Heart
              size={28}
              weight={favorited ? 'fill' : 'bold'}
              className="text-sky-400"
            />
          </button>
        )}
      </div>
    </div>
  )
}
