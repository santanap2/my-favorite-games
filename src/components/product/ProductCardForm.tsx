'use server'

import React from 'react'
import ProductCardButton from './ProductCardButton'
import { UpdateUserCart } from '@/actions'
import { IServerSession } from '@/interfaces'

export default async function ProductCardForm({
  email,
  id,
  price,
  session,
}: {
  email: string
  id: number
  price: number
  session: IServerSession | null
}) {
  return (
    <form action={UpdateUserCart} id="product-card-form" className="w-full">
      <ProductCardButton
        email={email}
        id={id}
        price={price}
        session={session}
      />
    </form>
  )
}
