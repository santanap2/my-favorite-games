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
  const [hover, setHover] = useState<boolean>(false)
  const [favorited, setFavorited] = useState<boolean>(true)

  return (
    <div
      className="rounded shadow-md w-64 h-96 relative animation-opacity transition-all sm:w-32 sm:h-48 xl:w-40 xl:h-60"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link href={`/game/${productId}`} className="w-full">
        <div className="overflow-hidden inline-block rounded w-full">
          <img
            className={`object-cover w-full h-full rounded  transition-all duration-500 ${
              hover ? 'scale-110' : ''
            }`}
            src={image}
            alt={name}
          />
        </div>
      </Link>

      {hover && (
        <div className="user-product-card-bg absolute bottom-0 w-full h-32 rounded-b flex justify-between items-center xxl:hidden">
          <div className="w-full h-full flex items-end justify-start pl-3 pb-3 text-lg font-semibold text-slate-100 hover:underline xxl:text-sm xxl:pl-1 xxl:pb-1">
            <Link href={`/game/${productId}`} className="w-full">
              {name.length > 32 ? `${name.slice(0, 32)}...` : name}
            </Link>
          </div>
          {isFavorite && (
            <div className="w-1/6 h-full flex items-end justify-end pb-3 pr-3 xxl:pr-0 xxl:pb-1">
              <button
                type="button"
                onClick={async () => {
                  await addItemToFavorites(gameId.toString())
                  setFavorited(!favorited)
                }}
                className=""
              >
                <Heart
                  weight={favorited ? 'fill' : 'bold'}
                  className="text-emerald-500 text-2xl"
                />
              </button>
            </div>
          )}
        </div>
      )}

      <div className="hidden user-product-card-bg absolute bottom-0 w-full h-32 rounded-b xxl:flex justify-between items-center">
        <div className="w-full h-full flex items-end justify-start pl-3 pb-3 text-lg font-semibold text-slate-100 hover:underline xxl:text-sm xxl:pl-1 xxl:pb-1">
          <Link href={`/game/${productId}`} className="w-full">
            {name.length > 32 ? `${name.slice(0, 32)}...` : name}
          </Link>
        </div>
        {isFavorite && (
          <div className="w-1/6 h-full flex items-end justify-end pb-3 pr-3 xxl:pr-0 xxl:pb-1">
            <button
              type="button"
              onClick={async () => {
                await addItemToFavorites(gameId.toString())
                setFavorited(!favorited)
              }}
              className=""
            >
              <Heart
                weight={favorited ? 'fill' : 'bold'}
                className="text-emerald-500 text-2xl"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
