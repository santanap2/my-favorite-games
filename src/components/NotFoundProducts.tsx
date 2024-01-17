import { ArrowUUpLeft } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function NotFoundProducts() {
  const router = useRouter()

  return (
    <div className="w-full flex flex-col gap-6 justify-center items-center">
      <span className="w-full text-sm text-center animation-opacity transition-all">
        Nenhum produto encontrado, tente novamente.
      </span>

      <button
        type="button"
        onClick={() => router.push('/')}
        className="flex gap-3 items-center justify-center px-8 py-2 bg-slate-400 rounded text-sm font-semibold uppercase tracking-wider text-white shadow-sm hover:shadow-lg sm:w-3/5 sm:font-semibold sm:text-sm sm:h-12"
      >
        <ArrowUUpLeft className="text-3xl" />

        <span>Voltar para a página inicial</span>
      </button>
    </div>
  )
}
