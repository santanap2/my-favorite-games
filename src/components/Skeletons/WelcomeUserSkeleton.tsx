import { EnvelopeSimple } from '@phosphor-icons/react'
import React from 'react'

export default function WelcomeUserSkeleton() {
  return (
    <div className="flex md:flex-col md:gap-1 gap-0 w-full relative">
      <span className="h-8 md:h-6 md:rounded rounded-l text-transparent loading-skeleton w-fit">
        Oláááá
      </span>
      <span className="h-8 md:h-6 font-bold text-2xl lg:text-xl md:text-lg bg-zinc-100 md:rounded text-transparent loading-skeleton w-fit">
        Nome grande completo do usuário
      </span>
      <span className="h-8 md:h-6 md:text-sm w-fit bg-zinc-100 md:rounded rounded-r text-transparent loading-skeleton">
        bem vindo(a) de volta!!!!!!!!
      </span>
      <h2 className="flex md:hidden text-sm font-light absolute -bottom-9 left-0">
        <EnvelopeSimple
          size={24}
          weight="fill"
          className="h-8 md:h-6 text-slate-500"
        />

        <span className="h-8 md:h-6 text-transparent bg-zinc-200 rounded loading-skeleton flex items-center justify-center">
          emaildousuario@email.com
        </span>
      </h2>
    </div>
  )
}
