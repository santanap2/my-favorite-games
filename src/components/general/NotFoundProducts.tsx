import { ArrowUUpLeft } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React from 'react'

export default function NotFoundProducts() {
  return (
    <div className="w-full flex flex-col gap-6 justify-center items-center">
      <span className="w-full text-sm text-center animation-opacity transition-all text-stone-300">
        Nenhum produto encontrado, tente novamente.
      </span>
      <Link
        href="/home/1"
        className="flex gap-4 items-center justify-center p-4 py-2 bg-stone-300 rounded-md text-sm font-bold text-stone-800  transition-all"
      >
        <ArrowUUpLeft className="text-xl" />
        <span>Voltar para a página inicial</span>
      </Link>
    </div>
  )
}
