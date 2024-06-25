'use client'

import { sortProductsByName } from '@/helpers/orders'
import { IGame } from '@/interfaces'
import { SmileySad } from '@phosphor-icons/react/dist/ssr'
import React, { useContext } from 'react'
import UserProductCard from '../product/UserProductCard'
import GamesPlatformContext from '@/context/Context'

export default function BoughtGames({
  allBoughtGames,
}: {
  allBoughtGames: IGame[]
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
            />
          ))
        )
      ) : (
        <div className="w-fit sm:w-full flex flex-col gap-1 items-center justify-center mt-10 sm:mt-4 sm:text-center absolute">
          <SmileySad weight="light" className="text-5xl" />
          <span className="text-base font-light">
            Você não possui nenhum game comprado no momento.
          </span>
        </div>
      )}
    </>
  )
}
