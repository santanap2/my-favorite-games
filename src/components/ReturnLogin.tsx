import CoursesPlatformContext from '@/context/Context'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

export default function ReturnLogin() {
  const { setRegisterSuccess } = useContext(CoursesPlatformContext)
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
