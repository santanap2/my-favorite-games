/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useContext } from 'react'
import coursesAreas from '@/data/coursesAreas'
import CoursesPlatformContext from '@/context/Context'
import LateralFilterHooks from '@/hooks/LateralFilterHooks'
import { ICoursesAreas } from '@/interfaces'

export default function LateralFilters() {
  const { showMenu } = useContext(CoursesPlatformContext)
  const { handleSubmit, register, handleFormSubmit } = LateralFilterHooks()

  return (
    <>
      {showMenu.filters && (
        <aside className="w-56 fixed left-0 top-0 bottom-0 flex flex-col pt-20 h-full justify-between items-center bg-zinc-100 shadow-md slideshow-left overflow-y-auto">
          <div className="flex flex-col items-center h-full justify-start w-full">
            <div className="w-full text-md font-bold flex gap-3 items-center justify-center px-6">
              <span>Filtre sua busca</span>
            </div>

            <div className="w-full px-6 mt-8 flex flex-col gap-12">
              <div>
                <h1 className="text-sm font-semibold">Tópico</h1>
                <form
                  onSubmit={handleSubmit(handleFormSubmit)}
                  id="lateral-filters"
                  className="flex flex-col gap-3 mt-3"
                >
                  {coursesAreas.map(
                    ({ camelCaseName, name }: ICoursesAreas) => (
                      <label
                        htmlFor={camelCaseName}
                        key={camelCaseName}
                        className="flex justify-start items-center gap-3 w-full hover:underline"
                      >
                        <input
                          {...register(`lateralFilters.${camelCaseName}`)}
                          id={camelCaseName}
                          type="checkbox"
                        />
                        <span className="text-zinc-600 tracking-wider text-sm font-light">
                          {name}
                        </span>
                      </label>
                    ),
                  )}
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
                        {...register('lateralFilters.minPrice')}
                        id="min-price"
                        type="text"
                        placeholder="R$ 00,00"
                        className="w-32 rounded-md shadow-sm hover:shadow-md focus:outline-none focus:shadow-lg p-2"
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
                        {...register('lateralFilters.maxPrice')}
                        id="max-price"
                        type="text"
                        placeholder="R$ 00,00"
                        className="w-32 rounded-md shadow-sm hover:shadow-md focus:outline-none focus:shadow-lg p-2 "
                      />
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <button
              type="submit"
              form="lateral-filters"
              className="w-52 bg-sky-400 rounded-md p-2 font-regular text-sm shadow-sm hover:shadow-lg mt-12 font-light text-white"
            >
              Filtrar
            </button>
          </div>
        </aside>
      )}
    </>
  )
}
