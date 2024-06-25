import { EnvelopeSimple } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export default function WelcomeUserSkeleton() {
  return (
    <div className="flex md:flex-col md:gap-1 gap-0 w-full relative animation-opacity transition-all">
      <span className="h-8 md:h-6 md:rounded-md rounded-l-md text-transparent loading-skeleton w-fit">
        Oláááá
      </span>
      <span className="h-8 md:h-6 font-bold text-2xl lg:text-xl md:text-lg bg-neutral-100 md:rounded-md text-transparent loading-skeleton w-fit">
        Nome grande completo do usuário
      </span>
      <span className="h-8 md:h-6 md:text-sm w-fit bg-neutral-100 md:rounded-md rounded-r-md text-transparent loading-skeleton">
        bem vindo(a) de volta!!!!!!!!
      </span>
      <h2 className="flex md:hidden text-sm font-light absolute -bottom-9 left-0">
        <EnvelopeSimple
          weight="fill"
          className="h-8 md:h-6 text-indigo-600 text-2xl"
        />

        <span className="h-8 md:h-6 text-transparent bg-neutral-200 rounded-md loading-skeleton flex items-center justify-center">
          emaildousuario@email.com
        </span>
      </h2>
    </div>
  )
}