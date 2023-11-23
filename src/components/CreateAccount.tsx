import React from 'react'
import { useRouter } from 'next/navigation'

export default function CreateAccount() {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div className="flex items-center justify-center gap-3">
        <div className="border-t w-32"></div>
        <span className="font-light text-sm">Novo na plataforma?</span>
        <div className="border-t w-32"></div>
      </div>
      <button
        type="button"
        className="w-48 h-10 bg-orange-400 text-zinc-800 rounded-md text-sm font-regular shadow hover:shadow-lg"
        onClick={() => router.push('/cadastro')}
      >
        Crie sua conta
      </button>
    </div>
  )
}
