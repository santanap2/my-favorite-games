/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import LateralMyAccount from '@/components/LateralMyAccount'
import GamesPlatformContext from '@/context/Context'
import { IGame, IGameIDParams } from '@/interfaces'
import { getUserOrders } from '@/services/orders.requests'
import {
  CheckCircle,
  Circle,
  CurrencyCircleDollar,
  HourglassMedium,
  Package,
  ShoppingBagOpen,
  Storefront,
  XCircle,
} from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'

export default function PedidoSucesso({ params: { id } }: IGameIDParams) {
  const { screenSize } = useContext(GamesPlatformContext)

  const {
    data: ordersData,
    // isLoading: ordersIsLoading,
    // refetch: ordersRefetch,
    // error: ordersError,
  } = useQuery({
    queryKey: ['userOrders'],
    queryFn: async () => await getUserOrders(),
    retry: false,
  })

  const order = ordersData?.data.data.find(
    (order: IGame) => order.id === Number(id),
  )

  const checkOrderStatus = () => {
    if (!order) return 'w-1/6'
    if (order.status === 'awaitingPayment') return 'w-1/6 bg-green-500'
    if (order.status === 'processing') return 'w-4/5 bg-green-500'
    if (order.status === 'concluded') return 'w-6/6 bg-green-500'
    if (order.status === 'canceled') return 'w-6/6 bg-red-500'
  }

  return (
    <div className="w-full">
      <title>{`Pedido realizado com sucesso - #${id}`}</title>

      <LateralMyAccount />
      <div className="w-full h-full mt-24 xxl:mt-20 flex flex-col items-start justify-start gap-4">
        <div className="w-full flex flex-col items-start justify-center">
          <div className="flex gap-2 w-full items-center justify-start relative">
            <ShoppingBagOpen
              weight="fill"
              size={56}
              className="text-violet-500 relative"
            />
            <CheckCircle
              size={28}
              weight="fill"
              className="absolute text-green-500 bottom-0 left-8 bg-zinc-50 rounded-full"
            />
            <h1 className="font-regular text-xl font-semibold">
              Pedido realizado com sucesso!
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <h1>{`Pedido numero: #${id}`}</h1>

          <div className="flex w-[400px] h-40 gap-16 items-center justify-center text-violet-400 relative">
            <div className="bg-violet-400 h-2 w-full absolute left-10 bottom-14 z-0">
              <div className={`${checkOrderStatus()} relative h-2 z-10`} />
            </div>

            <div className="w-20 flex flex-col gap-4 items-center justify-center absolute left-0 z-10">
              <Storefront
                size={64}
                weight="fill"
                className="rounded-full bg-zinc-50 p-2 border-[3px] border-green-500 text-green-500"
              />
              <div className="flex flex-col items-center justify-center h-full">
                <CheckCircle
                  size={40}
                  weight="fill"
                  className="text-green-500 rounded-full bg-zinc-50"
                />
                <span className="text-zinc-700 text-sm text-center">
                  Pedido realizado
                </span>
              </div>
            </div>

            <div className="w-20 flex flex-col gap-4 items-center justify-center absolute left-32 z-10">
              <CurrencyCircleDollar
                size={64}
                weight={
                  (order && order.status === 'processing') ||
                  (order && order.status === 'concluded') ||
                  (order && order.status === 'canceled')
                    ? 'fill'
                    : 'regular'
                }
                className={`${
                  (order && order.status === 'processing') ||
                  (order && order.status === 'concluded')
                    ? 'text-green-500 border-green-500'
                    : order && order.status === 'canceled'
                      ? 'text-red-500 border-red-500'
                      : ''
                } rounded-full bg-zinc-50 p-2 border-[3px] border-violet-400`}
              />

              <div className="flex flex-col items-center justify-center">
                {order && order.status === 'canceled' ? (
                  <XCircle
                    size={40}
                    weight="fill"
                    className=" rounded-full bg-zinc-50 text-red-500"
                  />
                ) : (order && order.status === 'processing') ||
                  (order && order.status === 'concluded') ? (
                  <CheckCircle
                    size={40}
                    weight="fill"
                    className="rounded-full bg-zinc-50 text-green-500"
                  />
                ) : (
                  <Circle
                    size={40}
                    weight="fill"
                    className="rounded-full bg-zinc-50"
                  />
                )}
                <span className="text-zinc-700 text-sm text-center">
                  Pagamento confirmado
                </span>
              </div>
            </div>

            <div className="w-20 flex flex-col gap-4 items-center justify-center absolute left-64 z-10">
              <HourglassMedium
                size={64}
                weight={
                  (order && order.status === 'processing') ||
                  (order && order.status === 'concluded') ||
                  (order && order.status === 'canceled')
                    ? 'fill'
                    : 'regular'
                }
                className={`${
                  (order && order.status === 'processing') ||
                  (order && order.status === 'concluded')
                    ? 'text-green-500 border-green-500'
                    : order && order.status === 'canceled'
                      ? 'text-red-500 border-red-500'
                      : ''
                } rounded-full bg-zinc-50 p-2 border-[3px] border-violet-400`}
              />
              <div className="flex flex-col items-center justify-center">
                {order && order.status === 'canceled' ? (
                  <XCircle
                    size={40}
                    weight="fill"
                    className=" rounded-full bg-zinc-50 text-red-500"
                  />
                ) : (order && order.status === 'processing') ||
                  (order && order.status === 'concluded') ? (
                  <CheckCircle
                    size={40}
                    weight="fill"
                    className="rounded-full bg-zinc-50 text-green-500"
                  />
                ) : (
                  <Circle
                    size={40}
                    weight="fill"
                    className="rounded-full bg-zinc-50"
                  />
                )}
                <span className="text-zinc-700 text-sm text-center">
                  Processando pedido
                </span>
              </div>
            </div>

            <div className="w-20 flex flex-col gap-4 items-center justify-center absolute left-96 z-10">
              <Package
                size={64}
                weight={
                  (order && order.status === 'concluded') ||
                  (order && order.status === 'canceled')
                    ? 'fill'
                    : 'regular'
                }
                className={`${
                  order && order.status === 'concluded'
                    ? 'text-green-500 border-green-500'
                    : order && order.status === 'canceled'
                      ? 'text-red-500 border-red-500'
                      : ''
                } rounded-full bg-zinc-50 p-2 border-[3px] border-violet-400`}
              />
              <div className="flex flex-col items-center justify-center">
                {order && order.status === 'canceled' ? (
                  <XCircle
                    size={40}
                    weight="fill"
                    className=" rounded-full bg-zinc-50 text-red-500"
                  />
                ) : order && order.status === 'concluded' ? (
                  <CheckCircle
                    size={40}
                    weight="fill"
                    className="rounded-full bg-zinc-50 text-green-500"
                  />
                ) : (
                  <Circle
                    size={40}
                    weight="fill"
                    className="rounded-full bg-zinc-50"
                  />
                )}
                <span className="text-zinc-700 text-sm text-center">
                  {order && order.status === 'canceled'
                    ? 'Pedido cancelado'
                    : 'Pedido concluído'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
