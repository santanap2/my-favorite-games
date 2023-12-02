import React from 'react'
import { courses } from '@/data/courses'
import { UserCircle, EnvelopeSimple } from '@phosphor-icons/react'
import Link from 'next/link'
import SingleOrder from './SingleOrder'
import UserOrderCard from './UserOrderCard'
import orders from '@/data/userOrders'

export default function LoggedUser() {
  const { orderNumber, price, status, date, payment, items } = orders[0]

  return (
    <div className="w-full h-full mt-24 flex flex-col items-start justify-start">
      <div className="w-full h-full flex flex-col gap-10 text-zinc-800 items-start">
        <div className="flex gap-1 items-start w-fit">
          <UserCircle weight="fill" size={56} className="text-sky-500" />
          <div className="flex flex-col">
            <h1 className="font-regular text-xl">
              Olá <strong className="font-bold text-2xl">Pedro Santana</strong>,
              bem vindo de volta!
            </h1>
            <h2 className="text-sm font-light flex">
              <EnvelopeSimple
                size={20}
                weight="fill"
                className="text-sky-500"
              />
              phsantana99@gmail.com
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold text-xl">
            Detalhes do seu último pedido
          </span>
          <SingleOrder
            key={orderNumber}
            orderNumber={orderNumber}
            price={price}
            date={date}
            payment={payment}
            status={status}
            items={items}
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="w-full flex justify-between items-center">
            <span className="font-semibold text-xl">Seus últimos pedidos</span>
            <Link
              href="/meus-pedidos"
              className="mr-44 font-semibold text-lg text-sky-400 hover:underline"
            >
              {' '}
              Ver todos
            </Link>
          </div>
          <div className="flex gap-8 w-fit pb-4 items-center">
            {courses.map(({ image, name, id }, i) => {
              if (i % 2 !== 0)
                return (
                  <UserOrderCard key={id} image={image} name={name} id={id} />
                )
              return ''
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
