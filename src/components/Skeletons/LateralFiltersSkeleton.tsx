import React from 'react'

export default function LateralFiltersSkeleton() {
  return (
    <div className="flex flex-col items-center h-full justify-start w-full">
      <div className="w-full text-md font-bold flex gap-3 items-center justify-center px-6">
        <span>Filtre sua busca</span>
      </div>

      <div className="w-full px-6 mt-8 flex flex-col gap-12">
        <div>
          <h1 className="text-sm font-semibold">Tópico</h1>
          <div id="lateral-filters" className="flex flex-col gap-3 mt-3">
            <div className="flex justify-start items-center gap-3 w-full cursor-default">
              <div className="w-4 h-4 rounded bg-zinc-100 loading-skeleton shadow-md" />
              <span className="tracking-wider text-sm font-light bg-zinc-100 loading-skeleton rounded text-transparent shadow-sm w-full">
                {'a'}
              </span>
            </div>

            <div className="flex justify-start items-center gap-3 w-full cursor-default">
              <div className="w-4 h-4 rounded bg-zinc-100 loading-skeleton shadow-md" />
              <span className="tracking-wider text-sm font-light bg-zinc-100 loading-skeleton rounded text-transparent shadow-sm w-full">
                {'a'}
              </span>
            </div>

            <div className="flex justify-start items-center gap-3 w-full cursor-default">
              <div className="w-4 h-4 rounded bg-zinc-100 loading-skeleton shadow-md" />
              <span className="tracking-wider text-sm font-light bg-zinc-100 loading-skeleton rounded text-transparent shadow-sm w-full">
                {'a'}
              </span>
            </div>

            <div className="flex justify-start items-center gap-3 w-full cursor-default">
              <div className="w-4 h-4 rounded bg-zinc-100 loading-skeleton shadow-md" />
              <span className="tracking-wider text-sm font-light bg-zinc-100 loading-skeleton rounded text-transparent shadow-sm w-full">
                {'a'}
              </span>
            </div>

            <div className="flex justify-start items-center gap-3 w-full cursor-default">
              <div className="w-4 h-4 rounded bg-zinc-100 loading-skeleton shadow-md" />
              <span className="tracking-wider text-sm font-light bg-zinc-100 loading-skeleton rounded text-transparent shadow-sm w-full">
                {'a'}
              </span>
            </div>

            <div className="flex justify-start items-center gap-3 w-full cursor-default">
              <div className="w-4 h-4 rounded bg-zinc-100 loading-skeleton shadow-md" />
              <span className="tracking-wider text-sm font-light bg-zinc-100 loading-skeleton rounded text-transparent shadow-sm w-full">
                {'a'}
              </span>
            </div>

            <div className="flex justify-start items-center gap-3 w-full cursor-default">
              <div className="w-4 h-4 rounded bg-zinc-100 loading-skeleton shadow-md" />
              <span className="tracking-wider text-sm font-light bg-zinc-100 loading-skeleton rounded text-transparent shadow-sm w-full">
                {'a'}
              </span>
            </div>

            <div className="flex justify-start items-center gap-3 w-full cursor-default">
              <div className="w-4 h-4 rounded bg-zinc-100 loading-skeleton shadow-md" />
              <span className="tracking-wider text-sm font-light bg-zinc-100 loading-skeleton rounded text-transparent shadow-sm w-full">
                {'a'}
              </span>
            </div>

            <div className="flex justify-start items-center gap-3 w-full cursor-default">
              <div className="w-4 h-4 rounded bg-zinc-100 loading-skeleton shadow-md" />
              <span className="tracking-wider text-sm font-light bg-zinc-100 loading-skeleton rounded text-transparent shadow-sm w-full">
                {'a'}
              </span>
            </div>

            <div className="flex justify-start items-center gap-3 w-full cursor-default">
              <div className="w-4 h-4 rounded bg-zinc-100 loading-skeleton shadow-md" />
              <span className="tracking-wider text-sm font-light bg-zinc-100 loading-skeleton rounded text-transparent shadow-sm w-full">
                {'a'}
              </span>
            </div>

            <div className="flex flex-col gap-3 mt-5">
              <h1 className="text-sm font-semibold">Preço</h1>
              <div className="w-full flex items-center justify-center gap-4">
                <span className="uppercase font-semibold text-xs w-fit bg-zinc-100 loading-skeleton rounded text-transparent">
                  Min:
                </span>
                <input
                  id="min-price"
                  type="text"
                  name="minPrice"
                  className="w-32 rounded shadow-md hover:shadow-md focus:outline-none p-2 bg-zinc-100 loading-skeleton cursor-default"
                />
              </div>

              <div className="w-full flex items-center justify-center gap-4">
                <span className="uppercase font-semibold text-xs w-fit bg-zinc-100 loading-skeleton rounded text-transparent">
                  Min:
                </span>
                <input
                  id="min-price"
                  type="text"
                  name="minPrice"
                  className="w-32 rounded shadow-md hover:shadow-md focus:outline-none p-2 bg-zinc-100 loading-skeleton cursor-default"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        form="lateral-filters"
        className="w-52 bg-zinc-100 rounded p-2 font-regular text-sm shadow-sm cursor-default mt-12 font-light text-transparent loading-skeleton"
      >
        Filtrar
      </button>
    </div>
  )
}
