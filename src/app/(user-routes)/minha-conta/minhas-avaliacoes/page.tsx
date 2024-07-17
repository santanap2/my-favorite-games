import { pageTitle } from '@/helpers'
import { ThumbsUp } from '@phosphor-icons/react/dist/ssr'
import React from 'react'
import MyEvaluationsForm from '@/components/general/MyEvaluationsForm'
import { getUserEvaluations } from '@/services/evaluations'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'
import { getServerSession } from 'next-auth'
import AllEvaluations from '@/components/general/AllEvaluations'
import { getBoughtProducts } from '@/services/orders.requests'

export default async function MinhasAvaliacoes() {
  const session = await getServerSession(nextAuthOptions)
  const email = session?.user?.email as string

  const { data } = await getUserEvaluations(email)
  const { data: boughtProductsData } = await getBoughtProducts(email)

  return (
    <div className="w-full h-full  border-l border-stone-800 pl-4 md:border-none md:pl-0 text-stone-300">
      <title>{`Minhas avaliações - ${pageTitle}`}</title>

      <div className=" w-full h-full flex flex-col gap-10 sm:gap-6 xxl:justify-center xxl:items-center animation-opacity transition-all">
        <div className="flex flex-col gap-1 items-start justify-center w-full pb-5 border-b border-stone-800">
          <div className="flex gap-1 items-center justify-center w-full">
            <div className="flex flex-col w-full h-full text-base">
              <span className="font-extrabold text-2xl sm:text-lg flex gap-2 items-center justify-center w-fit">
                <ThumbsUp weight="bold" className="text-3xl" />
                Minhas avaliações
              </span>

              <span className="flex text-base sm:text-sm sm:mt-1">
                Confira todas as avaliações que você fez e ainda pendentes
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <MyEvaluationsForm />

          <div className="w-full grid grid-cols-2 gap-6 xl:grid-cols-1 lg:gap-2">
            <AllEvaluations
              boughtGames={boughtProductsData.boughtGames}
              evaluations={data?.evaluations}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
