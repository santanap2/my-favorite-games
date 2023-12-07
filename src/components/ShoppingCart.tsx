/* eslint-disable @next/next/no-img-element */

'use client'

import CoursesPlatformContext from '@/context/Context'
import { calcSum, priceToBRL } from '@/helpers'
import { X } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

export default function ShoppingCart() {
  const { showCart, setShowCart, cart, setCart } = useContext(
    CoursesPlatformContext,
  )

  const removeItemCart = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
  }

  const router = useRouter()

  const finalizePurchase = () => {
    setShowCart(false)
    router.push('/finalizar-compra')
  }

  return (
    <>
      {showCart && (
        <>
          <aside className="fixed z-50 right-0 top-0 bottom-0 min-h-screen w-[480px] bg-zinc-100 py-6 pl-6 shadow-2xl flex flex-col justify-start items-center gap-8 slideshow-right">
            <div className="flex w-full justify-between pr-4 items-center">
              <h1 className="uppercase tracking-wider font-bold text-sm">
                Carrinho
              </h1>
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
                <div className="w-full h-fit flex flex-col gap-10 pr-4">
                  {cart.map(({ areaPt, id, image, name, price }) => (
                    <div key={id} className="flex w-full gap-3 border-b pb-6">
                      <img
                        src={image}
                        alt={name}
                        className="w-32 h-32 object-cover rounded-md"
                      />
                      <div className="flex flex-col justify-between items-start w-full">
                        <div className="flex flex-col">
                          <h1 className="font-bold text-lg tracking-tight">
                            {name}
                          </h1>
                          <h3 className="text-sm font-light">{areaPt}</h3>
                        </div>
                        <div className="flex justify-between items-center w-full">
                          <h2 className="font-extrabold tracking-wider text-lg">
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
                <div className="flex w-full h-full justify-center items-start font-light">
                  <span className="mt-16">Seu carrinho está vazio.</span>
                </div>
              )}

              {cart.length > 0 ? (
                <div className="w-full flex flex-col items-center justify-center gap-3 mb-16">
                  <button
                    type="button"
                    onClick={finalizePurchase}
                    className="text-sm uppercase font-bold text-white py-2 bg-sky-400 rounded-md tracking-wide shadow-sm hover:shadow-lg w-4/5"
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
          <div
            className="bg-black opacity-60 w-screen h-screen fixed top-0 bottom-0 left-0 right-0 z-40 animation-opacity"
            onClick={() => setShowCart(!showCart)}
          />
        </>
      )}
    </>
  )
}
