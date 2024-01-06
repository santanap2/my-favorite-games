import { ArrowFatUp, CheckFat, Trash } from '@phosphor-icons/react'
import React from 'react'

export default function PopUpFavorite({
  removeFavorite,
}: {
  removeFavorite: boolean
}) {
  return (
    <div className="bg-white px-4 py-3 text-slate-600 text-sm absolute shadow-md w-64 -bottom-16 right-0 rounded font-extrabold appear-animation opacity-animation flex items-center justify-center gap-2 z-50">
      <ArrowFatUp
        weight="fill"
        size={30}
        className="absolute -top-3 right-3 text-white"
      />
      {removeFavorite ? (
        <Trash size={24} weight="fill" />
      ) : (
        <CheckFat size={24} weight="fill" />
      )}
      <h1>
        {removeFavorite
          ? 'Removido dos favoritos'
          : 'Adicionado aos favoritos!'}
      </h1>
    </div>
  )
}
