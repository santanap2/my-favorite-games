'use server'

import React from 'react'
import AddToCartButton from './AddToCartButton'
import { UpdateUserCart } from '@/actions'

export default async function AddToCartForm({
  email,
  gameId,
}: {
  email: string
  gameId: string
}) {
  return (
    <form action={UpdateUserCart} id="add-to-cart-form">
      <AddToCartButton gameId={gameId} email={email} />
    </form>
  )
}
