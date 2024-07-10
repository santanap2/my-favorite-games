'use client'

import { sortProductsByName } from '@/helpers/orders'
import { IGame } from '@/interfaces'
import React, { useContext } from 'react'
import UserProductCard from '../product/UserProductCard'
import GamesPlatformContext from '@/context/Context'

export default function AllFavorites({
  allFavorites,
  email,
}: {
  allFavorites: IGame[]
  email: string
}) {
  const { filters } = useContext(GamesPlatformContext)

  return (
    <>
      {allFavorites.length > 0 ? (
        filters.myFavorites === 'alphabetical' ? (
          sortProductsByName(allFavorites).map(({ image, name, id }: IGame) => (
            <UserProductCard
              key={id}
              productId={id}
              image={image}
              name={name}
              isFavorite
              email={email}
              gameId={id}
            />
          ))
        ) : (
          allFavorites
            .map(({ image, name, id }: IGame) => (
              <UserProductCard
                key={id}
                productId={id}
                image={image}
                name={name}
                isFavorite
                email={email}
                gameId={id}
              />
            ))
            .reverse()
        )
      ) : (
        <div className="flex p-4 text-sm">Você não possui nenhum favorito.</div>
      )}
    </>
  )
}
