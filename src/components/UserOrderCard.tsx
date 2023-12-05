/* eslint-disable @next/next/no-img-element */
import { IUserOrderCard } from '@/interfaces'
import Link from 'next/link'
import React from 'react'

export default function UserOrderCard({
  image,
  name,
  orderId,
  productId,
  notBought,
}: IUserOrderCard) {
  return (
    <Link href={notBought ? `/curso/${productId}` : `/meus-pedidos/${orderId}`}>
      <div className="bg-white rounded-md shadow-md px-6 py-3 w-80 h-60 relative flex justify-center items-end hover:scale-105 transition-all">
        <img
          className="w-full absolute top-0 left-0 right-0 rounded-t-md h-40 object-cover"
          src={image}
          alt={name}
        />
        <span className="w-full text-md font-semibold mb-4">{name}</span>
      </div>
    </Link>
  )
}
