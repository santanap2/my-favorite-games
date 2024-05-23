/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import LateralMyAccount from '@/components/LateralMyAccount'
import UserProductCard from '@/components/UserProductCard'
import UserProductCardSkeleton from '@/components/Skeletons/UserProductCardSkeleton'
import { pageTitle } from '@/helpers'
import { sortOrdersByDate, sortProductsByName } from '@/helpers/orders'
import { IGame, IOrderData } from '@/interfaces'
import { getUserOrders } from '@/services/orders.requests'
import { GameController, SmileySad } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { redirect } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { getUserByToken } from '@/services'

export default function MeusGames() {
  const [filter, setFilter] = useState('alphabetical')

  const { isFetched: userIsFetched, error: userError } = useQuery({
    queryKey: ['userData'],
    queryFn: async () => await getUserByToken(),
    retry: false,
  })

  if (
    userIsFetched &&
    userError &&
    userError.message === 'Request failed with status code 401'
  )
    redirect('/login')

  const {
    data: ordersData,
    isLoading: ordersIsLoading,
    // isFetched: ordersIsFetched,
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
      {userError && null}
      {!userError && (
        <div className="mt-24 xxl:mt-20 w-full h-full animation-opacity transition-all">
          <title>{`${pageTitle} - Meus games`}</title>

          <LateralMyAccount />
          <div className=" w-full h-full flex flex-col gap-10 text-zinc-100 sm:gap-6 animation-opacity transition-all">
            <div className="flex gap-1 w-fit items-center justify-center">
              <GameController
                weight="fill"
                className="text-emerald-500 sm:text-3xl text-5xl"
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
                    className="h-10 rounded px-3 focus:outline-none text-zinc-200 hover:shadow-lg w-60 text-left text-sm font-light bg-zinc-700 shadow-md"
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
                      <div className="w-fit sm:w-full flex flex-col gap-1 items-center justify-center mt-10 sm:mt-4 sm:text-center">
                        <SmileySad
                          weight="light"
                          className="text-emerald-500 text-5xl"
                        />
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
      )}
    </>
  )
}
