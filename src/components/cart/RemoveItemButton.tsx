'use client'

import { removeItemFromCart } from '@/services'
import { MinusCircle } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export default function RemoveItemButton({
  userEmail,
  id,
}: {
  userEmail: string
  id: number
}) {
  return (
    <button
      type="submit"
      form="remove-item-form"
      className="text-xs font-sm font-semibold hover:text-indigo-600 flex items-center justify-center space-x-1"
      onClick={async () => {
        await removeItemFromCart({
          email: userEmail as string,
          gameId: id.toString(),
        })
      }}
    >
      <MinusCircle weight="fill" size={18} />
      <span>Remover</span>
    </button>
  )
}
