/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import LateralMenu from '@/components/LateralMenu'
import GamesPlatformContext from '@/context/Context'
import { Heart } from '@phosphor-icons/react'
import React, { useContext, useEffect } from 'react'
import UserOrderCard from '@/components/UserOrderCard'
import { IGame } from '@/interfaces'
import { games } from '@/data/games'

export default function MeusFavoritos() {
  const { showMenu, setShowMenu } = useContext(GamesPlatformContext)

  useEffect(() => {
    setShowMenu({ ...showMenu, myAccount: true })
  }, [])

  return (
    <div className="mt-24 w-full h-full">
      <LateralMenu />
      <div className=" w-full h-full flex flex-col gap-10 text-zinc-800">
        <div className="flex gap-1 w-fit items-center justify-center">
          <Heart weight="fill" size={56} className="text-sky-500" />
          <h1 className="font-regular text-xl font-semibold">Meus favoritos</h1>
        </div>

        <div className="grid grid-cols-4 gap-x-12 gap-y-6 w-full">
          {games.length > 0 ? (
            games.map(({ image, name, id }: IGame) => (
              <UserOrderCard
                key={id}
                image={image}
                name={name}
                isFavorite
                productId={id}
                gameId={id}
              />
            ))
          ) : (
            <span>Você não possui nenhum favorito no momento.</span>
          )}
        </div>
      </div>
    </div>
  )
}
