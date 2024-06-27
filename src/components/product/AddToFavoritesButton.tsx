'use client'

import { addItemToFavorites } from '@/services/favorites.requests'
import { Heart } from '@phosphor-icons/react/dist/ssr'
import React, { useState } from 'react'
import { toast } from 'sonner'

export default function AddToFavoritesButton({
  gameId,
  email,
  alreadyFavorited,
}: {
  gameId: string
  email: string
  alreadyFavorited: boolean
}) {
  const [isFavorite, setIsFavorite] = useState(alreadyFavorited)

  return (
    <button
      onClick={async () => {
        const { data } = await addItemToFavorites({ email, gameId })
        setIsFavorite(!isFavorite)

        toast(data.message, {
          cancel: {
            label: 'Desfazer',
            onClick: async () => {
              await addItemToFavorites({ email, gameId })
              setIsFavorite((prevState) => !prevState)
            },
          },
          cancelButtonStyle: {
            backgroundColor: 'rgb(79 70 229)',
          },
        })
      }}
      className="w-14 h-14 bg-indigo-700 rounded-lg text-lg font-bold tracking-wider text-slate-100 flex items-center justify-center relative shadow-sm hover:bg-indigo-700 transition-all sm:h-12 sm:w-12"
    >
      <Heart
        weight={isFavorite ? 'fill' : 'bold'}
        className="text-slate-100 relative text-3xl"
      />
    </button>
  )
}
