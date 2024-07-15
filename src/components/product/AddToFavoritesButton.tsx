'use client'

import { IServerSession } from '@/interfaces'
import { addItemToFavorites } from '@/services/favorites.requests'
import { Heart } from '@phosphor-icons/react/dist/ssr'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

export default function AddToFavoritesButton({
  gameId,
  email,
  alreadyFavorited,
  session,
}: {
  gameId: string
  email: string
  alreadyFavorited: boolean
  session: IServerSession | null
}) {
  const [isFavorite, setIsFavorite] = useState(alreadyFavorited)
  const router = useRouter()

  return (
    <button
      onClick={async () => {
        if (!session) {
          router.push('/api/auth/signin')
          return
        }

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
            color: 'rgb(255 255 255)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
          },
        })
      }}
      className="w-14 h-14 bg-indigo-700 rounded-lg text-lg font-bold tracking-wider text-slate-100 flex items-center justify-center relative shadow-sm hover:bg-indigo-600 transition-all sm:h-12 sm:w-12"
    >
      <Heart
        weight={isFavorite ? 'fill' : 'bold'}
        className="text-slate-100 relative text-3xl"
      />
    </button>
  )
}
