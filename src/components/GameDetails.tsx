'use client'

import { CaretUp, CaretDown } from '@phosphor-icons/react/dist/ssr'
import React, { useState } from 'react'
import EvaluationsGame from './EvaluationsGame'
import { IEvaluation } from '@/interfaces'

export default function GameDetails({
  name,
  description,
  evaluations,
}: {
  id: string
  name: string
  description: string
  evaluations: IEvaluation[]
}) {
  const [expandMenus, setExpandMenus] = useState({
    description: true,
    evaluation: true,
  })

  const clickExpandMenu = (menu: string) => {
    if (menu === 'description')
      setExpandMenus({ ...expandMenus, description: !expandMenus.description })
    if (menu === 'evaluation')
      setExpandMenus({ ...expandMenus, evaluation: !expandMenus.evaluation })
  }

  return (
    <div className="mt-12 text-neutral-300 w-full flex flex-col gap-4">
      <div className="w-full border-b">
        <button
          className="tracking-wide flex gap-2 py-3 hover:underline sm:pb-2"
          onClick={() => clickExpandMenu('description')}
        >
          <span className="text-xl font-semibold sm:text-base">Descrição</span>
          {expandMenus.description ? (
            <CaretUp className="text-3xl" />
          ) : (
            <CaretDown className="text-3xl" />
          )}
        </button>
        {expandMenus.description && (
          <div className="tracking-wide pb-8">
            <h1 className=" font-normal text-lg sm:text-base">{name}</h1>
            <p className="font-light text-base sm:text-sm">{description}</p>
          </div>
        )}
      </div>

      <div className={`w-full ${!expandMenus.evaluation && 'border-b'}`}>
        <button
          className="tracking-wide flex gap-2 py-3 hover:underline sm:pb-2"
          onClick={() => clickExpandMenu('evaluation')}
        >
          <span className="text-xl font-semibold sm:text-base ">
            Avaliações
          </span>
          {expandMenus.evaluation ? (
            <CaretUp className="text-3xl" />
          ) : (
            <CaretDown className="text-3xl" />
          )}
        </button>
        {expandMenus.evaluation && (
          <EvaluationsGame evaluations={evaluations} />
        )}
      </div>
    </div>
  )
}
