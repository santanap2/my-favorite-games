import { ArrowUUpLeft } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React from 'react'

export default function NotFoundProducts() {
  return (
    <div className="w-full flex flex-col gap-6 justify-center items-center">
      <span className="w-full text-sm text-center animation-opacity transition-all text-white">
        Nenhum produto encontrado, tente novamente.
      </span>
      <Link href="/">
        <button
          type="button"
          className="flex gap-4 items-center justify-center p-4 py-2 bg-indigo-500 rounded-md text-sm font-bold text-white hover:bg-indigo-600 transition-all"
        >
          <ArrowUUpLeft className="text-xl" />
          <span>Voltar para a página inicial</span>
        </button>
      </Link>
    </div>
  )
}
