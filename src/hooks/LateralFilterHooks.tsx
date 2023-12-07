import CoursesPlatformContext from '@/context/Context'
import { courses } from '@/data/courses'
import { currencyMask } from '@/helpers'
import { ICartItem, IGamesGenres } from '@/interfaces'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function LateralFilterHooks() {
  const { setFilteredProducts } = useContext(CoursesPlatformContext)

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

  const changedFilters = ({ lateralFilters }: FormProps) => {
    const keys = Object.keys(lateralFilters)
    const values = Object.values(lateralFilters)
    const result = keys.filter((_key, index) => values[index] === true)
    return result
  }

  const router = useRouter()

  function filterCourses(
    courses: ICartItem[],
    area: string[],
    minPrice: number | string,
    maxPrice: number | string,
  ) {
    const minPriceNumber = minPrice === '' ? null : Number(minPrice)
    const maxPriceNumber = maxPrice === '' ? null : Number(maxPrice)

    const cursosFiltrados = courses.filter((curso: ICartItem) => {
      const areaCondition = area.length === 0 || area.includes(curso.area)
      const minPriceCondition =
        minPriceNumber === null || curso.price >= minPriceNumber
      const maxPriceCondition =
        maxPriceNumber === null || curso.price <= maxPriceNumber

      return areaCondition && minPriceCondition && maxPriceCondition
    })

    return cursosFiltrados
  }

  const handleFormSubmit = (data: FormProps) => {
    const filters = changedFilters(data)

    const filteredCourses = filterCourses(
      courses,
      filters,
      data.lateralFilters.minPrice,
      data.lateralFilters.maxPrice,
    )

    setFilteredProducts(filteredCourses)

    router.push('/home')
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
