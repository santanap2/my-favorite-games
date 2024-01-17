import React from 'react'

export default function SingleOrderSkeleton() {
  return (
    <div className="w-full h-28 sm:h-32 bg-white py-1 px-4 rounded shadow-sm flex justify-between items-center xxl:px-1 xxl:justify-center xxl:flex-col xxl:gap-2 xxl:pb-1 transition-all relative">
      <table className="w-5/6 xxl:w-full">
        <thead className="w-full">
          <tr className="font-bold text-sm uppercase text-zinc-700 flex justify-between gap-2 xxl:text-xs">
            <td className="py-3 px-4 w-60 xxl:p-1 md:w-12 xxl:w-40 sm:hidden">
              Número do pedido
            </td>
            <td className="py-3 px-4 w-52 xxl:p-1 xxl:w-20">Status</td>
            <td className="py-3 px-4 w-40 xxl:p-1 xxl:w-16">Data</td>
            <td className="py-3 px-4 w-52 xxl:p-1 xxl:w-20">Pagamento</td>
            <td className="py-3 px-4 w-40 xxl:p-1 xxl:w-20">Valor</td>
          </tr>
        </thead>

        <tbody className="w-full xxl:text-xs">
          <tr className="text-zinc-600 flex justify-between items-center gap-2">
            <td className="py-3 px-4 w-60 xxl:p-1 md:w-12 xxl:w-40 sm:hidden">
              <p className="bg-zinc-100 loading-skeleton rounded text-transparent cursor-default w-full">
                #9999999
              </p>
            </td>

            <td className="py-3 px-4 w-52 font-bold xxl:p-1 xxl:w-20 xxl:text-xxs xxl:font-semibold">
              <p className="bg-zinc-100 loading-skeleton rounded text-transparent cursor-default">
                Status
              </p>
            </td>
            <td className="py-3 px-4 w-40 xxl:p-1 xxl:w-16">
              <p className="bg-zinc-100 loading-skeleton rounded text-transparent cursor-default">
                99/99/9999
              </p>
            </td>
            <td className="py-3 px-4 w-52 text-slate-400 font-bold xxl:p-1 xxl:w-20">
              <p className="bg-zinc-100 loading-skeleton rounded text-transparent cursor-default">
                Cartaodecredito
              </p>
            </td>
            <td className="py-3 px-4 w-40 xxl:p-1 xxl:w-20 text-justify">
              <p className="bg-zinc-100 loading-skeleton rounded text-transparent cursor-default">
                99/99/9999
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-between items-center w-full">
        <p className="text-xs ml-2 sm:text-zinc-900 text-transparent">
          <span className="uppercase font-semibold">Pedido: #</span>
          <span>9999999</span>
        </p>

        <div className=" w-48 text-slate-500 font-bold flex gap-1 items-center ml-8 xxl:ml-0 xxl:justify-end xxl:px-2 xxl:w-fit xxl:font-semibold xxl:text-xs">
          <p className="bg-zinc-100 loading-skeleton rounded text-transparent cursor-default h-full">
            Detalhes do pedido
          </p>
        </div>
      </div>
    </div>
  )
}
