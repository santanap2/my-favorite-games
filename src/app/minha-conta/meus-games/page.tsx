/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import LateralMyAccount from '@/components/LateralMyAccount'
import UserProductCard from '@/components/UserProductCard'
import UserProductCardSkeleton from '@/components/Skeletons/UserProductCardSkeleton'
import GamesPlatformContext from '@/context/Context'
import { pageTitle } from '@/helpers'
import { sortOrdersByDate, sortProductsByName } from '@/helpers/orders'
import { IGame, IOrderData } from '@/interfaces'
import { getUserOrders } from '@/services/orders.requests'
import { GameController } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { redirect } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

export default function MeusGames() {
  const { screenSize, isAuthenticated } = useContext(GamesPlatformContext)
  const [filter, setFilter] = useState('alphabetical')

  if (!isAuthenticated) redirect('/login')

  const {
    data: ordersData,
    isLoading: ordersIsLoading,
    refetch: ordersRefetch,
  } = useQuery({
    queryKey: ['userOrders'],
    queryFn: async () => await getUserOrders(),
    retry: false,
  })

  const allBoughtGames: IGame[] = []
  if (ordersData?.data.data) {
    sortOrdersByDate(ordersData?.data.data)
      .filter((order: IOrderData) => order.status === 'concluded')
      .forEach((order: IOrderData) => {
        order.products.forEach((product: IGame) => allBoughtGames.push(product))
      })
  }

  useEffect(() => {
    ordersRefetch()
  }, [])

  return (
    <>
      {!isAuthenticated && null}
      {isAuthenticated && (
        <div className="mt-24 xxl:mt-20 w-full h-full">
          <title>{`${pageTitle} - Meus games`}</title>

          <LateralMyAccount />
          <div className=" w-full h-full flex flex-col gap-10 text-zinc-800 sm:gap-6">
            <div className="flex gap-1 w-fit items-center justify-center">
              <GameController
                weight="fill"
                size={screenSize < 600 ? 36 : 56}
                className="text-violet-500"
              />
              <h1 className="font-regular text-xl font-semibold">Meus Games</h1>
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
                    <option value="date">Comprados recentemente</option>
                  </select>
                </label>
              </form>

              <div className="w-full grid grid-cols-4 gap-x-12 gap-y-6 sm:grid-cols-2 xxl:grid-cols-3 xxl:gap-3">
                {ordersIsLoading ? (
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
                ) : (
                  <>
                    {allBoughtGames.length > 0 ? (
                      filter === 'alphabetical' ? (
                        sortProductsByName(allBoughtGames).map(
                          ({ name, id, image }: IGame) => (
                            <UserProductCard
                              key={id}
                              name={name}
                              image={image}
                              gameId={id}
                              productId={id}
                              isGame
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
                            isGame
                          />
                        ))
                      )
                    ) : (
                      <span>Você não possui nenhum game comprado.</span>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
