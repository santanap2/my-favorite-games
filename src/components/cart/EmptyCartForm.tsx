'use server'

import React from 'react'
import EmptyCartButton from './EmptyCartButton'
import { UpdateUserCart } from '@/actions'

export default async function EmptyCartForm({
  sessionEmail,
}: {
  sessionEmail: string
}) {
  return (
    <form action={UpdateUserCart} id="empty-cart-form">
      <EmptyCartButton sessionEmail={sessionEmail} />
    </form>
  )
}
