'use client'

import { sortProductsByName } from '@/helpers/orders'
import { IGame } from '@/interfaces'
import React, { useContext } from 'react'
import UserProductCard from '../product/UserProductCard'
import GamesPlatformContext from '@/context/Context'

export default function BoughtGames({
  allBoughtGames,
  email,
}: {
  allBoughtGames: IGame[]
  email: string
}) {
  const { filters } = useContext(GamesPlatformContext)

  return (
    <>
      {allBoughtGames.length > 0 ? (
        filters.myGames === 'alphabetical' ? (
          sortProductsByName(allBoughtGames).map(
            ({ name, id, image }: IGame) => (
              <UserProductCard
                key={id}
                name={name}
                image={image}
                gameId={id}
                productId={id}
                email={email}
              />
            ),
          )
        ) : (
          allBoughtGames.map(({ name, id, image }: IGame) => (
            <UserProductCard
              key={id}
              name={name}
              image={image}
              gameId={id}
              productId={id}
              email={email}
            />
          ))
        )
      ) : (
        <div className="flex p-4 text-sm">Você não possui nenhum game.</div>
      )}
    </>
  )
}
