'use client'

import GamesPlatformContext from '@/context/Context'
import { calcSum } from '@/helpers'
import { IGame, IShoppingCart } from '@/interfaces'
import { emptyCart } from '@/services'
import { Trash, X } from '@phosphor-icons/react/dist/ssr'
import { useRouter } from 'next/navigation'
import React, { useContext, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import CartProductCard from './CartProductCard'

export default function ShoppingCart({
  userCart,
  sessionEmail,
}: {
  userCart: IShoppingCart | null
  sessionEmail: string | null
}) {
  const { showCart, setShowCart, loading, setLoading } =
    useContext(GamesPlatformContext)

  const nodeRef = useRef(null)
  const router = useRouter()

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={showCart}
        timeout={200}
        classNames="slide-cart"
        unmountOnExit
      >
        <aside
          className="fixed z-50 right-0 top-0 bottom-0 min-h-screen w-[480px] bg-neutral-900 bg-opacity-50 backdrop-blur-sm border-l border-neutral-800 text-neutral-300 py-6 pl-6 shadow-2xl flex flex-col justify-start items-center gap-10 sm:w-[85%] sm:py-3 sm:px-3"
          ref={nodeRef}
        >
          <div className="flex w-full justify-between pr-4 items-center">
            <div className="flex flex-col relative">
              <h1 className="tracking-wider font-black text-base">Carrinho</h1>
              {userCart &&
                userCart.products &&
                userCart.products.length > 0 && (
                  <button
                    onClick={async () => {
                      setLoading({ ...loading, cart: !loading.cart })
                      await emptyCart(sessionEmail as string)
                    }}
                    className="text-xs tracking-wider lowercase absolute -bottom-5 underline cursor-pointer flex gap-1 items-center justify-center hover:text-indigo-600 font-normal"
                  >
                    <Trash className="text-xl" weight="light" />
                    <span>Esvaziar</span>
                  </button>
                )}
            </div>
            <button type="button" onClick={() => setShowCart(!showCart)}>
              <X
                weight="bold"
                className="text-white hover:text-indigo-600 text-xl"
              />
            </button>
          </div>

          <div className="flex flex-col w-full min-h-full h-fit justify-between items-center gap-10 overflow-y-auto">
            {!userCart || !userCart.products ? (
              sessionEmail ? (
                <span className="text-sm font-semibold mt-16">
                  Seu carrinho está vazio.
                </span>
              ) : (
                <span className="text-sm font-semibold mt-16">
                  Faça login para adicionar itens ao carrinho
                </span>
              )
            ) : userCart.products.length === 0 ? (
              <div className="flex w-full h-full justify-center items-start text-sm">
                <span className="text-sm font-semibold mt-16">
                  Seu carrinho está vazio.
                </span>
              </div>
            ) : (
              <div className="w-full h-fit flex flex-col gap-4 pr-4 sm:pr-2 sm:gap-4">
                {userCart.products.map(
                  ({
                    id,
                    description,
                    category,
                    image,
                    name,
                    price,
                  }: IGame) => (
                    <CartProductCard
                      key={id}
                      id={id}
                      description={description}
                      category={category}
                      name={name}
                      image={image}
                      price={price}
                    />
                  ),
                )}
              </div>
            )}

            {userCart && userCart.products && userCart.products.length > 0 && (
              <div className="w-full flex flex-col items-center justify-center gap-3 mb-16">
                <button
                  type="button"
                  onClick={() => {
                    setShowCart(false)
                    router.push('/finalizar-compra')
                  }}
                  className="text-sm uppercase font-bold text-white py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md tracking-wide shadow-sm hover:shadow-lg w-4/5 sm:w-fit sm:px-4"
                >
                  {`Finalizar compra -  R$ ${
                    calcSum(userCart.products || []).string
                  }`}
                </button>

                <button
                  type="button"
                  className="uppercase tracking-wide underline text-xs font-light hover:text-indigo-600"
                  onClick={() => {
                    setShowCart(false)
                    router.push('/home')
                  }}
                >
                  Continuar comprando
                </button>
              </div>
            )}
          </div>
        </aside>
      </CSSTransition>
      {showCart && (
        <div
          className="bg-black opacity-[95%] w-screen h-screen fixed top-0 bottom-0 left-0 right-0 z-40"
          onClick={() => setShowCart(false)}
        />
      )}
    </>
  )
}
