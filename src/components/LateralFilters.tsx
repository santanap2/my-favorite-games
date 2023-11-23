'use client'

import React from 'react'
import coursesAreas from '@/data/coursesAreas'

export default function LateralFilters() {
  return (
    <div className="w-64 fixed left-0 top-0 bottom-0 flex flex-col pt-20 h-full justify-between bg-zinc-100">
      <div className="flex flex-col items-center h-full justify-start">
        <div className="w-full text-md font-bold text-center">
          Filtre sua busca
        </div>

        <div className="pl-6 w-full mt-8 flex flex-col gap-12">
          <div>
            <h1 className="text-sm font-semibold">Área do curso</h1>
            <div className="flex flex-col gap-3 mt-3">
              {coursesAreas.map((item) => (
                <label
                  htmlFor={item}
                  key={item}
                  className="flex justify-start items-center gap-3 w-full"
                >
                  <input id={item} type="checkbox" />
                  <span className="text-zinc-600 tracking-wider text-sm font-light">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-sm font-semibold">Preço</h1>
            <label htmlFor="min-price">
              <span className="uppercase font-semibold text-xs mr-1">Min:</span>
              <input
                id="min-price"
                type="number"
                className="w-16 rounded-md shadow-sm focus:outline-none focus:shadow-lg p-2"
              />
            </label>

            <label htmlFor="max-price" className="ml-4">
              <span className="uppercase font-semibold text-xs mr-1">Max:</span>
              <input
                id="max-price"
                type="number"
                className="w-16 rounded-md shadow-sm focus:outline-none focus:shadow-lg p-2"
              />
            </label>
          </div>
        </div>

        <button
          type="button"
          className="w-52 bg-sky-400 rounded-md p-2 font-regular text-sm shadow-md hover:shadow-xl mt-20"
        >
          Filtrar
        </button>
      </div>
    </div>
  )
}
