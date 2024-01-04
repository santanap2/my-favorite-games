/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import LateralMyAccount from '@/components/LateralMyAccount'
import OrderStatus from '@/components/OrderStatus'
import OrderStatusSkeleton from '@/components/OrderStatusSkeleton'
import { IGame, IGameIDParams } from '@/interfaces'
import { getUserOrders } from '@/services/orders.requests'
import { CheckCircle, ShoppingBagOpen } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function PedidoSucesso({ params: { id } }: IGameIDParams) {
  const { data: ordersData, isLoading: ordersIsLoading } = useQuery({
    queryKey: ['userOrders'],
    queryFn: async () => await getUserOrders(),
    retry: false,
  })

  const order = ordersData?.data.data.find(
    (order: IGame) => order.id === Number(id),
  )

  return (
    <div className="w-full">
      <title>{`Pedido realizado com sucesso - #${id}`}</title>

      <LateralMyAccount />
      <div className="w-full h-full mt-24 xxl:mt-20 flex flex-col items-start justify-start gap-4">
        <div className="w-full flex flex-col items-start justify-center">
          <div className="flex gap-2 w-full items-center justify-start relative">
            <div className="static sm:hidden">
              <ShoppingBagOpen
                weight="fill"
                size={56}
                className="text-violet-500 relative"
              />
              <CheckCircle
                size={28}
                weight="fill"
                className="absolute text-green-500 bottom-0 left-8 bg-zinc-50 rounded-full sm:left-6"
              />
            </div>
            <div className="hidden sm:flex">
              <ShoppingBagOpen
                weight="fill"
                size={36}
                className="text-violet-500 relative"
              />
              <CheckCircle
                size={18}
                weight="fill"
                className="absolute text-green-500 bottom-0 left-8 bg-zinc-50 rounded-full sm:left-6"
              />
            </div>
            <h1 className="font-regular text-xl font-semibold">
              Pedido realizado com sucesso!
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <h1>{`Pedido numero: #${id}`}</h1>
          {ordersIsLoading ? (
            <OrderStatusSkeleton />
          ) : (
            <OrderStatus order={order} />
          )}
        </div>
      </div>
    </div>
  )
}
