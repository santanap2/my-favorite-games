/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import LateralMyAccount from '@/components/LateralMyAccount'
import LoadingSpinner from '@/components/LoadingSpinner'
import SingleOrder from '@/components/SingleOrder'
import UserOrderCard from '@/components/UserOrderCard'
import GamesPlatformContext from '@/context/Context'
import orders from '@/data/userOrders'
import { pageTitle } from '@/helpers'
import { IGame } from '@/interfaces'
import { getUserOrders } from '@/services/orders.requests'
import { getUserByToken } from '@/services/user.requests'
import { UserCircle, EnvelopeSimple } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'

export default function MinhaConta() {
  const { screenSize } = useContext(GamesPlatformContext)

  const allGames: IGame[] = []
  const concludedOrders = orders.filter((item) => item.status === 'concluded')
  concludedOrders.forEach((order) =>
    order.items.forEach((game) => allGames.push(game)),
  )

  const {
    data: userData,
    isLoading: userIsLoading,
    refetch: userRefetch,
  } = useQuery({
    queryKey: ['userData'],
    queryFn: async () => await getUserByToken(),
    retry: false,
  })

  const {
    data: ordersData,
    isLoading: ordersIsLoading,
    refetch: ordersRefetch,
  } = useQuery({
    queryKey: ['userOrders'],
    queryFn: async () => await getUserOrders(),
    retry: false,
  })

  console.log(ordersData?.data.data[ordersData?.data.data.length - 1])

  // const {
  //   id,
  //   payment_method: paymentMethod,
  //   created_at: createdAt,
  //   products,
  //   status,
  //   value,
  // } = ordersData?.data.data[ordersData?.data.data.length - 1].

  useEffect(() => {
    userRefetch()
    ordersRefetch()
  }, [])

  return (
    <div className="w-full">
      <title>{`${
        userIsLoading ? 'Minha conta' : userData?.data.data.name
      } - ${pageTitle}`}</title>

      <LateralMyAccount />
      <div className="w-full h-full mt-24 xxl:mt-20 flex flex-col items-start justify-start">
        <div className="w-full h-full flex flex-col gap-10 text-zinc-800 items-start lg:gap-6">
          <div className="flex gap-1 items-start w-fit">
            <UserCircle
              weight="fill"
              size={screenSize < 600 ? 36 : 56}
              className="text-teal-500"
            />
            <div className="flex flex-col">
              <h1 className="font-regular text-xl lg:text-base">
                Olá{' '}
                <strong className="font-bold text-2xl lg:text-xl">
                  {userIsLoading ? 'Carregando...' : userData?.data.data.name}
                </strong>
                , bem vindo(a) de volta!
              </h1>
              <h2 className="text-sm font-light flex lg:text-xs">
                <EnvelopeSimple
                  size={20}
                  weight="fill"
                  className="text-teal-500"
                />
                {userIsLoading ? 'Carregando...' : userData?.data.data.email}
              </h2>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2">
            <span className="font-semibold text-xl lg:text-base">
              Detalhes do seu último pedido
            </span>
            {ordersIsLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                {ordersData && (
                  <SingleOrder
                    orderNumber={
                      ordersData?.data.data[ordersData?.data.data.length - 1].id
                    }
                    price={
                      ordersData?.data.data[ordersData?.data.data.length - 1]
                        .value
                    }
                    date={
                      ordersData?.data.data[ordersData?.data.data.length - 1]
                        .created_at
                    }
                    payment={
                      ordersData?.data.data[ordersData?.data.data.length - 1]
                        .payment_method
                    }
                    status={
                      ordersData?.data.data[ordersData?.data.data.length - 1]
                        .status
                    }
                  />
                )}
              </>
            )}
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold text-xl lg:text-base">
                Seus últimos games comprados
              </span>
              <Link
                href="/minha-conta/meus-games"
                className="font-semibold text-lg text-teal-400 hover:underline lg:text-base"
              >
                Ver todos
              </Link>
            </div>
            <div className="w-full grid grid-cols-4 gap-x-12 gap-y-6 sm:grid-cols-2 xxl:grid-cols-3 xxl:gap-3">
              {allGames.length > 0 ? (
                allGames.map(({ name, id, image }: IGame) => (
                  <UserOrderCard
                    key={id}
                    name={name}
                    image={image}
                    gameId={id}
                    productId={id}
                    isGame
                  />
                ))
              ) : (
                <span>Você não possui nenhum game comprado.</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
