/* eslint-disable @next/next/no-img-element */

import { pageTitle } from '@/helpers'
import { IGameIDParams } from '@/interfaces'
import { getOneUserEvaluation } from '@/services/evaluations'
import { PencilSimpleLine } from '@phosphor-icons/react/dist/ssr'
import React from 'react'
import Link from 'next/link'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'
import { getServerSession } from 'next-auth'
import EditEvaluationForm from '@/components/general/EditEvaluationForm'

export default async function EditarAvaliacao({
  params: { id },
}: IGameIDParams) {
  const session = await getServerSession(nextAuthOptions)
  const email = session?.user?.email as string

  const { data } = await getOneUserEvaluation({ email, evaluationId: id })

  return (
    <div className="w-full h-full border-l border-neutral-800 pl-4 md:border-none md:pl-0">
      <title>{`Editar avaliação - ${pageTitle}`}</title>

      <div className=" w-full h-full flex flex-col gap-10 text-white sm:gap-6 xxl:justify-center xxl:items-center animation-opacity transition-all">
        <div className="flex flex-col gap-1 items-start justify-center w-full pb-5 border-b border-neutral-800">
          <div className="flex gap-1 items-center justify-center w-full">
            <div className="flex flex-col w-full h-full text-base">
              <span className="font-extrabold text-2xl sm:text-lg flex gap-2 items-center justify-center w-fit">
                <PencilSimpleLine weight="bold" className="text-3xl" />
                {`Editar avaliação: ${data.evaluation.product.name}`}
              </span>

              <span className="flex text-neutral-500 text-base sm:text-sm sm:mt-1">
                {`Altere as estrelas e a descrição da sua avaliação de ${data.evaluation.product.name}`}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex gap-6">
          <div className="flex w-full lg:flex-col justify-start gap-10">
            <Link
              href={`/game/${data.evaluation.product.id}`}
              className="text-xl tracking-wide font-light"
            >
              <img
                src={data.evaluation.product.image}
                alt={data.evaluation.product.name}
                className="w-[300px] h-[400px] rounded-md shadow-md object-cover md:w-72 md:h-96 min-w-[300px] md:min-w-[288px]"
              />
            </Link>

            <div className="w-full h-full px-2 flex flex-col justify-between items-start gap-4">
              <EditEvaluationForm
                email={email}
                evaluation={data.evaluation}
                id={id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
