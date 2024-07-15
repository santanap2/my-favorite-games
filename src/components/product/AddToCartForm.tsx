'use server'

import React from 'react'
import AddToCartButton from './AddToCartButton'
import { UpdateUserCart } from '@/actions'
import { IServerSession } from '@/interfaces'

export default async function AddToCartForm({
  email,
  gameId,
  session,
}: {
  email: string
  gameId: string
  session: IServerSession | null
}) {
  return (
    <form action={UpdateUserCart} id="add-to-cart-form">
      <AddToCartButton gameId={gameId} email={email} session={session} />
    </form>
  )
}
