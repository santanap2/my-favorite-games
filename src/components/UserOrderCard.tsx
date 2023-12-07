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
    <div className="bg-white rounded-md shadow-md w-80 h-60 relative flex justify-center items-end hover:scale-105 transition-all">
      <Link href={whichLink()}>
        <img
          className="w-full absolute top-0 left-0 right-0 rounded-t-md h-40 object-cover"
          src={image}
          alt={name}
        />
      </Link>
      <div className="absolute top-40 px-3 py-3 w-full h-20 rounded-b-md">
        <Link href={whichLink()} className="bg-red-200">
          <div className="w-64 text-md font-semibold mb-4 text-zinc-700 h-14">
            {name.length > 55 ? `${name.slice(0, 55)}...` : name}
          </div>
        </Link>
        {isFavorite && (
          <button
            type="button"
            onClick={() => setFavorited(!favorited)}
            className="absolute -top-4 right-1 rounded-full p-2 bg-white"
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
