/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { Heart, SmileySad } from '@phosphor-icons/react/dist/ssr'
import React, { useEffect, useState } from 'react'
import UserProductCard from '@/components/order/UserProductCard'
import { IGame } from '@/interfaces'
import { pageTitle } from '@/helpers'
import LateralMyAccount from '@/components/menus/LateralMyAccount'
import { getAllFavorites } from '@/services/favorites.requests'
import { useQuery } from '@tanstack/react-query'
import UserProductCardSkeleton from '@/components/skeletons/UserProductCardSkeleton'
import { sortProductsByName } from '@/helpers/orders'

export default function MeusFavoritos() {
  const [filter, setFilter] = useState('alphabetical')

  const {
    data: favoritesData,
    isLoading: favoritesIsLoading,
    refetch: favoritesRefetch,
    // isFetched: favoritesIsFetched,
  } = useQuery({
    queryKey: ['userFavorites'],
    queryFn: async () => await getAllFavorites(),
    retry: false,
  })

  useEffect(() => {
    favoritesRefetch()
  }, [])

  return (
    <>
      {
        <div className="mt-24 xxl:mt-20  w-full h-full">
          <title>{`${pageTitle} - Meus favoritos`}</title>

          <LateralMyAccount />
          <div className=" w-full h-full flex flex-col gap-10 text-white sm:gap-6 animation-opacity transition-all">
            <div className="flex gap-1 w-fit items-center justify-center">
              <Heart
                weight="fill"
                className="text-indigo-600 sm:text-3xl text-5xl"
              />
              <h1 className="font-regular text-xl font-semibold">
                Meus favoritos
              </h1>
            </div>

            <div className="flex flex-col gap-6 w-full items-center">
              <form className="w-full flex">
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
                    className="h-10 rounded-md px-3 focus:outline-none text-white hover:shadow-lg w-60 text-left text-sm font-light bg-neutral-700 shadow-md"
                    onChange={({ target: { value } }) => setFilter(value)}
                  >
                    <option value="alphabetical">Ordem alfabética</option>
                    <option value="date">Adicionados recentemente</option>
                  </select>
                </label>
              </form>

              <div
                className={`w-full grid grid-cols-5 gap-x-8 gap-y-6 xs:grid-cols-2 sm:gap-x-1 sm:gap-y-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-y-6 xl:grid-cols-5 xxl:grid-cols-4`}
              >
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
                  <div className="w-fit sm:w-full flex flex-col gap-1 items-center justify-center mt-10 sm:mt-4 sm:text-center absolute">
                    <SmileySad weight="light" className="text-5xl" />
                    <span className="text-base font-light">
                      Você não possui nenhum favorito no momento.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
