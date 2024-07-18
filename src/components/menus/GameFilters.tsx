import React from 'react'
import { ICategory } from '@/interfaces'
import Link from 'next/link'
import PricesFilterForm from '../general/PricesFilterForm'
import { Check, Trash } from 'lucide-react'

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
    if (!currentParams.toString()) return '/home/1'

    const newQuery = currentParams.toString()
    return `/home?${newQuery}`
  }

  return (
    <div className="md:hidden w-56 h-full flex flex-col pb-6  justify-between items-center text-zinc-300 z-20 px-2 border-r border-zinc-800">
      <div className="flex flex-col items-center h-full justify-start w-full gap-10">
        <div className="flex flex-col w-full gap-1">
          <div className="w-full flex justify-between items-center pb-2 border-b border-zinc-800 mb-4">
            <h3 className="font-bold text-base mb-1 px-4">Filtros</h3>
            <Link href="/home/1">
              <button className="text-left px-4 py-2 w-full h-fit text-xs font-semibold rounded-md hover:bg-zinc-300 hover:bg-opacity-10 transition-all flex items-center justify-between space-x-3 hover:text-red-800">
                <Trash size={14} className="text-red-800" />
                <span>Limpar</span>
              </button>
            </Link>
          </div>

          {categories.map(({ name, namePt }: ICategory) => (
            <Link key={name} href={handleFilters(name)}>
              <button
                className={`text-left text-zinc-300 px-4 py-2 w-full text-sm font-semibold rounded-md hover:bg-zinc-300 hover:bg-opacity-10 transition-all flex items-center justify-between ${queryParams.includes(name) && 'bg-zinc-300 bg-opacity-30'} `}
              >
                <span>{namePt}</span>
                {queryParams.includes(name) && (
                  <Check size={14} className="text-green-600" />
                )}
              </button>
            </Link>
          ))}
        </div>

        <PricesFilterForm searchParams={searchParams} />
      </div>
    </div>
  )
}
