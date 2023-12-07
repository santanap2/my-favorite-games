import CoursesPlatformContext from '@/context/Context'
import { courses } from '@/data/courses'
import { currencyMask } from '@/helpers'
import { ICartItem } from '@/interfaces'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function LateralFilterHooks() {
  const { setFilteredProducts } = useContext(CoursesPlatformContext)

  const formSchema = z.object({
    lateralFilters: z.object({
      arquitecture: z.boolean(),
      fisiotherapy: z.boolean(),
      financialEducation: z.boolean(),
      entrepreneurship: z.boolean(),
      civilEngeneering: z.boolean(),
      audiovisual: z.boolean(),
      programming: z.boolean(),
      marketing: z.boolean(),
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
        arquitecture: false,
        fisiotherapy: false,
        financialEducation: false,
        entrepreneurship: false,
        civilEngeneering: false,
        audiovisual: false,
        programming: false,
        marketing: false,
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

  return {
    handleSubmit,
    register,
    handleFormSubmit,
  }
}
