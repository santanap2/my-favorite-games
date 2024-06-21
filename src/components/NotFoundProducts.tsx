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
          className="flex gap-3 items-center justify-center px-8 py-2 bg-indigo-400 rounded-md text-sm font-semibold uppercase tracking-wider text-white shadow-sm hover:shadow-lg sm:w-3/5 sm:font-semibold sm:text-sm sm:h-12"
        >
          <ArrowUUpLeft className="text-3xl" />

          <span>Voltar para a página inicial</span>
        </button>
      </Link>
    </div>
  )
}
