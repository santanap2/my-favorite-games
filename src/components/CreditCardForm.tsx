'use client'

import CoursesPlatformContext from '@/context/Context'
import {
  calcSum,
  credCardDateMask,
  creditCardMask,
  cvvMask,
  priceToBRL,
} from '@/helpers'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function CreditCardForm() {
  const { cart, cardData, setCardData } = useContext(CoursesPlatformContext)

  const formSchema = z.object({
    cardData: z.object({
      cardNumber: z
        .string()
        .min(16, 'Informe um numero de cartão válido')
        .max(19, 'Informe um numero de cartão válido'),
      cardName: z
        .string()
        .min(1, 'Informe o nome presente no cartão de crédito'),
      cardDate: z
        .string()
        .min(4, 'Informe uma data de vencimento válida')
        .max(5, 'Informe uma data de vencimento válida'),
      cardCvv: z
        .string()
        .min(3, 'Informe um numero de cartão válido')
        .max(3, 'Informe um numero de cartão válido'),
      cardPortions: z.string(),
    }),
  })

  type FormProps = z.infer<typeof formSchema>
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardData: {
        cardNumber: '',
        cardName: '',
        cardDate: '',
        cardCvv: '',
        cardPortions: '1',
      },
    },
  })

  const handleFormSubmit = (data: FormProps) => {
    console.log('enviou')
    setCardData(data)
    console.log(cardData)
  }
  const cardNumberValue = watch('cardData.cardNumber')
  const cardNameValue = watch('cardData.cardName')
  const cardDateValue = watch('cardData.cardDate')
  const cardCvvValue = watch('cardData.cardCvv')

  useEffect(() => {
    setValue('cardData.cardNumber', creditCardMask(cardNumberValue))
  }, [cardNumberValue, setValue])

  useEffect(() => {
    setValue('cardData.cardName', cardNameValue.toLocaleUpperCase())
  }, [cardNameValue, setValue])

  useEffect(() => {
    setValue('cardData.cardDate', credCardDateMask(cardDateValue))
  }, [cardDateValue, setValue])

  useEffect(() => {
    setValue('cardData.cardCvv', cvvMask(cardCvvValue))
  }, [cardCvvValue, setValue])

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      action=""
      className="flex flex-col gap-6 cursor-default appear-animation"
      id="creditCardForm"
    >
      <label htmlFor="card-number" className="w-full relative">
        <input
          {...register('cardData.cardNumber')}
          type="text"
          id="card-number"
          placeholder="0000 0000 0000 0000"
          maxLength={19}
          className="relative rounded-md w-full border border-sky-400 bg-zinc-50 focus:shadow-md focus:outline-none px-4 pt-4 pb-3 text-md font-light"
        />
        {errors.cardData?.cardNumber && (
          <span className="text-sm font-light text-red-500">
            {errors.cardData.cardNumber.message}
          </span>
        )}
        <span className="absolute w-fit -top-2 text-xs left-4 z-0 bg-zinc-50 font-light py-[2px] px-1 text-zinc-500">
          Número do cartão *
        </span>
      </label>

      <label htmlFor="card-name" className="w-full relative">
        <input
          {...register('cardData.cardName')}
          id="card-name"
          type="text"
          placeholder="Digite seu nome"
          className="relative rounded-md w-full border border-sky-400 bg-zinc-50 focus:shadow-lg focus:outline-none px-4 pt-4 pb-3 text-md font-light"
        />
        {errors.cardData?.cardName && (
          <span className="text-sm font-light text-red-500">
            {errors.cardData.cardName.message}
          </span>
        )}
        <span className="absolute w-fit -top-2 text-xs left-4 z-0 bg-zinc-50 font-light py-[2px] px-1 text-zinc-500">
          Nome impresso no cartão *
        </span>
      </label>

      <div className="w-full flex items-start justify-between">
        <label htmlFor="card-date" className="w-[47.5%] relative">
          <input
            {...register('cardData.cardDate')}
            id="card-date"
            type="text"
            maxLength={5}
            placeholder="MM/AA"
            className="relative rounded-md w-full border border-sky-400 bg-zinc-50 focus:shadow-lg focus:outline-none px-4 pt-4 pb-3 text-md font-light"
          />
          {errors.cardData?.cardDate && (
            <span className="text-sm font-light text-red-500">
              {errors.cardData.cardDate.message}
            </span>
          )}
          <span className="absolute w-fit -top-2 text-xs left-4 z-0 bg-zinc-50 font-light py-[2px] px-1 text-zinc-500">
            Data do vencimento *
          </span>
        </label>

        <label htmlFor="card-cvv" className="w-[47.5%] relative">
          <input
            {...register('cardData.cardCvv')}
            id="card-cvv"
            type="text"
            maxLength={3}
            placeholder="000"
            className="relative rounded-md w-full border border-sky-400 bg-zinc-50 focus:shadow-lg focus:outline-none px-4 pt-4 pb-3 text-md font-light"
          />
          {errors.cardData?.cardCvv && (
            <span className="text-sm font-light text-red-500">
              {errors.cardData.cardCvv.message}
            </span>
          )}
          <span className="absolute w-fit -top-2 text-xs left-4 z-0 bg-zinc-50 font-light py-[2px] px-1 text-zinc-500">
            Código de verificação (CVV) *
          </span>
        </label>
      </div>

      <label htmlFor="card-portions" className="w-full relative">
        <select
          {...register('cardData.cardPortions')}
          id="card-portions"
          placeholder="1x de R$ 499,90"
          className="relative rounded-md w-full border border-sky-400 bg-zinc-50 focus:shadow-lg focus:outline-none px-4 pt-4 pb-3 text-md font-light"
        >
          <option value="1" className="rounded-md py-4 h-10">
            {`À vista por R$ ${priceToBRL(calcSum(cart).number)}`}
          </option>

          <option value="2" className="rounded-md py-">
            {`2x sem juros de R$ ${priceToBRL(calcSum(cart).number / 2)}`}
          </option>

          <option value="3" className="rounded-md py-">
            {`3x sem juros de R$ ${priceToBRL(calcSum(cart).number / 3)}`}
          </option>
        </select>
        <span className="absolute w-fit -top-2 text-xs left-4 z-0 bg-zinc-50 font-light py-[2px] px-1 text-zinc-500">
          Parcelamento
        </span>
      </label>
    </form>
  )
}
