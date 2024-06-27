import React from 'react'
import { ICategory } from '@/interfaces'
import Link from 'next/link'
import PricesFilterForm from '../general/PricesFilterForm'
import { Check, X } from 'lucide-react'

export default async function GameFilters({
  categories,
  searchParams,
}: {
  categories: ICategory[]
  searchParams: { size: string }
}) {
  const queryParams = new URLSearchParams(searchParams).toString()

  const handleFilters = (name: string) => {
    const currentParams = new URLSearchParams(queryParams.toString())
    if (currentParams.has(name)) {
      currentParams.delete(name)
    } else {
      currentParams.set(name, 'true')
    }

    const newQuery = currentParams.toString()
    return `/home?${newQuery}`
  }

  return (
    <div className="sm:hidden w-56 h-full flex flex-col py-6  justify-between items-center text-white z-20 px-2 border-r border-neutral-800">
      <div className="flex flex-col items-center h-full justify-start w-full gap-10">
        <div className="flex flex-col w-full gap-1">
          <h3 className="font-bold text-base mb-1 px-4">Filtros</h3>

          <Link href="home">
            <button className="text-left px-4 py-2 w-full h-fit text-sm font-semibold rounded-md hover:bg-white hover:bg-opacity-10 transition-all flex items-center justify-between hover:text-red-600">
              <span>Remover filtros</span>
              <X size={14} className="text-red-600" />
            </button>
          </Link>

          {categories.map(({ name, namePt }: ICategory) => (
            <Link key={name} href={handleFilters(name)}>
              <button
                className={`text-left text-white px-4 py-2 w-full text-sm font-semibold rounded-md hover:bg-white hover:bg-opacity-10 transition-all flex items-center justify-between ${queryParams.includes(name) && 'bg-white bg-opacity-10'} `}
              >
                <span>{namePt}</span>
                {queryParams.includes(name) && (
                  <Check size={14} className="text-green-600" />
                )}
              </button>
            </Link>
          ))}
        </div>

        <PricesFilterForm />
        {/* searchParams={searchParams} */}
      </div>
    </div>
  )
}