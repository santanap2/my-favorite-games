/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

'use client'

import { IUserProductCard } from '@/interfaces'
import { addItemToFavorites } from '@/services/favorites.requests'
import { Heart } from '@phosphor-icons/react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function UserProductCard({
  image,
  name,
  gameId,
  isFavorite,
  productId,
}: IUserProductCard) {
  const [favorited, setFavorited] = useState(true)

  return (
    <div className="bg-white rounded shadow-md w-80 h-60 relative flex justify-center items-end hover:scale-105 hover:shadow-lg sm:w-44 md:w-52 lg:w-64 lg:h-56 xxl:w-72 xxl:hover:scale-100 animation-opacity transition-all">
      <Link href={`/game/${productId}`}>
        <img
          className="w-full absolute top-0 left-0 right-0 rounded-t h-40 object-cover"
          src={image}
          alt={name}
        />
      </Link>
      <div className="absolute top-40 px-3 py-3 w-full h-20 rounded-b sm:p-2 sm:h-fit">
        <Link href={`/game/${productId}`}>
          <div
            className={`${
              isFavorite ? 'w-64' : 'w-full'
            } text-md font-semibold mb-4 text-zinc-700 h-14 lg:text-sm lg:max-h-14 lg:mb-0 lg:w-full`}
          >
            {name.length > 55 ? `${name.slice(0, 55)}...` : name}
          </div>
        </Link>

        {isFavorite && (
          <button
            type="button"
            onClick={async () => {
              await addItemToFavorites(gameId.toString())
              setFavorited(!favorited)
            }}
            className="absolute -top-4 right-1 p-2 bg-white rounded-full lg:-top-9 lg:right-0 lg:rounded-tl lg:rounded-tr-none lg:rounded-b-none lg:pt-2 lg:px-1"
          >
            <Heart
              weight={favorited ? 'fill' : 'bold'}
              className="text-slate-400 text-3xl"
            />
          </button>
        )}
      </div>
    </div>
  )
}
