import React from 'react'

export default function ProductCardSkeleton() {
  return (
    <div className="rounded flex flex-col w-64 h-[500px] bg-white relative items-center justify-center shadow-md transition-all sm:w-full sm:h-96 xxl:w-52 xxl:h-96 xxl:hover:scale-100">
      <div className="bg-zinc-100 rounded-t h-72 w-64 absolute top-0 left-0 sm:h-52 xxl:w-full xxl:h-52 loading-skeleton" />

      <div className="w-full">
        <div className="absolute top-72 w-full h-40 flex flex-col justify-between items-start px-[5%] py-2 sm:top-52 sm:px-2 sm:py-1 sm:h-32 xxl:top-52 xxl:h-32">
          <div className="flex flex-col gap-1 w-full text-transparent">
            <h1 className="rounded text-lg bg-zinc-100 w-full max-h-20 sm:text-base sm:max-h-11 loading-skeleton">
              Title Title Title Title
            </h1>
            <h1 className="rounded text-lg bg-zinc-100 w-fit max-h-20 sm:text-base sm:max-h-11 loading-skeleton">
              Title Title Title
            </h1>
            <h2 className="rounded text-sm w-fit bg-zinc-100 sm:text-xs sm:h-4 loading-skeleton">
              Genre Genre
            </h2>
          </div>

          <span className="text-xl rounded bg-zinc-100 sm:text-lg loading-skeleton">
            R$ 9999.99
          </span>
        </div>
      </div>

      <div className="absolute w-56 left-4 right-4 bottom-2 flex gap-[2.5%] sm:w-[90%] sm:left-[5%] sm:right-[5%] sm:bottom-[1.5%] xxl:w-[90%] xxl:left-[5%]">
        <button
          type="button"
          className="w-[72.5%] h-9 bg-zinc-100 rounded text-sm text-transparent cursor-default sm:text-xs loading-skeleton"
        >
          Buy
        </button>
        <button
          type="button"
          className="w-1/4 h-9 bg-zinc-100 rounded text-sm text-transparent cursor-default sm:text-xs loading-skeleton"
        >
          Add Cart
        </button>
      </div>
    </div>
  )
}
