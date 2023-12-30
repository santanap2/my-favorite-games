/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { Heart } from '@phosphor-icons/react'
import React, { useContext } from 'react'
import UserOrderCard from '@/components/UserOrderCard'
import { IGame } from '@/interfaces'
import { games } from '@/data/games'
import GamesPlatformContext from '@/context/Context'
import { pageTitle } from '@/helpers'
import LateralMyAccount from '@/components/LateralMyAccount'

export default function MeusFavoritos() {
  const { screenSize } = useContext(GamesPlatformContext)

  return (
    <div className="mt-24 xxl:mt-20 w-full h-full">
      <title>{`${pageTitle} - Meus favoritos`}</title>

      <LateralMyAccount />
      <div className=" w-full h-full flex flex-col gap-10 text-zinc-800 sm:gap-6">
        <div className="flex gap-1 w-fit items-center justify-center">
          <Heart
            weight="fill"
            size={screenSize < 600 ? 36 : 56}
            className="text-teal-500"
          />
          <h1 className="font-regular text-xl font-semibold">Meus favoritos</h1>
        </div>

        <div className="w-full grid grid-cols-4 gap-x-12 gap-y-6 sm:grid-cols-2 xxl:grid-cols-3 xxl:gap-3">
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
