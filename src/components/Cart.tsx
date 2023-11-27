/* eslint-disable @next/next/no-img-element */
import CoursesPlatformContext from '@/context/Context'
import { X } from '@phosphor-icons/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

export default function Cart() {
  const { showCart, setShowCart, cart, setCart } = useContext(
    CoursesPlatformContext,
  )

  const removeItemCart = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
  }

  const router = useRouter()

  const calcSum = () => {
    let initialSum = 0
    console.log(cart)
    cart.forEach(({ price }) => (initialSum += price))
    return initialSum.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
    })
  }

  return (
    <aside className="fixed z-50 right-0 top-0 bottom-0 min-h-screen w-[480px] bg-zinc-100 py-6 pl-6 slideshow shadow-2xl flex flex-col justify-start items-center gap-8">
      <div className="flex w-full justify-between pr-4 items-center">
        <h1 className="uppercase tracking-wider font-bold text-sm">Carrinho</h1>
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
            {cart.map(({ area, id, image, name, price }) => (
              <div key={id} className="flex w-full gap-3 border-b pb-6">
                <img
                  src={image}
                  alt={name}
                  className="w-32 h-32 object-cover rounded"
                />
                <div className="flex flex-col justify-between items-start">
                  <h1 className="font-bold text-sm tracking-tight">{name}</h1>
                  <h3>{area}</h3>
                  <div className="flex justify-between items-center w-full">
                    <h2 className="font-extrabold tracking-wider text-lg">
                      {`R$ ${price.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                      })}`}
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
            <Link href="/finalizar-compra" className="w-4/5">
              <button
                type="button"
                className="text-sm uppercase font-bold text-white w-full py-2 bg-sky-400 rounded tracking-wide shadow-sm hover:shadow-lg"
              >
                {`Finalizar compra -  R$ ${calcSum()}`}
              </button>
            </Link>

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
  )
}
