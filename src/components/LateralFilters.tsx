/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, {
  ChangeEvent,
  SyntheticEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { ICategory } from '@/interfaces'
import { CSSTransition } from 'react-transition-group'
import GamesPlatformContext from '@/context/Context'
import { useQuery } from '@tanstack/react-query'
import { getCategories } from '@/services/categories.requests'
import { currencyMask } from '@/helpers'
import { useRouter } from 'next/navigation'
import LateralFiltersSkeleton from './Skeletons/LateralFiltersSkeleton'
import { sortCategoriesByName } from '@/helpers/categories'

export default function LateralFilters() {
  const { showMenu } = useContext(GamesPlatformContext)
  const [formFilters, setFormFilters] = useState<string[]>([])
  const [formPrices, setFormPrices] = useState({
    minPrice: '',
    maxPrice: '',
  })
  const nodeRef = useRef(null)
  const router = useRouter()

  const {
    data: categoriesData,
    refetch: categoriesRefetch,
    isLoading: categoriesIsLoading,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => await getCategories(),
  })

  const orderedCategories =
    sortCategoriesByName(categoriesData?.data.data) || []

  const categoriesHandler = (name: string) => {
    if (formFilters.includes(name)) {
      const removeCategory = formFilters.filter((category) => category !== name)
      setFormFilters(removeCategory)
      return
    }
    setFormFilters([...formFilters, name])
  }

  const pricesHandler = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setFormPrices({ ...formPrices, [name]: value })
  }

  const formSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    const categories = formFilters.map((filter) => `${filter}=true`)

    const categoriesString =
      categories.length > 0 ? `${categories.join('&')}` : ''

    const pricesString = Object.entries(formPrices)
      .filter(([, value]) => value !== '')
      .map(([key, value]) => `${key}=${value}`)
      .join('&')

    const finalString =
      categoriesString.length > 0
        ? `${categoriesString}&${pricesString}`
        : pricesString

    router.push(`/home?${finalString}`)
  }

  useEffect(() => {
    setFormPrices({
      ...formPrices,
      minPrice: currencyMask(formPrices.minPrice),
    })
  }, [formPrices.minPrice])

  useEffect(() => {
    setFormPrices({
      ...formPrices,
      maxPrice: currencyMask(formPrices.maxPrice),
    })
  }, [formPrices.maxPrice])

  useEffect(() => {
    categoriesRefetch()
  }, [])

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={showMenu.filters}
      timeout={200}
      classNames="slide-menu"
      unmountOnExit
    >
      <aside
        className="w-56 fixed left-0 top-14 bottom-0 flex flex-col pt-6 h-full justify-between items-center bg-neutral-950 bg-opacity-90 border-r border-neutral-800 backdrop-blur-sm text-neutral-100 overflow-y-auto z-20"
        ref={nodeRef}
      >
        {categoriesIsLoading ? (
          <LateralFiltersSkeleton />
        ) : (
          <div className="flex flex-col items-center h-full justify-start w-full">
            <div className="w-full text-md font-bold flex gap-3 items-center justify-center px-6">
              <span>Filtre sua busca</span>
            </div>

            <div className="w-full px-6 mt-8 flex flex-col gap-12">
              <div>
                <h1 className="text-sm font-semibold">Tópico</h1>

                <form
                  onSubmit={formSubmit}
                  id="lateral-filters"
                  className="flex flex-col gap-3 mt-3"
                >
                  {orderedCategories.map(({ name, namePt }: ICategory) => (
                    <label
                      htmlFor={name}
                      key={name}
                      className="flex justify-start items-center gap-3 w-full hover:underline"
                    >
                      <input
                        id={name}
                        type="checkbox"
                        name={name}
                        onChange={() => categoriesHandler(name)}
                        value={name}
                      />
                      <span className="text-neutral-200 text-sm font-light">
                        {namePt}
                      </span>
                    </label>
                  ))}
                  <div className="flex flex-col gap-3 mt-5">
                    <h1 className="text-sm font-semibold">Preço</h1>
                    <label
                      htmlFor="min-price"
                      className="w-full flex items-center justify-center"
                    >
                      <span className="uppercase font-semibold text-xs w-10">
                        Min:
                      </span>
                      <input
                        id="min-price"
                        type="text"
                        name="minPrice"
                        placeholder="R$ 00,00"
                        className="w-32 rounded shadow-sm hover:shadow-md focus:outline-none focus:shadow-lg p-2 bg-neutral-700 placeholder:text-neutral-500"
                        onChange={(e) => pricesHandler(e)}
                        value={formPrices.minPrice}
                      />
                    </label>

                    <label
                      htmlFor="max-price"
                      className="0 w-full flex items-center justify-center"
                    >
                      <span className="uppercase font-semibold text-xs w-10">
                        Max:
                      </span>
                      <input
                        id="max-price"
                        name="maxPrice"
                        type="text"
                        placeholder="R$ 00,00"
                        className="w-32 rounded shadow-sm hover:shadow-md focus:outline-none focus:shadow-lg p-2 bg-neutral-700 placeholder:text-neutral-500"
                        onChange={(e) => pricesHandler(e)}
                        value={formPrices.maxPrice}
                      />
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <button
              type="submit"
              form="lateral-filters"
              className="w-52 bg-indigo-600 hover:bg-indigo-700 rounded p-2 font-regular text-sm shadow-sm hover:shadow-lg mt-12 font-light text-neutral-100 "
            >
              Filtrar
            </button>
          </div>
        )}
      </aside>
    </CSSTransition>
  )
}
