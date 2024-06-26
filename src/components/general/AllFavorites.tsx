'use client'

import { sortProductsByName } from '@/helpers/orders'
import { IGame } from '@/interfaces'
import { SmileySad } from '@phosphor-icons/react/dist/ssr'
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
        <div className="w-fit sm:w-full flex flex-col gap-1 items-center justify-center mt-10 sm:mt-4 sm:text-center absolute">
          <SmileySad weight="light" className="text-5xl" />
          <span className="text-base font-light">
            Você não possui nenhum favorito no momento.
          </span>
        </div>
      )}
    </>
  )
}
