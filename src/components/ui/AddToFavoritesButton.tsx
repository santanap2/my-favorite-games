'use client'

import {
  addItemToFavorites,
  getAllFavorites,
} from '@/services/favorites.requests'
import { Heart } from '@phosphor-icons/react/dist/ssr'
import React, { useEffect, useState } from 'react'
import PopUpFavorite from '../order/PopUpFavorite'
import { useQuery } from '@tanstack/react-query'
import { IGame } from '@/interfaces'

export default function AddToFavoritesButton({
  gameId,
  email,
}: {
  gameId: string
  email: string
}) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [showPopupFavorite, setShowPopupFavorite] = useState(false)

  const {
    data: favoritesData,
    refetch: favoritesRefetch,
    isFetched: favoritesIsFetched,
  } = useQuery({
    queryKey: ['favorites'],
    queryFn: async () => await getAllFavorites(),
    retry: false,
  })

  const alreadyFavorited = favoritesData?.data.data.products.some(
    (product: IGame) => product.id === Number(gameId),
  )

  useEffect(() => {
    setIsFavorite(alreadyFavorited)
    favoritesRefetch()
  }, [alreadyFavorited, favoritesIsFetched, favoritesRefetch])

  return (
    <button
      onClick={async () => {
        await addItemToFavorites({ gameId, email })
        setIsFavorite(!isFavorite)
        setShowPopupFavorite(true)
      }}
      className="w-14 h-14 bg-indigo-600 lg:rounded-lg rounded-xl text-lg font-bold tracking-wider text-slate-100 flex items-center justify-center relative shadow-sm hover:bg-indigo-700 transition-all sm:h-12 sm:w-12"
    >
      <Heart
        weight={isFavorite ? 'fill' : 'bold'}
        className="text-slate-100 relative text-3xl"
      />
      {showPopupFavorite && <PopUpFavorite removeFavorite={!isFavorite} />}
    </button>
  )
}
