'use client'

import GamesPlatformContext from '@/context/Context'
import { currencyMask } from '@/helpers'
import { IGamesGenres } from '@/interfaces'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function LateralFilterHooks() {
  const { screenSize, setShowMenu } = useContext(GamesPlatformContext)

  const formSchema = z.object({
    lateralFilters: z.object({
      actionAdventure: z.boolean(),
      rpgOpenWorld: z.boolean(),
      rpgTurnBased: z.boolean(),
      actionTerror: z.boolean(),
      fps: z.boolean(),
      survivalHorror: z.boolean(),
      racing: z.boolean(),
      actionRhythm: z.boolean(),
      minPrice: z.string(),
      maxPrice: z.string(),
    }),
  })

  type FormProps = z.infer<typeof formSchema>

  const { handleSubmit, register, setValue, watch } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      lateralFilters: {
        actionAdventure: false,
        rpgOpenWorld: false,
        rpgTurnBased: false,
        actionTerror: false,
        fps: false,
        minPrice: '',
        maxPrice: '',
      },
    },
  })

  const router = useRouter()

  const handleFormSubmit = async (data: FormProps) => {
    const filters: Record<string, string | boolean> = data.lateralFilters

    const stringFilters: Record<string, string> = {}
    Object.keys(filters).forEach((key) => {
      stringFilters[key] = filters[key].toString()
    })

    const queryParams = new URLSearchParams(stringFilters).toString()

    if (screenSize < 1280) setShowMenu({ filters: false, myAccount: false })
    router.push(`/home?${queryParams}`)
  }

  const minPrice = watch('lateralFilters.minPrice')
  const maxPrice = watch('lateralFilters.maxPrice')

  useEffect(() => {
    setValue('lateralFilters.minPrice', currencyMask(minPrice))
  }, [minPrice, setValue])

  useEffect(() => {
    setValue('lateralFilters.maxPrice', currencyMask(maxPrice))
  }, [maxPrice, setValue])

  function sortByName(a: IGamesGenres, b: IGamesGenres) {
    const nomeA = a.name.toUpperCase()
    const nomeB = b.name.toUpperCase()

    if (nomeA < nomeB) return -1
    if (nomeA > nomeB) return 1
    return 0
  }

  return {
    handleSubmit,
    register,
    handleFormSubmit,
    sortByName,
  }
}
