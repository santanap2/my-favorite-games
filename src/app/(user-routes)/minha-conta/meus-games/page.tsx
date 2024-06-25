/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import LateralMyAccount from '@/components/menus/LateralMyAccount'
import UserProductCard from '@/components/product/UserProductCard'
import UserProductCardSkeleton from '@/components/skeletons/UserProductCardSkeleton'
import { pageTitle } from '@/helpers'
import { sortOrdersByDate, sortProductsByName } from '@/helpers/orders'
import { IGame, IOrderData } from '@/interfaces'
import { getUserOrders } from '@/services/orders.requests'
import { GameController, SmileySad } from '@phosphor-icons/react/dist/ssr'
import { useQuery } from '@tanstack/react-query'
import {} from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function MeusGames() {
  const [filter, setFilter] = useState('alphabetical')

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
    <div className="mt-24 xxl:mt-20  w-full h-full">
      <title>{`Meus games - ${pageTitle}`}</title>

      <LateralMyAccount />
      <div className=" w-full h-full flex flex-col gap-10 text-white sm:gap-6 animation-opacity transition-all">
        <div className="flex flex-col gap-1 items-start justify-center w-full pb-5 border-b border-neutral-700">
          <div className="flex gap-1 items-center justify-center w-full">
            <div className="flex flex-col w-full h-full text-base">
              <span className="font-extrabold text-2xl sm:text-lg flex gap-2 items-center justify-center w-fit">
                <GameController weight="bold" className="text-3xl" />
                Meus games
              </span>

              <span className="flex text-neutral-500 text-base sm:text-sm sm:mt-1">
                Confira todos os games já adquiridos por você
              </span>
            </div>
          </div>
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
                className="h-10 rounded-md px-3 focus:outline-none text-white hover:shadow-lg w-60 text-left text-sm font-light bg-neutral-950 border border-neutral-900 shadow-md"
                onChange={({ target: { value } }) => setFilter(value)}
              >
                <option value="alphabetical">Ordem alfabética</option>
                <option value="date">Comprados recentemente</option>
              </select>
            </label>
          </form>

          <div
            className={`w-full grid grid-cols-5 gap-x-8 gap-y-6 xs:grid-cols-2 sm:gap-x-1 sm:gap-y-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-y-6 xl:grid-cols-5 xxl:grid-cols-4`}
          >
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
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
