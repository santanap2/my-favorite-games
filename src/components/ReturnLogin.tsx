import GamesPlatformContext from '@/context/Context'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

export default function ReturnLogin() {
  const { setRegisterSuccess } = useContext(GamesPlatformContext)
  const router = useRouter()

  return (
    <div className="flex flex-col gap-2 justify-center items-center sm:w-full">
      <div className="flex items-center justify-center gap-3 w-full">
        <div className="w-40 border-t " />
        <span className="font-light text-sm text-center sm:w-40">
          Retornar para o Login
        </span>
        <div className="w-40 border-t " />
      </div>
      <button
        type="button"
        className="w-48 h-10 bg-orange-400 text-zinc-800 rounded-md text-sm font-light shadow hover:shadow-lg"
        onClick={() => {
          setRegisterSuccess(false)
          router.push('/login')
        }}
      >
        Voltar
      </button>
    </div>
  )
}
