/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { Heart } from '@phosphor-icons/react'
import React, { useContext, useEffect, useState } from 'react'
import UserProductCard from '@/components/UserProductCard'
import { IGame } from '@/interfaces'
import GamesPlatformContext from '@/context/Context'
import { pageTitle } from '@/helpers'
import LateralMyAccount from '@/components/LateralMyAccount'
import { getAllFavorites } from '@/services/favorites.requests'
import { useQuery } from '@tanstack/react-query'
import UserProductCardSkeleton from '@/components/UserProductCardSkeleton'
import { sortProductsByName } from '@/helpers/orders'

export default function MeusFavoritos() {
  const [filter, setFilter] = useState('alphabetical')

  const { screenSize } = useContext(GamesPlatformContext)

  const {
    data: favoritesData,
    isLoading: favoritesIsLoading,
    refetch: favoritesRefetch,
  } = useQuery({
    queryKey: ['userFavorites'],
    queryFn: async () => await getAllFavorites(),
    retry: false,
  })

  useEffect(() => {
    favoritesRefetch()
  }, [])

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

        <div className="flex flex-col gap-6 w-full">
          <form className="w-fit">
            <label
              htmlFor="sortBy"
              className="flex gap-3 items-center justify-center"
            >
              <span className="text-sm tracking-wide font-semibold">
                Organizar por:
              </span>
              <select
                name=""
                id="sortBy"
                className="h-10 rounded px-3 focus:outline-none text-zinc-700 hover:shadow-lg w-60 text-left text-sm font-light bg-white shadow-md"
                onChange={({ target: { value } }) => setFilter(value)}
              >
                <option value="alphabetical">Ordem alfabética</option>
                <option value="date">Adicionados recentemente</option>
              </select>
            </label>
          </form>

          <div className="w-full grid grid-cols-4 gap-x-12 gap-y-6 sm:grid-cols-2 xxl:grid-cols-3 xxl:gap-3">
            {favoritesIsLoading ? (
              <>
                <UserProductCardSkeleton />
                <UserProductCardSkeleton />
                <UserProductCardSkeleton />
                <UserProductCardSkeleton />
                <UserProductCardSkeleton />
                <UserProductCardSkeleton />
                <UserProductCardSkeleton />
                <UserProductCardSkeleton />
              </>
            ) : favoritesData?.data.data.products.length > 0 ? (
              filter === 'alphabetical' ? (
                sortProductsByName(favoritesData?.data.data.products).map(
                  ({ image, name, id }: IGame) => (
                    <UserProductCard
                      key={id}
                      image={image}
                      name={name}
                      isFavorite
                      productId={id}
                      gameId={id}
                    />
                  ),
                )
              ) : (
                favoritesData?.data.data.products
                  .map(({ image, name, id }: IGame) => (
                    <UserProductCard
                      key={id}
                      image={image}
                      name={name}
                      isFavorite
                      productId={id}
                      gameId={id}
                    />
                  ))
                  .reverse()
              )
            ) : (
              <span>Você não possui nenhum favorito no momento.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
