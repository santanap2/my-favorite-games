import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'
import MyDataForm from '@/components/general/MyDataForm'
import { pageTitle } from '@/helpers'
import { getUserByEmail } from '@/services'
import { IdentificationCard } from '@phosphor-icons/react/dist/ssr'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function MeusDados() {
  const session = await getServerSession(nextAuthOptions)

  const {
    data: { user },
  } = await getUserByEmail(session?.user?.email)

  return (
    <div className="w-full h-full  border-l border-zinc-800 pl-4 md:border-none md:pl-0 text-zinc-300">
      <title>{`Meus dados - ${pageTitle}`}</title>

      <div className="w-full h-full flex flex-col gap-10 sm:gap-6">
        <div className="flex flex-col gap-1 items-start justify-center w-full pb-5 border-b border-zinc-800">
          <div className="flex gap-1 items-center justify-center w-full">
            <div className="flex flex-col w-full h-full text-base">
              <span className="font-extrabold text-2xl sm:text-lg flex gap-2 items-center justify-center w-fit">
                <IdentificationCard weight="bold" className="text-3xl" />
                Meus dados
              </span>

              <span className="flex text-base sm:text-sm sm:mt-1">
                Altere qualquer um dos seus dados cadastrados
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <MyDataForm name={user.name} email={user.email} phone={user.phone} />
        </div>
      </div>
    </div>
  )
}
