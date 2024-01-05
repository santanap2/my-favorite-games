import { EnvelopeSimple } from '@phosphor-icons/react'
import React from 'react'

export default function WelcomeUserSkeleton() {
  return (
    <div className="flex md:flex-col md:gap-1 gap-0 w-full relative">
      <span className="h-8 md:h-6 md:rounded rounded-l text-transparent loading-skeleton w-fit">
        Olaaaa
      </span>
      <span className="h-8 md:h-6 font-bold text-2xl lg:text-xl md:text-lg bg-zinc-100 md:rounded text-transparent loading-skeleton">
        Nome completo do usuário ocupando tudo
      </span>
      <span className="h-8 md:h-6 md:text-sm w-fit bg-zinc-100 md:rounded rounded-r text-transparent loading-skeleton">
        bem vindo(a) de volta!!!!!!!!
      </span>
      <h2 className="flex md:hidden text-sm font-light absolute -bottom-9 left-0">
        <EnvelopeSimple
          size={24}
          weight="fill"
          className="h-8 md:h-6 text-violet-500"
        />

        {/* {userIsLoading ? (
          <span className="h-8 md:h-6 text-transparent bg-zinc-200 rounded loading-skeleton flex items-center justify-center">
            emaildousuario@email.com
          </span>
        ) : (
          <span className="h-8 md:h-6 flex items-center justify-center">
            {userData?.data.data.email}
          </span>
        )} */}
      </h2>
    </div>
  )
}
