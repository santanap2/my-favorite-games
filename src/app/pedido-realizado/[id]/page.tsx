/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import LateralMyAccount from '@/components/LateralMyAccount'
import OrderInfoSkeleton from '@/components/Skeletons/OrderInfoSkeleton'
import OrderStatus from '@/components/OrderStatus'
import OrderStatusSkeleton from '@/components/Skeletons/OrderStatusSkeleton'
import { IGameIDParams } from '@/interfaces'
import { getOneUserOrder } from '@/services/orders.requests'
import { CheckCircle, ListPlus, ShoppingBagOpen } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { redirect, useRouter } from 'next/navigation'
import React from 'react'
import OrderDetails from '@/components/OrderDetails'
import { getUserByToken } from '@/services'

export default function PedidoSucesso({ params: { id } }: IGameIDParams) {
  const { data: orderData, isLoading: orderIsLoading } = useQuery({
    queryKey: ['userOrder'],
    queryFn: async () => await getOneUserOrder(id),
    retry: false,
  })

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

  const router = useRouter()

  return (
    <>
      {!userError && null}
      {userError && (
        <div className="w-full">
          <title>{`Pedido realizado com sucesso - #${id}`}</title>

          <LateralMyAccount />
          <div className="w-full h-full mt-24 xxl:mt-20 flex flex-col items-center justify-center gap-4">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex gap-2 w-full items-center justify-center relative">
                <ShoppingBagOpen
                  weight="fill"
                  size={56}
                  className="text-violet-500 relative"
                />

                <h1 className="font-regular text-xl font-semibold relative">
                  Pedido realizado com sucesso!
                  <CheckCircle
                    size={28}
                    weight="fill"
                    className="absolute text-green-500 -bottom-4 -left-8 bg-zinc-50 rounded-full"
                  />
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-6 w-full items-center justify-center mt-10 sm:mt-4">
              {orderIsLoading ? (
                <>
                  <OrderStatusSkeleton />
                  <OrderInfoSkeleton />
                </>
              ) : (
                <>
                  <OrderStatus order={orderData?.data.data} />
                  <OrderDetails order={orderData?.data.data} />
                  <button
                    className="mt-6 bg-violet-500 text-white sm:w-full p-3 px-12 rounded font-light shadow-md hover:bg-violet-600 hover:shadow-lg flex gap-4 items-center justify-center"
                    onClick={() => {
                      router.push(`/minha-conta/meus-pedidos/${id}`)
                    }}
                  >
                    <ListPlus size={20} weight="bold" />
                    <span>Ver mais detalhes</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
