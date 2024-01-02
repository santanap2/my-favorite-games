/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import GamesPlatformContext from '@/context/Context'
import { Bag, SmileySad } from '@phosphor-icons/react'
import React, { useContext, useEffect } from 'react'
import SingleOrder from '@/components/SingleOrder'
import { IOrderData, ISearchParams } from '@/interfaces'
import { pageTitle } from '@/helpers'
import LateralMyAccount from '@/components/LateralMyAccount'
import { getUserOrders } from '@/services/orders.requests'
import { useQuery } from '@tanstack/react-query'
import SingleOrderSkeleton from '@/components/SingleOrderSkeleton'
import { useRouter } from 'next/navigation'

export default function MeusPedidos({ searchParams }: ISearchParams) {
  const { screenSize } = useContext(GamesPlatformContext)

  const router = useRouter()
  const queryParams = new URLSearchParams(searchParams).toString()

  const {
    data: ordersData,
    isLoading: ordersIsLoading,
    refetch: ordersRefetch,
  } = useQuery({
    queryKey: ['userOrders'],
    queryFn: async () =>
      await getUserOrders(new URLSearchParams(queryParams).toString()),
    retry: false,
  })

  useEffect(() => {
    ordersRefetch()
  }, [queryParams])

  return (
    <div className="mt-24 xxl:mt-20 w-full h-full">
      <title>{`${pageTitle} - Meus pedidos`}</title>

      <LateralMyAccount />
      <div className="w-full h-full flex flex-col gap-10 text-zinc-800 sm:gap-6">
        <div className="flex gap-1 w-fit items-center justify-center">
          <Bag
            weight="fill"
            size={screenSize < 600 ? 36 : 56}
            className="text-teal-500"
          />
          <h1 className="font-regular text-xl font-semibold">Meus pedidos</h1>
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
              >
                <option value="all">Todos</option>
                <option value="concluded">Concluído</option>
                <option value="canceled">Cancelado</option>
                <option value="processing">Processando</option>
                <option value="awaitingPayment">Aguardando pagamento</option>
              </select>
            </label>
          </form>

          <div className="flex flex-col gap-4 w-full">
            {ordersIsLoading ? (
              <>
                <SingleOrderSkeleton />
                <SingleOrderSkeleton />
                <SingleOrderSkeleton />
                <SingleOrderSkeleton />
              </>
            ) : (
              <>
                {ordersData?.data.data.length > 0 ? (
                  <>
                    {ordersData?.data.data.map((order: IOrderData) => (
                      <SingleOrder
                        key={order.id}
                        orderNumber={order.id}
                        price={order.value}
                        date={order.created_at}
                        payment={order.payment_method}
                        status={order.status}
                      />
                    ))}
                  </>
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
        </div>
      </div>
    </div>
  )
}
