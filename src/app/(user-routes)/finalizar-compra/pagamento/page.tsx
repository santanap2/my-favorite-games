import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'
import PaymentMethod from '@/components/general/PaymentMethod'
import { pageTitle } from '@/helpers'
import { getUserCart } from '@/services'
import { Wallet } from '@phosphor-icons/react/dist/ssr'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function Pagamento() {
  const session = await getServerSession(nextAuthOptions)
  const email = session?.user?.email as string

  const { data } = await getUserCart(email)

  return (
    <div className="mt-24 xxl:mt-20  w-4/5 flex flex-col gap-10 xxl:w-full sm:gap-6 animation-opacity transition-all text-zinc-300">
      <title>{`Pagamento - ${pageTitle}`}</title>

      <div className="flex flex-col gap-1 items-start justify-center w-full pb-5 border-b border-zinc-800">
        <div className="flex gap-1 items-center justify-center w-full">
          <div className="flex flex-col w-full h-full text-base">
            <span className="font-extrabold text-2xl sm:text-lg flex gap-2 items-center justify-center w-fit">
              <Wallet weight="bold" className="text-3xl" />
              Forma de pagamento
            </span>

            <span className="flex text-base sm:text-sm sm:mt-1">
              Escolha seu método de pagamento para finalizar seu pedido
            </span>
          </div>
        </div>
      </div>

      <PaymentMethod email={email} cart={data.cart} />
    </div>
  )
}
