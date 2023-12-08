import GamesPlatformContext from '@/context/Context'
import { creditCardMask, credCardDateMask, cvvMask } from '@/helpers'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function CredCardFormHooks() {
  const { cardData, setCardData } = useContext(GamesPlatformContext)

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

  return {
    handleSubmit,
    register,
    errors,
    handleFormSubmit,
  }
}
