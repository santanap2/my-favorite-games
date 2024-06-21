/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'

import LateralMyAccount from '@/components/LateralMyAccount'
import { pageTitle } from '@/helpers'
import { IGameIDParams } from '@/interfaces'
import { getUserByToken } from '@/services'
import { getOneUserEvaluation, updateEvaluation } from '@/services/evaluations'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, Star, ThumbsUp, Warning } from '@phosphor-icons/react/dist/ssr'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Link from 'next/link'
import UpdateEvaluationSkeleton from '@/components/Skeletons/UpdateEvaluationSkeleton'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function EditarAvaliacao({ params: { id } }: IGameIDParams) {
  const [stars, setStars] = useState(0)
  const [loading, setLoading] = useState(false)
  const [evaluated, setEvaluated] = useState(false)
  const [response, setResponse] = useState({
    error: '',
    success: '',
  })

  const { error: userError } = useQuery({
    queryKey: ['userData'],
    queryFn: async () => await getUserByToken(),
    retry: false,
  })

  const {
    data: userEvaluationsData,
    isLoading: userEvaluationIsLoading,
    isFetched: userEvaluationIsFetched,
    refetch: userEvaluationsRefetch,
  } = useQuery({
    queryKey: ['userEvaluation'],
    queryFn: async () => await getOneUserEvaluation(id),
  })

  const formSchema = z.object({
    evaluation: z.object({
      description: z.string(),
    }),
  })

  type FormProps = z.infer<typeof formSchema>

  const { handleSubmit, register } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      evaluation: {
        description: userEvaluationsData?.data.data.description,
      },
    },
  })

  const handleFormSubmit = async (data: FormProps) => {
    const evaluation = {
      evaluationId: Number(id),
      stars,
      description: data.evaluation.description,
    }

    const response = await updateEvaluation(evaluation).catch((error) => {
      if (error) {
        setLoading(false)
        setResponse({ success: '', error: error.response.data.message })
      }
    })

    if (response && response.status === 200) {
      setLoading(false)
      setEvaluated(true)
      setResponse({ success: 'Avaliação atualizada com sucesso.', error: '' })
    }
  }

  useEffect(() => {
    userEvaluationsRefetch()
  }, [])

  useEffect(() => {
    if (userEvaluationIsFetched) setStars(userEvaluationsData?.data.data.stars)
  }, [userEvaluationIsFetched])

  return (
    <>
      {userError && null}
      {!userError &&
        (userEvaluationIsLoading ? (
          <UpdateEvaluationSkeleton />
        ) : (
          <div className="mt-24 xxl:mt-20 w-full h-full">
            <title>{`Editar avaliação - ${pageTitle}`}</title>
            <LateralMyAccount />

            <div className=" w-full h-full flex flex-col gap-10 text-white sm:gap-6 xxl:justify-center xxl:items-center animation-opacity transition-all">
              <div className="flex gap-1 w-full items-center justify-start relative">
                <ThumbsUp
                  weight="fill"
                  className="text-indigo-600 sm:text-3xl text-5xl"
                />
                <h1 className="font-regular text-xl font-semibold">
                  Editar avaliação
                </h1>
              </div>

              <div className="w-full flex flex-col gap-6">
                <div className="flex w-full sm:justify-start items-center gap-4">
                  <Link
                    href={`/game/${userEvaluationsData?.data.data.product.id}`}
                    className="text-xl tracking-wide font-light text-neutral-600"
                  >
                    <img
                      src={userEvaluationsData?.data.data?.product.image}
                      alt={userEvaluationsData?.data.data?.product.name}
                      className="rounded-md w-40 h-60 sm:w-24 sm:h-24 object-cover"
                    />
                  </Link>
                  <Link
                    href={`/game/${userEvaluationsData?.data.data.product.id}`}
                    className="text-xl tracking-wide font-light text-white hover:underline"
                  >
                    {userEvaluationsData?.data.data.product.name}
                  </Link>
                </div>

                <form
                  onSubmit={handleSubmit(handleFormSubmit)}
                  className="w-full bg-neutral-800 px-2 py-4 rounded-md shadow-md flex flex-col gap-4"
                >
                  <label className="flex flex-col gap-1">
                    <span className="text-sm tracking-wide font-semibold">
                      Quantas estrelas você dá para o produto:
                    </span>

                    <div className="flex items-center">
                      {new Array(5).fill('').map((_, index) => (
                        <Star
                          key={index}
                          weight={index < stars ? 'fill' : 'duotone'}
                          className={`${
                            index < stars
                              ? 'text-yellow-500'
                              : 'text-neutral-600'
                          } text-4xl cursor-pointer`}
                          onClick={() => setStars(index + 1)}
                        />
                      ))}

                      <span className="ml-4 text-white">{`( ${stars} )`}</span>
                    </div>
                  </label>

                  <label htmlFor="description" className="flex flex-col gap-1">
                    <span className="text-sm tracking-wide font-semibold">
                      Descreva sua experiência com o produto:
                    </span>
                    <textarea
                      {...register('evaluation.description')}
                      className="bg-neutral-700 border border-neutral-600 rounded-md px-2 py-1 w-full resize-none h-40 sm:h-80 md:h-60 focus:outline-none focus:shadow-md placeholder:text-neutral-500"
                      maxLength={500}
                      id="description"
                      placeholder={userEvaluationsData?.data.data.description}
                    />
                  </label>

                  <div className="flex gap-6 sm:flex-col sm:gap-4 sm:items-center">
                    {evaluated ? (
                      <Link href="/minha-conta/minhas-avaliacoes">
                        <button
                          type="button"
                          className={`p-2 sm:w-full w-64 ${
                            response.success
                              ? 'bg-indigo-600 hover:bg-indigo-700'
                              : 'bg-indigo-600 hover:bg-indigo-700'
                          } text-white font-light rounded-md shadow-md  transition-all flex items-center justify-center`}
                        >
                          Voltar para minhas avaliações
                        </button>
                      </Link>
                    ) : (
                      <button
                        type="submit"
                        className="p-2 sm:w-full w-64 bg-indigo-600 text-white font-light rounded-md shadow-md hover:bg-indigo-700 transition-all flex items-center justify-center"
                        onClick={() => setLoading(true)}
                      >
                        {loading ? <LoadingSpinner /> : 'Avaliar produto'}
                      </button>
                    )}

                    {response.error && (
                      <div className="flex gap-2 items-center justify-center w-fit">
                        <Warning
                          className="text-2xl text-red-500"
                          weight="duotone"
                        />
                        <p className="text-red-500 text-sm font-light">
                          {response.error}
                        </p>
                      </div>
                    )}

                    {response.success && (
                      <div className="flex gap-2 items-center justify-center w-fit">
                        <CheckCircle
                          className="text-2xl text-indigo-600"
                          weight="duotone"
                        />
                        <p className="text-indigo-600 text-sm font-light">
                          {response.success}
                        </p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}