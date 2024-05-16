/* eslint-disable react-hooks/exhaustive-deps */
'use client'

/* eslint-disable @next/next/no-img-element */
import LateralMyAccount from '@/components/LateralMyAccount'
import LoadingSpinner from '@/components/LoadingSpinner'
import UpdateEvaluationSkeleton from '@/components/Skeletons/UpdateEvaluationSkeleton'
import { pageTitle } from '@/helpers'
import { IGameIDParams } from '@/interfaces'
import { getUserByToken } from '@/services'
import { createEvaluation } from '@/services/evaluations'
import { getGame } from '@/services/games.requests'
import { zodResolver } from '@hookform/resolvers/zod'
import { ThumbsUp, Star, Warning, CheckCircle } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { redirect, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function AvaliarProduto({ params: { id } }: IGameIDParams) {
  const [stars, setStars] = useState(5)
  const [loading, setLoading] = useState(false)
  const [evaluated, setEvaluated] = useState(false)
  const [response, setResponse] = useState({
    error: '',
    success: '',
  })

  const router = useRouter()

  const { isFetched: userIsFetched, error: userError } = useQuery({
    queryKey: ['userData'],
    queryFn: async () => await getUserByToken(),
    retry: false,
  })

  if (
    userIsFetched &&
    userError &&
    userError.message === 'Request failed with status code 401'
  )
    redirect('/login')

  const {
    data: gameData,
    isLoading: gameIsLoading,
    refetch: gameRefetch,
  } = useQuery({
    queryKey: ['game'],
    queryFn: async () => await getGame(id),
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
        description: '',
      },
    },
  })

  const handleFormSubmit = async (data: FormProps) => {
    const evaluation = {
      productId: Number(id),
      stars,
      description: data.evaluation.description,
    }

    const response = await createEvaluation(evaluation).catch((error) => {
      if (error) {
        setLoading(false)
        setResponse({ success: '', error: error.response.data.message })
        if (
          error.response.data.message ===
          'Você só pode avaliar um produto uma vez.'
        )
          setEvaluated(true)
      }
    })

    if (response && response.status === 201) {
      setLoading(false)
      setEvaluated(true)
      setResponse({ success: 'Produto avaliado com sucesso.', error: '' })
    }
  }

  useEffect(() => {
    gameRefetch()
  }, [])

  return (
    <>
      {userError && null}
      {!userError &&
        (gameIsLoading ? (
          <UpdateEvaluationSkeleton />
        ) : (
          <div className="mt-24 xxl:mt-20 w-full h-full animation-opacity transition-all">
            <title>{`Avaliar produto - ${pageTitle}`}</title>
            <LateralMyAccount />

            <div className=" w-full h-full flex flex-col gap-10 text-zinc-800 sm:gap-6 xxl:justify-center xxl:items-center animation-opacity transition-all">
              <div className="flex gap-1 w-full items-center justify-start relative">
                <ThumbsUp
                  weight="fill"
                  className="text-rose-500 sm:text-3xl text-5xl"
                />
                <h1 className="font-regular text-xl font-semibold">
                  Avaliar produto
                </h1>
              </div>

              <div className="w-full flex flex-col gap-6">
                <div className="flex w-full sm:justify-start items-center gap-4">
                  <Link
                    href={`/game/${gameData?.data.data.id}`}
                    className="text-xl tracking-wide font-light text-zinc-600"
                  >
                    <img
                      src={gameData?.data.data.image}
                      alt={gameData?.data.data.name}
                      className="rounded w-40 h-40 sm:w-24 sm:h-24 object-cover"
                    />
                  </Link>
                  <Link
                    href={`/game/${gameData?.data.data.id}`}
                    className="text-xl tracking-wide font-light text-zinc-600 hover:underline"
                  >
                    {gameData?.data.data.name}
                  </Link>
                </div>

                <form
                  onSubmit={handleSubmit(handleFormSubmit)}
                  className="w-full bg-white px-2 py-4 rounded shadow-md flex flex-col gap-4"
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
                            index < stars ? 'text-yellow-400' : 'text-zinc-200'
                          } text-4xl cursor-pointer`}
                          onClick={() => setStars(index + 1)}
                        />
                      ))}

                      <span className="ml-4 text-zinc-500">{`( ${stars} )`}</span>
                    </div>
                  </label>

                  <label htmlFor="description" className="flex flex-col gap-1">
                    <span className="text-sm tracking-wide font-semibold">
                      Descreva sua experiência com o produto:
                    </span>
                    <textarea
                      {...register('evaluation.description')}
                      className="border rounded px-2 py-1 w-full resize-none h-40 sm:h-80 md:h-60 focus:outline-none focus:shadow-md"
                      maxLength={500}
                      id="description"
                      placeholder="Escreva aqui sua avaliação"
                    />
                  </label>

                  <div className="flex gap-6 sm:flex-col sm:gap-4 sm:items-center">
                    {evaluated ? (
                      <button
                        type="button"
                        className={`p-2 sm:w-full w-64 ${
                          response.success
                            ? 'bg-rose-500 hover:bg-rose-600'
                            : 'bg-rose-500 hover:bg-rose-600'
                        } text-white font-light rounded shadow-md  transition-all flex items-center justify-center`}
                        onClick={() =>
                          router.push('/minha-conta/minhas-avaliacoes')
                        }
                      >
                        Voltar para minhas avaliações
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="p-2 sm:w-full w-64 bg-rose-500 text-white font-light rounded shadow-md hover:bg-rose-600 transition-all flex items-center justify-center"
                        onClick={() => setLoading(true)}
                      >
                        {loading ? <LoadingSpinner /> : 'Avaliar produto'}
                      </button>
                    )}

                    {response.error && (
                      <div className="flex gap-2 items-center justify-center w-fit">
                        <Warning
                          className="text-2xl text-rose-500"
                          weight="duotone"
                        />
                        <p className="text-rose-500 text-sm font-light">
                          {response.error}
                        </p>
                      </div>
                    )}

                    {response.success && (
                      <div className="flex gap-2 items-center justify-center w-fit">
                        <CheckCircle
                          className="text-2xl text-rose-500"
                          weight="duotone"
                        />
                        <p className="text-rose-500 text-sm font-light">
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
