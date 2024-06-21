/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import LateralMyAccount from '@/components/LateralMyAccount'
import OrderDetails from '@/components/OrderDetails'
import OrderStatus from '@/components/OrderStatus'
import ProductOnOrder from '@/components/ProductOnOrder'
import OrderDetailsSkeleton from '@/components/Skeletons/OrderDetailsSkeleton'
import OrderStatusSkeleton from '@/components/Skeletons/OrderStatusSkeleton'
import ProductOnOrderSkeleton from '@/components/Skeletons/ProductOnOrderSkeleton'
import { pageTitle } from '@/helpers'
import { IGame, IGameIDParams } from '@/interfaces'
import { getUserByToken } from '@/services'
import { getOneUserOrder } from '@/services/orders.requests'
import { ListPlus } from '@phosphor-icons/react/dist/ssr'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'

export default function PedidoId({ params: { id } }: IGameIDParams) {
  const { error: userError } = useQuery({
    queryKey: ['userData'],
    queryFn: async () => await getUserByToken(),
    retry: false,
  })

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

          <div className=" w-full h-full flex flex-col gap-10 text-white sm:gap-6 xxl:justify-center xxl:items-center animation-opacity transition-all">
            <div className="flex gap-1 w-full items-center justify-start">
              <ListPlus weight="fill" className=" sm:text-3xl text-5xl" />
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
              <div className="flex flex-col w-fit gap-4 bg-neutral-800 px-2 pt-4 rounded-md shadow-md sm:w-full sm:max-w-full">
                {orderIsLoading ? (
                  <>
                    <ProductOnOrderSkeleton border />
                    <ProductOnOrderSkeleton border />
                    <ProductOnOrderSkeleton />
                  </>
                ) : (
                  orderData?.data.data.products.map(
                    (product: IGame, index: number) => (
                      <ProductOnOrder
                        key={product.id}
                        description={product.description}
                        category={product.category}
                        id={product.id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        indexAndLength={{
                          index,
                          lenght: orderData?.data.data.products.length,
                        }}
                      />
                    ),
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
