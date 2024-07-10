'use client'

import { LinkSimple } from '@phosphor-icons/react'
import React from 'react'
import { toast } from 'sonner'

export default function ClipboardShare() {
  const handleCopy = () => {
    const url = window.location.href
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast('Link copiado para a área de transferência.', {
          style: {
            color: 'rgb(255 255 255)',
            display: 'flex',
          },
        })
      })
      .catch((err) => {
        console.error('Erro ao copiar o link: ', err)
      })
  }

  return (
    <button
      onClick={handleCopy}
      className="transition-all rounded-lg p-1 hover:scale-110 bg-neutral-200"
    >
      <LinkSimple size={20} className="text-neutral-950" />
    </button>
  )
}
