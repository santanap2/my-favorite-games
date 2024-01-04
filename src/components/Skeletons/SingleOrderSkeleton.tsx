import GamesPlatformContext from '@/context/Context'
import { ListPlus } from '@phosphor-icons/react'
import React, { useContext } from 'react'

export default function SingleOrderSkeleton() {
  const { screenSize } = useContext(GamesPlatformContext)

  return (
    <div className="w-full h-32 bg-white py-3 px-4 rounded shadow-sm flex justify-between items-end xxl:px-0 xxl:justify-center xxl:flex-col xxl:gap-2 xxl:pb-1">
      <table className="w-5/6 xxl:w-full flex flex-col gap-4">
        <thead className="w-full">
          <tr className="font-semibold text-sm uppercase text-transparent flex justify-between gap-2 xxl:text-xs">
            <td className="py-3 px-4 w-60 h-8 md:h-6 xxl:p-1 md:w-12 xxl:w-40 bg-zinc-100 rounded loading-skeleton">
              {screenSize < 800 ? 'Pedido' : 'Número do pedido'}
            </td>
            <td className="py-3 px-4 w-52 h-8 md:h-6 xxl:p-1 xxl:w-20 bg-zinc-100 rounded loading-skeleton">
              Status
            </td>
            <td className="py-3 px-4 w-40 h-8 md:h-6 xxl:p-1 xxl:w-16 bg-zinc-100 rounded loading-skeleton">
              Data
            </td>
            <td className="py-3 px-4 w-52 h-8 md:h-6 xxl:p-1 xxl:w-20 bg-zinc-100 rounded loading-skeleton">
              Pagamento
            </td>
            <td className="py-3 px-4 w-40 h-8 md:h-6 xxl:p-1 xxl:w-16 bg-zinc-100 rounded loading-skeleton">
              Valor
            </td>
          </tr>
        </thead>

        <tbody className="w-full xxl:text-xs">
          <tr className="text-transparent flex justify-between items-center gap-2">
            <td className="py-3 px-4 w-60 h-8 md:h-6 xxl:p-1 md:w-12 xxl:w-40 bg-zinc-100 rounded loading-skeleton">
              Numero do pedido
            </td>
            <td className="py-3 px-4 w-52 h-8 md:h-6 text-sm font-bold xxl:p-1 xxl:w-20 xxl:text-xxs xxl:font-semibold bg-zinc-100 rounded loading-skeleton">
              Status do pedido
            </td>
            <td className="py-3 px-4 w-40 h-8 md:h-6 xxl:p-1 xxl:w-16 bg-zinc-100 rounded loading-skeleton">
              Data do pedido
            </td>
            <td className="py-3 px-4 w-52 h-8 md:h-6 font-semibold text-sm xxl:p-1 xxl:w-20 bg-zinc-100 rounded loading-skeleton">
              Metodo de pagamento
            </td>
            <td className="py-3 px-4 w-40 h-8 md:h-6 xxl:p-1 xxl:w-16 bg-zinc-100 rounded loading-skeleton">
              R$9999,99
            </td>
          </tr>
        </tbody>
      </table>

      <span className=" w-48 h-8 md:h-6 text-transparent font-bold text-sm hover:underline flex gap-1 items-center ml-8 xxl:ml-0 xxl:justify-end xxl:px-2 xxl:w-fit xxl:font-semibold xxl:text-xs bg-zinc-100 rounded loading-skeleton">
        <ListPlus size={20} />
        <span className="xxl:">Detalhes do pedido</span>
      </span>
    </div>
  )
}
