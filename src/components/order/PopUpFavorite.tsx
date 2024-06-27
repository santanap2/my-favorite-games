import { ArrowFatUp, CheckFat, Trash } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export default function PopUpFavorite({
  removeFavorite,
}: {
  removeFavorite: boolean
}) {
  return (
    <div className="bg-neutral-700 px-4 py-3 text-indigo-700 text-sm absolute shadow-md w-64 -bottom-16 right-0 rounded-md font-extrabold appear-animation opacity-animation flex items-center justify-center gap-2 z-50 animation-opacity transition-all">
      <ArrowFatUp
        weight="fill"
        className="absolute -top-3 right-3 text-neutral-700 text-3xl"
      />
      {removeFavorite ? (
        <Trash className="text-2xl" weight="fill" />
      ) : (
        <CheckFat className="text-2xl" weight="fill" />
      )}
      <h1>
        {removeFavorite
          ? 'Removido dos favoritos'
          : 'Adicionado aos favoritos!'}
      </h1>
    </div>
  )
}
