'use client'

import React, { useContext } from 'react'
import coursesAreas from '@/data/coursesAreas'
import CoursesPlatformContext from '@/context/Context'

export default function LateralFilters() {
  const { showMenu } = useContext(CoursesPlatformContext)

  return (
    <>
      {showMenu.filters && (
        <aside className="w-56 fixed left-0 top-0 bottom-0 flex flex-col pt-20 h-full justify-between items-center bg-zinc-100 shadow-md slideshow-left">
          <div className="flex flex-col items-center h-full justify-start w-full">
            <div className="w-full text-md font-bold flex gap-3 items-center justify-center px-6">
              <span>Filtre sua busca</span>
            </div>

            <div className="w-full px-6 mt-8 flex flex-col gap-12">
              <div>
                <h1 className="text-sm font-semibold">Tópico</h1>
                <form className="flex flex-col gap-3 mt-3">
                  {coursesAreas.map((item) => (
                    <label
                      htmlFor={item}
                      key={item}
                      className="flex justify-start items-center gap-3 w-full hover:underline"
                    >
                      <input id={item} type="checkbox" />
                      <span className="text-zinc-600 tracking-wider text-sm font-light">
                        {item}
                      </span>
                    </label>
                  ))}
                </form>
              </div>

              <div>
                <h1 className="text-sm font-semibold">Preço</h1>
                <form className="flex flex-col gap-3 mt-3">
                  <label
                    htmlFor="min-price"
                    className="w-full flex items-center justify-center"
                  >
                    <span className="uppercase font-semibold text-xs w-10">
                      Min:
                    </span>
                    <input
                      id="min-price"
                      type="number"
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
                      id="max-price"
                      type="number"
                      className="w-32 rounded-md shadow-sm hover:shadow-md focus:outline-none focus:shadow-lg p-2 "
                    />
                  </label>
                </form>
              </div>
            </div>
            <button
              type="button"
              className="w-52 bg-sky-400 rounded-md p-2 font-regular text-sm shadow-sm hover:shadow-lg  mt-12 font-light text-white"
            >
              Filtrar
            </button>
          </div>
        </aside>
      )}
    </>
  )
}
