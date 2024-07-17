'use client'

import { Warning, Star, Check } from '@phosphor-icons/react/dist/ssr'
import React, { useState } from 'react'
import LoadingSpinner from './LoadingSpinner'
import { createEvaluation } from '@/services/evaluations'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Link from 'next/link'

export default function EvaluationForm({
  id,
  email,
}: {
  id: string
  email: string
}) {
  const [stars, setStars] = useState(5)
  const [loading, setLoading] = useState(false)
  const [evaluated, setEvaluated] = useState(false)
  const [response, setResponse] = useState({
    error: '',
    success: '',
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

    const response = await createEvaluation({ evaluation, email }).catch(
      (error) => {
        if (error) {
          setLoading(false)
          setResponse({ success: '', error: error.response.data.message })
          if (
            error.response.data.message ===
            'Você só pode avaliar um produto uma vez.'
          )
            setEvaluated(true)
        }
      },
    )

    if (response && response.status === 201) {
      setLoading(false)
      setEvaluated(true)
      setResponse({ success: 'Produto avaliado com sucesso.', error: '' })
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="w-full h-full px-2 flex flex-col justify-between items-start gap-4 text-stone-300"
    >
      <div className="flex flex-col gap-1 w-full">
        <label className="text-sm tracking-wide font-semibold">
          Quantas estrelas você dá para o produto:
        </label>

        <div className="flex items-center">
          {new Array(5).fill('').map((_, index) => (
            <Star
              key={index}
              weight={index < stars ? 'fill' : 'duotone'}
              className={`${
                index < stars ? 'text-amber-500' : 'text-stone-700'
              } text-2xl cursor-pointer`}
              onClick={() => setStars(index + 1)}
            />
          ))}

          <span className="ml-4">{`( ${stars} )`}</span>
        </div>
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label
          htmlFor="description"
          className="text-sm tracking-wide font-semibold"
        >
          Descreva sua experiência com o produto:
        </label>
        <textarea
          {...register('evaluation.description')}
          className="border border-stone-800 rounded-md p-2 w-full resize-none h-40 sm:h-80 md:h-60 focus:outline-none focus:shadow-md bg-stone-950 placeholder:text-stone-500"
          maxLength={500}
          id="description"
          placeholder="Escreva aqui sua avaliação"
        />
      </div>

      <div className="flex gap-6 sm:flex-col sm:gap-4 sm:items-center">
        {evaluated ? (
          <Link href="/minha-conta/minhas-avaliacoes">
            <button
              type="button"
              className={`p-2 sm:w-full w-full flex justify-center rounded-md bg-stone-300 px-12 py-1.5 text-sm font-semibold leading-6 text-stone-800 shadow-sm  transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-40`}
            >
              Voltar para minhas avaliações
            </button>
          </Link>
        ) : (
          <button
            type="submit"
            className="flex justify-center rounded-md bg-stone-300 px-12 py-1.5 text-sm font-semibold leading-6 text-stone-800 shadow-sm  transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-40"
            onClick={() => setLoading(true)}
          >
            {loading ? <LoadingSpinner /> : 'Avaliar produto'}
          </button>
        )}

        {response.error && (
          <div className="flex gap-2 items-center justify-center w-fit">
            <Warning className="text-2xl text-red-500" weight="duotone" />
            <p className="text-red-500 text-sm font-light">{response.error}</p>
          </div>
        )}

        {response.success && (
          <div className="flex gap-2 items-center justify-center w-fit">
            <Check className="text-2xl text-green-500" weight="regular" />
            <p className="text-green-500 text-sm font-light">
              {response.success}
            </p>
          </div>
        )}
      </div>
    </form>
  )
}
