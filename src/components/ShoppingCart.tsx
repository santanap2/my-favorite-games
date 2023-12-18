/* eslint-disable @next/next/no-img-element */

'use client'

import GamesPlatformContext from '@/context/Context'
import { calcSum, priceToBRL } from '@/helpers'
import { Trash, X } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import React, { useContext, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

export default function ShoppingCart() {
  const { showCart, setShowCart, cart, setCart } =
    useContext(GamesPlatformContext)

  const removeItemCart = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
  }

  const router = useRouter()

  const finalizePurchase = () => {
    setShowCart(false)
    router.push('/finalizar-compra')
  }

  const nodeRef = useRef(null)

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
          className="fixed z-50 right-0 top-0 bottom-0 min-h-screen w-[480px] bg-zinc-100 py-6 pl-6 shadow-2xl flex flex-col justify-start items-center gap-10 sm:w-[85%] sm:py-3 sm:px-3"
          ref={nodeRef}
        >
          <div className="flex w-full justify-between pr-4 items-center">
            <div className="flex flex-col relative">
              <h1 className="uppercase tracking-wider font-bold text-sm">
                Carrinho
              </h1>
              {cart.length > 0 && (
                <button
                  onClick={() => setCart([])}
                  className="text-xs tracking-wider lowercase absolute -bottom-5 underline cursor-pointer flex gap-1 items-center justify-center"
                >
                  <Trash size={20} weight="light" />
                  <span>Esvaziar</span>
                </button>
              )}
            </div>
            <button type="button" onClick={() => setShowCart(!showCart)}>
              <X
                size={28}
                weight="bold"
                className="text-zinc-800 hover:text-sky-400"
              />
            </button>
          </div>

          <div className="flex flex-col w-full min-h-full h-fit justify-between items-center gap-10 overflow-y-auto">
            {cart.length > 0 ? (
              <div className="w-full h-fit flex flex-col gap-10 pr-4 sm:pr-2 sm:gap-4">
                {cart.map(({ areaPt, id, image, name, price }) => (
                  <div
                    key={id}
                    className="flex w-full gap-3 border-b pb-6 sm:pb-2"
                  >
                    <img
                      src={image}
                      alt={name}
                      className="w-32 h-32 object-cover rounded sm:w-24"
                    />
                    <div className="flex flex-col justify-between items-start w-full">
                      <div className="flex flex-col">
                        <h1 className="font-bold text-lg tracking-tight sm:text-sm sm:font-semibold">
                          {name}
                        </h1>
                        <h3 className="text-sm font-light sm:text-xs sm:font-light">
                          {areaPt}
                        </h3>
                      </div>
                      <div className="flex justify-between items-center w-full">
                        <h2 className="font-extrabold tracking-wider text-lg sm:text-sm sm:font-bold">
                          {`R$ ${priceToBRL(price)}`}
                        </h2>
                        <button
                          type="button"
                          className="text-xs font-regular tracking-wider uppercase underline hover:text-sky-400"
                          onClick={() => removeItemCart(id)}
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex w-full h-full justify-center items-start font-light sm:text-sm">
                <span className="mt-16">Seu carrinho está vazio.</span>
              </div>
            )}

            {cart.length > 0 ? (
              <div className="w-full flex flex-col items-center justify-center gap-3 mb-16">
                <button
                  type="button"
                  onClick={finalizePurchase}
                  className="text-sm uppercase font-bold text-white py-2 bg-sky-400 rounded tracking-wide shadow-sm hover:shadow-lg w-4/5 sm:w-fit sm:px-4"
                >
                  {`Finalizar compra -  R$ ${calcSum(cart).string}`}
                </button>

                <button
                  type="button"
                  className="uppercase tracking-wide underline text-xs font-light hover:text-sky-400"
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
          className="bg-black opacity-60 w-screen h-screen fixed top-0 bottom-0 left-0 right-0 z-40 animation-opacity"
          onClick={() => setShowCart(false)}
        />
      )}
    </>
  )
}
