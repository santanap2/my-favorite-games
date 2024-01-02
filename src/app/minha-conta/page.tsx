/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import LateralMyAccount from '@/components/LateralMyAccount'
import SingleOrder from '@/components/SingleOrder'
import SingleOrderSkeleton from '@/components/SingleOrderSkeleton'
import UserProductCard from '@/components/UserProductCard'
import UserProductCardSkeleton from '@/components/UserProductCardSkeleton'
import { pageTitle } from '@/helpers'
import { IGame, IOrderData } from '@/interfaces'
import { getUserOrders } from '@/services/orders.requests'
import { getUserByToken } from '@/services/user.requests'
import { UserCircle, EnvelopeSimple, SmileySad } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function MinhaConta() {
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

  const allBoughtGames: IGame[] = []
  if (ordersData?.data.data) {
    ordersData?.data.data.forEach((order: IOrderData) => {
      order.products.forEach((product: IGame) => allBoughtGames.push(product))
    })
  }
  const lastBoughtGames = allBoughtGames.slice(-8)

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
          <div className="flex flex-col gap-1 items-start justify-center w-full md:h-32">
            <div className="flex gap-1 items-start justify-center w-full">
              <UserCircle weight="fill" size={56} className="text-teal-500" />
              <div className="flex flex-col w-full">
                <div className="font-regular text-xl lg:text-base md:text-base w-full flex flex-col gap-1">
                  {userIsLoading ? (
                    <>
                      <div className="flex md:flex-col md:gap-1 gap-0 w-full relative">
                        <span className="h-8 md:h-6 md:rounded rounded-l text-transparent loading-skeleton w-fit">
                          Olaaaa
                        </span>
                        <span className="h-8 md:h-6 font-bold text-2xl lg:text-xl md:text-lg bg-zinc-100 md:rounded text-transparent loading-skeleton">
                          Nome completo do usuário ocupando tudo
                        </span>
                        <span className="h-8 md:h-6 md:text-sm w-fit bg-zinc-100 md:rounded rounded-r text-transparent loading-skeleton">
                          bem vindo(a) de volta!!!!!!!!
                        </span>
                        <h2 className="flex md:hidden text-sm font-light absolute -bottom-9 left-0">
                          <EnvelopeSimple
                            size={24}
                            weight="fill"
                            className="h-8 md:h-6 text-teal-500"
                          />

                          {userIsLoading ? (
                            <span className="h-8 md:h-6 text-transparent bg-zinc-200 rounded loading-skeleton flex items-center justify-center">
                              emaildousuario@email.com
                            </span>
                          ) : (
                            <span className="h-8 md:h-6 flex items-center justify-center">
                              {userData?.data.data.email}
                            </span>
                          )}
                        </h2>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex md:flex-col gap-1 w-full md:items-start items-center relative">
                        <span className="h-10 md:h-6 w-fit flex items-center justify-center">
                          Olá,
                        </span>
                        <span
                          className={`h-10 ${
                            userData?.data.data.name.length > 25
                              ? 'md:h-10'
                              : 'md:h-6'
                          } font-bold text-2xl lg:text-xl md:text-lg min-w-fit flex items-center justify-center`}
                        >
                          {` ${userData?.data.data.name},`}
                        </span>
                        <span className="h-10 md:h-6 md:text-sm w-fit flex items-center justify-center">
                          bem vindo(a) de volta!
                        </span>
                        <h2 className="flex md:hidden text-sm font-light absolute -bottom-7 left-0">
                          <EnvelopeSimple
                            size={24}
                            weight="fill"
                            className="h-8 md:h-6 text-teal-500"
                          />

                          {userIsLoading ? (
                            <span className="h-8 md:h-6 text-transparent bg-zinc-200 rounded loading-skeleton flex items-center justify-center">
                              emaildousuario@email.com
                            </span>
                          ) : (
                            <span className="h-8 md:h-6 flex items-center justify-center">
                              {userData?.data.data.email}
                            </span>
                          )}
                        </h2>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <h2 className="hidden md:flex text-sm font-light">
              <EnvelopeSimple
                size={24}
                weight="fill"
                className="h-8 md:h-6 text-teal-500"
              />

              {userIsLoading ? (
                <span className="h-8 md:h-6 text-transparent bg-zinc-200 rounded loading-skeleton flex items-center justify-center">
                  emaildousuario@email.com
                </span>
              ) : (
                <span className="h-8 md:h-6 flex items-center justify-center">
                  {userData?.data.data.email}
                </span>
              )}
            </h2>
          </div>

          <div className="w-full flex flex-col gap-2">
            <span className="font-semibold text-xl lg:text-base w-full flex items-start justify-start">
              Detalhes do seu último pedido
            </span>
            {ordersIsLoading ? (
              <SingleOrderSkeleton />
            ) : (
              <>
                {ordersData?.data.data.length > 0 ? (
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
                ) : (
                  <div className="flex flex-col gap-1 items-center justify-center mt-10 bg-white p-4 rounded shadow-md">
                    <SmileySad
                      size={48}
                      weight="regular"
                      className="text-teal-500"
                    />
                    <span className="text-base font-light">
                      Você não possui nenhum pedido feito.
                    </span>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold text-xl lg:text-base w-full flex items-start justify-start">
                Seus últimos games comprados
              </span>
              <Link
                href="/minha-conta/meus-games"
                className="font-semibold text-lg min-w-fit text-teal-400 hover:underline lg:text-base"
              >
                Ver todos
              </Link>
            </div>
            <div
              className={`w-full ${
                lastBoughtGames.length === 0 ? 'flex flex-wrap' : 'grid'
              } grid-cols-4 gap-x-12 gap-y-6 sm:grid-cols-2 xxl:grid-cols-3 xxl:gap-3 `}
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
                </>
              ) : (
                <>
                  {lastBoughtGames.length > 0 ? (
                    lastBoughtGames.map(({ name, id, image }: IGame) => (
                      <UserProductCard
                        key={id}
                        name={name}
                        image={image}
                        gameId={id}
                        productId={id}
                        isGame
                      />
                    ))
                  ) : (
                    <div className="flex flex-col gap-1 items-center justify-center mt-10 bg-white p-4 rounded shadow-md w-full">
                      <SmileySad
                        size={48}
                        weight="regular"
                        className="text-teal-500"
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
    </div>
  )
}
