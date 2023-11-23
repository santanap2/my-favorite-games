/* eslint-disable @next/next/no-img-element */
import { IUserOrderCard } from '@/interfaces'
import Link from 'next/link'
import React from 'react'

export default function UserOrderCard({ image, name, id }: IUserOrderCard) {
  return (
    <Link href={`/meus-pedidos/${id}`}>
      <div className="bg-white rounded-3xl shadow-xl px-6 py-3 w-80 h-60 relative flex justify-center items-end hover:scale-105 transition-all">
        <img
          className="w-full absolute top-0 left-0 right-0 rounded-t-3xl h-40 object-cover"
          src={image}
          alt={name}
        />
        <span className="w-full text-md font-semibold mb-4">{name}</span>
      </div>
    </Link>
  )
}
