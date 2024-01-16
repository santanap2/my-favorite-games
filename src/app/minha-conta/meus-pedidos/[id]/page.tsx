/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import LateralMyAccount from '@/components/LateralMyAccount'
import OrderDetails from '@/components/OrderDetails'
import OrderStatus from '@/components/OrderStatus'
import ProductOnOrder from '@/components/ProductOnOrder'
import OrderDetailsSkeleton from '@/components/Skeletons/OrderDetailsSkeleton'
import OrderStatusSkeleton from '@/components/Skeletons/OrderStatusSkeleton'
import ProductOnOrderSkeleton from '@/components/Skeletons/ProductOnOrderSkeleton'
import GamesPlatformContext from '@/context/Context'
import { pageTitle } from '@/helpers'
import { IGame, IGameIDParams } from '@/interfaces'
import { getUserByToken } from '@/services'
import { getOneUserOrder } from '@/services/orders.requests'
import { ListPlus } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { redirect } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

export default function PedidoId({ params: { id } }: IGameIDParams) {
  const { screenSize } = useContext(GamesPlatformContext)

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
    data: orderData,
    isLoading: orderIsLoading,
    refetch: orderRefetch,
  } = useQuery({
    queryKey: ['userOrder'],
    queryFn: async () => await getOneUserOrder(id),
    retry: false,
  })

  useEffect(() => {
    orderRefetch()
  }, [])

  return (
    <>
      {userError && null}
      {!userError && (
        <div className="mt-24 xxl:mt-20 w-full h-full">
          <title>{`Detalhes do pedido #${id} - ${pageTitle}`}</title>
          <LateralMyAccount />

          <div className=" w-full h-full flex flex-col gap-10 text-zinc-800 sm:gap-6 xxl:justify-center xxl:items-center">
            <div className="flex gap-1 w-full items-center justify-start">
              <ListPlus
                weight="fill"
                className="text-slate-500 sm:text-3xl text-5xl"
              />
              <h1 className="font-regular text-xl font-semibold">
                Detalhes do pedido
              </h1>
            </div>

            <div className="w-full flex justify-start items-start gap-6 xl:flex-col xl:justify-center xl:items-center xl:gap-10 relative">
              <div className="w-full flex flex-col gap-10 sm:gap-4 justify-center items-center sticky top-20 xl:static">
                {orderIsLoading ? (
                  <>
                    <OrderStatusSkeleton />
                    <OrderDetailsSkeleton />
                  </>
                ) : (
                  <>
                    <OrderStatus order={orderData?.data.data} />
                    <OrderDetails order={orderData?.data.data} />
                  </>
                )}
              </div>
              <div className="flex flex-col w-fit gap-4 bg-white px-2 pt-4 rounded shadow-md sm:w-full sm:max-w-full">
                {orderIsLoading ? (
                  <>
                    <ProductOnOrderSkeleton />
                    <ProductOnOrderSkeleton />
                    <ProductOnOrderSkeleton />
                  </>
                ) : (
                  orderData?.data.data.products.map((product: IGame) => (
                    <ProductOnOrder
                      key={product.id}
                      description={product.description}
                      category={product.category}
                      id={product.id}
                      image={product.image}
                      name={product.name}
                      price={product.price}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
