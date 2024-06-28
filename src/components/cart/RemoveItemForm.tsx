'use server'

import React from 'react'
import RemoveItemButton from './RemoveItemButton'
import { UpdateUserCart } from '@/actions'

export default async function RemoveItemForm({
  userEmail,
  id,
}: {
  userEmail: string
  id: number
}) {
  return (
    <form action={UpdateUserCart} id="remove-item-form">
      <RemoveItemButton id={id} userEmail={userEmail as string} />
    </form>
  )
}
