'use client'

import { SmileySad } from '@phosphor-icons/react/dist/ssr'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function NotFoundPage() {
  const router = useRouter()

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-screen h-screen z-0 flex items-start justify-center">
      <h1 className="absolute -top-[40%] sm:-top-[5%] right-96 sm:-right-10 -rotate-12 text-[40rem] sm:text-[18rem] font-extrabold tracking-tighter text-emerald-500 opacity-5">
        404
      </h1>
      <h1 className="absolute top-[8%] sm:top-[20%] right-20 sm:-right-10 -rotate-12 text-[30rem] sm:text-[15rem] font-extrabold tracking-tighter text-emerald-500 opacity-5">
        404
      </h1>
      <h1 className="absolute top-[50%] sm:top-[42%] right-0 sm:-right-10 -rotate-12 text-[20rem] sm:text-[12rem] font-extrabold tracking-tighter text-emerald-500 opacity-5">
        404
      </h1>
      <h1 className="absolute top-1/10 sm:top-[60%] -right-3 sm:-right-10 -rotate-12 text-[40rem] sm:text-[9rem] font-extrabold tracking-tighter text-transparent sm:text-emerald-500 opacity-5">
        404
      </h1>
      <h1 className="absolute top-1/10 sm:top-[75%] -right-3 sm:-right-10 -rotate-12 text-[40rem] sm:text-[6rem] font-extrabold tracking-tighter text-transparent sm:text-emerald-500 opacity-5">
        404
      </h1>

      <div className="absolute bg-transparent w-full h-full" />
      <div className="mt-24 xxl:mt-20 sm:w-[95%] flex flex-col gap-10 items-center justify-start z-50">
        <div className="flex gap-1 w-full items-center justify-center">
          <SmileySad weight="duotone" className="text-emerald-600 text-5xl" />
          <h1 className="font-regular text-xl font-semibold">
            Página não encontrada.
          </h1>
        </div>
        <button
          type="button"
          onClick={() => router.push('/home')}
          className="bg-emerald-500 w-fit px-12 sm:w-full h-10 rounded shadow-md text-white hover:bg-emerald-600 hover:shadow-lg font-light cursor-pointer"
        >
          Retornar para a página inicial
        </button>
      </div>
    </div>
  )
}
