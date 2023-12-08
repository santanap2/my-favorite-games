import React from 'react'
import { useRouter } from 'next/navigation'

export default function CreateAccount() {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-2 justify-center items-center sm:w-full">
      <div className="flex items-center justify-center gap-3 w-full">
        <div className="w-40 border-t sm:w-full" />
        <span className="font-light text-sm text-center sm:w-40">
          Novo na plataforma?
        </span>
        <div className="w-40 border-t sm:w-full" />
      </div>
      <button
        type="button"
        className="w-48 h-10 bg-orange-400 text-zinc-800 rounded-md text-sm font-light shadow hover:shadow-lg"
        onClick={() => router.push('/cadastro')}
      >
        Crie sua conta
      </button>
    </div>
  )
}
