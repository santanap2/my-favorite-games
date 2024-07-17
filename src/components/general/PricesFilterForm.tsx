/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import GamesPlatformContext from '@/context/Context'
import { currencyMask } from '@/helpers'
import { ISearchParams } from '@/interfaces'
import { useRouter } from 'next/navigation'
import React, {
  ChangeEvent,
  SyntheticEvent,
  useContext,
  useEffect,
  useState,
} from 'react'

export default function PricesFilterForm({ searchParams }: ISearchParams) {
  const { showMenu, setShowMenu } = useContext(GamesPlatformContext)
  const [formPrices, setFormPrices] = useState({
    minPrice: '',
    maxPrice: '',
  })
  const router = useRouter()
  const queryParams = new URLSearchParams(searchParams).toString()

  const pricesHandler = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setFormPrices({ ...formPrices, [name]: value })
  }

  const formSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    const currentParams = new URLSearchParams(queryParams.toString())

    if (formPrices.minPrice) {
      currentParams.set('minPrice', formPrices.minPrice)
    } else {
      currentParams.delete('minPrice')
    }

    if (formPrices.maxPrice) {
      currentParams.set('maxPrice', formPrices.maxPrice)
    } else {
      currentParams.delete('maxPrice')
    }

    router.push(`/home?${currentParams.toString()}`)
    setShowMenu({ ...showMenu, filters: !showMenu.filters })
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
    const currentParams = new URLSearchParams(queryParams.toString())
    const minPrice = currentParams.get('minPrice') || ''
    const maxPrice = currentParams.get('maxPrice') || ''
    setFormPrices({ minPrice, maxPrice })
  }, [searchParams])

  return (
    <form
      onSubmit={formSubmit}
      id="lateral-filters"
      className="w-full flex flex-col gap-3 px-4 text-stone-300"
    >
      <h3 className="font-bold text-base">Preço</h3>

      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="min-price" className="uppercase font-semibold text-sm">
          Min:
        </label>
        <span className=""></span>
        <input
          id="min-price"
          type="text"
          name="minPrice"
          placeholder="R$ 00,00"
          className="bg-transparent outline-none block w-full rounded-md border-0 py-1 px-3 shadow-sm ring-1 ring-stone-800 ring-inset placeholder:text-stone-700 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
          onChange={(e) => pricesHandler(e)}
          value={formPrices.minPrice}
        />
      </div>

      <div className="w-full flex flex-col items-start gap-1">
        <label
          htmlFor="max-price"
          className="uppercase font-semibold text-xs w-10"
        >
          Max:
        </label>

        <input
          id="max-price"
          name="maxPrice"
          type="text"
          placeholder="R$ 00,00"
          className="bg-transparent outline-none block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-stone-800 ring-inset placeholder:text-stone-700 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
          onChange={(e) => pricesHandler(e)}
          value={formPrices.maxPrice}
        />
      </div>

      <button
        type="submit"
        className="flex justify-center rounded-md bg-stone-300 text-stone-800 px-20 py-1.5 text-sm font-semibold leading-6 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-40 transition-all"
      >
        Filtrar
      </button>
    </form>
  )
}
