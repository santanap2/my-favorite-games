import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'
import OrderDetails from '@/components/order/OrderDetails'
import OrderStatus from '@/components/order/OrderStatus'
import ProductOnOrder from '@/components/order/ProductOnOrder'
import { pageTitle } from '@/helpers'
import { IGame, IGameIDParams } from '@/interfaces'
import { getOneUserOrder } from '@/services/orders.requests'
import { ListPlus } from '@phosphor-icons/react/dist/ssr'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function PedidoId({ params: { id } }: IGameIDParams) {
  const session = await getServerSession(nextAuthOptions)
  const email = session?.user?.email as string

  const {
    data: { order },
  } = await getOneUserOrder({ email, id })

  return (
    <div className="w-full h-full border-l border-neutral-800 pl-4 md:border-none md:pl-0 text-neutral-300">
      <title>{`Detalhes do pedido #${id} - ${pageTitle}`}</title>

      <div className=" w-full h-full flex flex-col gap-10 sm:gap-6 xxl:justify-center xxl:items-center animation-opacity transition-all">
        <div className="flex flex-col gap-1 items-start justify-center w-full pb-5 border-b border-neutral-800">
          <div className="flex gap-1 items-center justify-center w-full">
            <div className="flex flex-col w-full h-full text-base">
              <span className="font-extrabold text-2xl sm:text-lg flex gap-2 items-center justify-center w-fit">
                <ListPlus weight="bold" className="text-3xl" />
                Detalhes do pedido
              </span>

              <span className="flex text-base sm:text-sm sm:mt-1">
                {`Confira todos os detalhes do pedido #${id}`}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-start items-start gap-6 xl:flex-col xl:justify-center xl:items-center xl:gap-10 relative">
          <div className="w-full flex flex-col gap-10 sm:gap-4 justify-center items-center sticky top-20 xl:static">
            <OrderStatus order={order} />
            <OrderDetails order={order} />
          </div>
          <div className="flex flex-col w-fit gap-4 bg-neutral-950 border border-neutral-900 px-2 pt-4 rounded-md shadow-md sm:w-full sm:max-w-full">
            {order.products.map((product: IGame, index: number) => (
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
                  lenght: order.products.length,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
