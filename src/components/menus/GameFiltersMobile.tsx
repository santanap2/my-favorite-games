'use client'

import React, { useContext, useRef } from 'react'
import { ICategory } from '@/interfaces'
import { CSSTransition } from 'react-transition-group'
import GamesPlatformContext from '@/context/Context'
import { X, Check } from 'lucide-react'
import PricesFilterForm from '../general/PricesFilterForm'
import Link from 'next/link'

export default function GameFiltersMobile({
  categories,
  searchParams,
}: {
  categories: ICategory[]
  searchParams: { size: string }
}) {
  const { showMenu, setShowMenu } = useContext(GamesPlatformContext)
  const nodeRef = useRef(null)
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
    <>
      {showMenu.filters && (
        <div
          className="bg-black bg-opacity-40 backdrop-blur-sm w-screen h-screen absolute top-0 left-0 bottom-0 right-0 z-10 overflow-hidden"
          onClick={() =>
            setShowMenu({ ...showMenu, filters: !showMenu.filters })
          }
        />
      )}

      <CSSTransition
        nodeRef={nodeRef}
        in={showMenu.filters}
        timeout={200}
        classNames="slide-menu"
        unmountOnExit
      >
        <aside
          className="w-56 fixed left-0 top-14 bottom-0 flex flex-col h-full bg-neutral-950 bg-opacity-90 backdrop-blur-sm py-6 justify-between items-center text-white z-50 px-2 border-r border-neutral-800"
          ref={nodeRef}
        >
          <div className="flex flex-col items-center h-full justify-start w-full gap-10 overflow-y-auto">
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
                    className={`text-left text-white px-4 py-2 w-full text-sm font-semibold rounded-md transition-all flex items-center justify-between ${queryParams.includes(name) && 'bg-white bg-opacity-10'} `}
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
            {/* { searchParams }: ISearchParams */}
          </div>
        </aside>
      </CSSTransition>
    </>
  )
}
