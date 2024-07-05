'use client'

import { CaretUp, CaretDown, Star } from '@phosphor-icons/react'
import React, { useState } from 'react'
import EvaluationsGame from './EvaluationsGame'
import { IEvaluation } from '@/interfaces'

export default function GameEvaluations({
  evaluations,
}: {
  evaluations: IEvaluation[]
}) {
  const [expandEvaluationMenu, setExpandEvaluationMenu] = useState(true)

  const starsAverage =
    evaluations.reduce((total, evaluation) => total + evaluation.stars, 0) /
    evaluations.length

  return (
    <div className="w-full mt-10 text-white border-t border-neutral-700 py-6">
      <button
        className="tracking-wide flex gap-2 hover:underline"
        onClick={() => setExpandEvaluationMenu(!expandEvaluationMenu)}
      >
        <span className="flex items-center space-x-3 text-base font-semibold sm:text-base">
          <span>{`Avaliações (${evaluations.length})`}</span>
          <span className="flex">
            {new Array(5).fill('').map((_item, index) => (
              <Star
                key={index}
                weight="fill"
                className={`text-xl ${index < Math.floor(starsAverage) ? 'text-yellow-600' : 'text-neutral-800'}`}
              />
            ))}
            <span className="ml-2 text-sm font-normal text-neutral-400 hover:no-underline">{`(${evaluations.length === 0 ? '0' : starsAverage.toFixed(1)})`}</span>
          </span>
        </span>
        {expandEvaluationMenu ? (
          <CaretUp className="text-xl" />
        ) : (
          <CaretDown className="text-xl" />
        )}
      </button>
      {expandEvaluationMenu && <EvaluationsGame evaluations={evaluations} />}
    </div>
  )
}
