/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import GamesPlatformContext from '@/context/Context'
import { ArrowUUpLeft, Bag, SmileySad } from '@phosphor-icons/react'
import React, { useContext, useEffect } from 'react'
import SingleOrder from '@/components/SingleOrder'
import { IOrderData, ISearchParams } from '@/interfaces'
import { pageTitle } from '@/helpers'
import LateralMyAccount from '@/components/LateralMyAccount'
import { getUserOrders } from '@/services/orders.requests'
import { useQuery } from '@tanstack/react-query'
import SingleOrderSkeleton from '@/components/Skeletons/SingleOrderSkeleton'
import { redirect, useRouter } from 'next/navigation'
import { sortOrdersByDate } from '@/helpers/orders'
import { getUserByToken } from '@/services'

export default function MeusPedidos({ searchParams }: ISearchParams) {
  const { screenSize } = useContext(GamesPlatformContext)

  const router = useRouter()
  const {
    refetch: userRefetch,
    isFetched: userIsFetched,
    error: userError,
  } = useQuery({
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

  const queryParams = new URLSearchParams(searchParams).toString()

  const {
    data: ordersData,
    isLoading: ordersIsLoading,
    refetch: ordersRefetch,
    error: ordersError,
    isFetched: orderIsFetched,
  } = useQuery({
    queryKey: ['userOrders'],
    queryFn: async () =>
      await getUserOrders(new URLSearchParams(queryParams).toString()),
    retry: false,
  })

  const checkStatusValue = () => {
    if (queryParams.includes('approvedPayment')) return 'approvedPayment'
    if (queryParams.includes('awaitingPayment')) return 'awaitingPayment'
    if (queryParams.includes('canceled')) return 'canceled'
    if (queryParams.includes('concluded')) return 'concluded'
    if (queryParams.includes('processing')) return 'processing'
    return 'all'
  }

  useEffect(() => {
    ordersRefetch()
    userRefetch()
  }, [queryParams])

  return (
    <>
      {!userError && null}
      {!userError && (
        <div className="mt-24 xxl:mt-20 w-full h-full">
          <title>{`${pageTitle} - Meus pedidos`}</title>

          <LateralMyAccount />
          <div className="w-full h-full flex flex-col gap-10 text-zinc-800 sm:gap-6">
            <div className="flex gap-1 w-fit items-center justify-center">
              <Bag
                weight="fill"
                size={screenSize < 600 ? 36 : 56}
                className="text-violet-500"
              />
              <h1 className="font-regular text-xl font-semibold">
                Meus pedidos
              </h1>
            </div>

            <div className="flex flex-col gap-6 w-full">
              <form className="w-fit">
                <label
                  htmlFor="filters"
                  className="flex gap-3 items-center justify-center"
                >
                  <span className="text-sm tracking-wide font-semibold">
                    Filtrar pedidos:
                  </span>
                  <select
                    name=""
                    id="filters"
                    className="h-10 rounded px-3 focus:outline-none text-zinc-700 hover:shadow-lg w-60 text-left text-sm font-light bg-white shadow-md"
                    onChange={({ target: { value } }) =>
                      router.push(`/minha-conta/meus-pedidos?status=${value}`)
                    }
                    value={checkStatusValue()}
                  >
                    <option value="all">Todos</option>
                    <option value="awaitingPayment">
                      Aguardando pagamento
                    </option>
                    <option value="canceled">Cancelado</option>
                    <option value="concluded">Concluído</option>
                    <option value="approvedPayment">Pagamento aprovado</option>
                    <option value="processing">Processando</option>
                  </select>
                </label>
              </form>

              <div className="flex flex-col gap-4 w-full">
                {ordersIsLoading ? (
                  <>
                    <SingleOrderSkeleton />
                    <SingleOrderSkeleton />
                    <SingleOrderSkeleton />
                  </>
                ) : ordersError ? (
                  <div className="w-fit sm:w-full flex flex-col gap-4 justify-center items-start sm:items-center mt-10">
                    <span className="text-sm">
                      Nenhum pedido de acordo com os filtros.
                    </span>

                    <button
                      type="button"
                      onClick={() => router.push('/minha-conta/meus-pedidos')}
                      className="flex gap-3 items-center justify-center px-8 py-2 bg-violet-400 rounded text-sm font-semibold uppercase tracking-wider text-white shadow-sm hover:shadow-lg sm:w-3/5 sm:font-semibold sm:text-sm sm:h-12"
                    >
                      <ArrowUUpLeft size={28} />

                      <span>Voltar</span>
                    </button>
                  </div>
                ) : orderIsFetched && ordersData?.data.data.length > 0 ? (
                  sortOrdersByDate(ordersData?.data.data).map(
                    (order: IOrderData) => (
                      <SingleOrder
                        key={order.id}
                        orderNumber={order.id}
                        price={order.value}
                        date={order.created_at}
                        payment={order.payment_method}
                        status={order.status}
                      />
                    ),
                  )
                ) : (
                  <div className="w-fit sm:w-full flex flex-col gap-1 items-center justify-center mt-10 sm:mt-4">
                    <SmileySad
                      size={48}
                      weight="light"
                      className="text-violet-500"
                    />
                    <span className="text-base font-light">
                      Você não possui nenhum pedido feito.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
