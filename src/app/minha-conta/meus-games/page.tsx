'use client'

import LateralMenu from '@/components/LateralMenu'
import UserOrderCard from '@/components/UserOrderCard'
import GamesPlatformContext from '@/context/Context'
import orders from '@/data/userOrders'
import { IGame } from '@/interfaces'
import { GameController } from '@phosphor-icons/react'
import React, { useContext } from 'react'

export default function MeusGames() {
  const { screenSize } = useContext(GamesPlatformContext)

  const allGames: IGame[] = []
  const concludedOrders = orders.filter((item) => item.status === 'concluded')
  concludedOrders.forEach((order) =>
    order.items.forEach((game) => allGames.push(game)),
  )

  return (
    <div className="mt-24 sm:mt-20 w-full h-full">
      <LateralMenu />
      <div className=" w-full h-full flex flex-col gap-10 text-zinc-800 sm:gap-6">
        <div className="flex gap-1 w-fit items-center justify-center">
          <GameController
            weight="fill"
            size={screenSize < 600 ? 36 : 56}
            className="text-sky-500"
          />
          <h1 className="font-regular text-xl font-semibold">Meus Games</h1>
        </div>

        <div className="grid grid-cols-4 gap-x-12 gap-y-6 w-full sm:grid-cols-2 sm:gap-3">
          {allGames.length > 0 ? (
            allGames.map(({ name, id, image }: IGame) => (
              <UserOrderCard
                key={id}
                name={name}
                image={image}
                gameId={id}
                productId={id}
                isGame
              />
            ))
          ) : (
            <span>Você não possui nenhum game comprado.</span>
          )}
        </div>
      </div>
    </div>
  )
}
