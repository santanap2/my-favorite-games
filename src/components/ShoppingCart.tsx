/* eslint-disable @next/next/no-img-element */
'use client'

import GamesPlatformContext from '@/context/Context'
import { calcSum } from '@/helpers'
import { IGame } from '@/interfaces'
import { emptyCart, getUserCart } from '@/services'
import { Trash, X } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React, { useContext, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import CartProductCard from './CartProductCard'
import CartProductSkeleton from './Skeletons/CartProductSkeleton'

export default function ShoppingCart() {
  const { showCart, setShowCart, loading, setLoading, isAuthenticated } =
    useContext(GamesPlatformContext)

  const nodeRef = useRef(null)
  const router = useRouter()

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => await getUserCart(),
    retry: false,
  })

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={showCart}
        timeout={200}
        classNames="slide-cart"
        unmountOnExit
        onEntered={() => refetch()}
      >
        <aside
          className="fixed z-50 right-0 top-0 bottom-0 min-h-screen w-[480px] bg-zinc-900 text-zinc-300 py-6 pl-6 shadow-2xl flex flex-col justify-start items-center gap-10 sm:w-[85%] sm:py-3 sm:px-3"
          ref={nodeRef}
        >
          <div className="flex w-full justify-between pr-4 items-center">
            <div className="flex flex-col relative">
              <h1 className="uppercase tracking-wider font-bold text-sm">
                Carrinho
              </h1>
              {data?.data.data.products.length > 0 && (
                <button
                  onClick={async () => {
                    setLoading({ ...loading, cart: !loading.cart })
                    await emptyCart()
                    refetch()
                  }}
                  className="text-xs tracking-wider lowercase absolute -bottom-5 underline cursor-pointer flex gap-1 items-center justify-center hover:text-emerald-500"
                >
                  <Trash className="text-xl" weight="light" />
                  <span>Esvaziar</span>
                </button>
              )}
            </div>
            <button type="button" onClick={() => setShowCart(!showCart)}>
              <X
                weight="bold"
                className="text-zinc-100 hover:text-emerald-500 text-3xl"
              />
            </button>
          </div>

          <div className="flex flex-col w-full min-h-full h-fit justify-between items-center gap-10 overflow-y-auto">
            {isAuthenticated ? (
              isLoading ? (
                <>
                  <CartProductSkeleton />
                  <CartProductSkeleton />
                  <CartProductSkeleton />
                </>
              ) : (
                <div className="w-full h-fit flex flex-col gap-4 pr-4 sm:pr-2 sm:gap-4">
                  {data?.data.data.products.length > 0 ? (
                    data?.data.data.products.map(
                      ({
                        id,
                        description,
                        category,
                        image,
                        name,
                        price,
                      }: IGame) => (
                        <>
                          <CartProductCard
                            key={id}
                            id={id}
                            description={description}
                            category={category}
                            name={name}
                            image={image}
                            price={price}
                          />
                        </>
                      ),
                    )
                  ) : (
                    <div className="flex w-full h-full justify-center items-start font-light sm:text-sm">
                      <span className="mt-16">Seu carrinho está vazio.</span>
                    </div>
                  )}
                </div>
              )
            ) : (
              <div className="flex w-full h-full justify-center items-start font-light sm:text-sm">
                <span className="mt-16">Seu carrinho está vazio.</span>
              </div>
            )}

            {data?.data.data.products.length > 0 ? (
              <div className="w-full flex flex-col items-center justify-center gap-3 mb-16">
                <button
                  type="button"
                  onClick={() => {
                    setShowCart(false)
                    router.push('/finalizar-compra')
                  }}
                  className="text-sm uppercase font-bold text-white py-2 bg-emerald-500 hover:bg-emerald-600 rounded tracking-wide shadow-sm hover:shadow-lg w-4/5 sm:w-fit sm:px-4"
                >
                  {`Finalizar compra -  R$ ${
                    calcSum(data?.data.data.products || []).string
                  }`}
                </button>

                <button
                  type="button"
                  className="uppercase tracking-wide underline text-xs font-light hover:text-emerald-500"
                  onClick={() => {
                    setShowCart(false)
                    router.push('/home')
                  }}
                >
                  Continuar comprando
                </button>
              </div>
            ) : (
              ''
            )}
          </div>
        </aside>
      </CSSTransition>
      {showCart && (
        <div
          className="bg-black opacity-70 w-screen h-screen fixed top-0 bottom-0 left-0 right-0 z-40 animation-opacity"
          onClick={() => setShowCart(false)}
        />
      )}
    </>
  )
}
