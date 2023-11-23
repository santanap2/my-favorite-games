import { useRouter } from 'next/navigation'
import React from 'react'

export default function ReturnLogin() {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div className="flex items-center justify-center gap-3">
        <div className="border-t w-32"></div>
        <span className="font-light text-sm">Retornar para o Login</span>
        <div className="border-t w-32"></div>
      </div>
      <button
        type="button"
        className="w-48 h-10 bg-orange-400 text-zinc-800 rounded-md text-sm font-regular shadow hover:shadow-lg"
        onClick={() => router.push('/login')}
      >
        Voltar
      </button>
    </div>
  )
}
