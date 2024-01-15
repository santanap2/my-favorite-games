/* eslint-disable @next/next/no-img-element */
'use client'

import LateralMyAccount from '@/components/LateralMyAccount'
import GamesPlatformContext from '@/context/Context'
import { pageTitle } from '@/helpers'
import { IEvaluation, IGame, IGameIDParams, IOrderData } from '@/interfaces'
import { getUserEvaluations } from '@/services/evaluations'
import { getUserOrders } from '@/services/orders.requests'
import { GameController } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'

export default function MeuGame({ params: { id } }: IGameIDParams) {
  const { screenSize } = useContext(GamesPlatformContext)

  const {
    data: userEvaluationsData,
    refetch: userEvaluationsRefetch,
    isLoading: userEvaluationsIsLoading,
    isFetched,
  } = useQuery({
    queryKey: ['userEvaluations'],
    queryFn: async () => await getUserEvaluations(),
  })

  const {
    data: userOrdersData,
    refetch: userOrdersRefetch,
    isLoading: userOrdersIsLoading,
  } = useQuery({
    queryKey: ['userOrders'],
    queryFn: async () => await getUserOrders(),
  })

  const alreadyEvaluated =
    isFetched &&
    userEvaluationsData?.data.data.some(
      (evaluation: IEvaluation) => evaluation.productId === Number(id),
    )

  const boughtGames: IGame[] = []
  userOrdersData?.data.data.forEach((order: IOrderData) => {
    if (order.status === 'concluded') boughtGames.push(...order.products)
  })

  const gameInfo = boughtGames.find((one) => one.id === Number(id))

  return (
    <div className="mt-24 xxl:mt-20 w-full h-full">
      <title>{`Detalhes do produto #${id} - ${pageTitle}`}</title>
      <LateralMyAccount />

      <div className=" w-full h-full flex flex-col gap-10 text-zinc-800 sm:gap-6 xxl:justify-center xxl:items-center">
        <div className="flex gap-1 w-full items-center justify-start">
          <GameController
            weight="fill"
            size={screenSize < 600 ? 36 : 56}
            className="text-slate-500"
          />
          <h1 className="font-regular text-xl font-semibold">
            {gameInfo?.name}
          </h1>
        </div>

        <div className="w-full flex justify-start items-start gap-6 xl:flex-col xl:justify-center xl:items-center xl:gap-10 bg-red-100">
          <img
            src={gameInfo?.image}
            alt={gameInfo?.name}
            className="rounded w-64"
          />
        </div>
      </div>
    </div>
  )
}
