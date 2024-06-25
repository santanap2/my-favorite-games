'use client'

import { emptyCart } from '@/services'
import { Trash } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export default function EmptyCartButton({
  sessionEmail,
}: {
  sessionEmail: string
}) {
  return (
    <button
      type="submit"
      form="empty-cart-form"
      onClick={async () => await emptyCart(sessionEmail)}
      className="mt-2 mb-6 text-xs cursor-pointer flex gap-1 items-center justify-center hover:text-indigo-600 font-normal w-fit transition-all"
    >
      <Trash className="text-xl" weight="regular" />
      <span>Esvaziar</span>
    </button>
  )
}
