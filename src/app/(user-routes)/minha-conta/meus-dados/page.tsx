import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'
import MyDataForm from '@/components/general/MyDataForm'
import LateralMyAccount from '@/components/menus/LateralMyAccount'
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
    <div className="mt-24 xxl:mt-20 w-full h-full">
      <title>{`Meus dados - ${pageTitle}`}</title>
      <LateralMyAccount />
      <div className="w-full h-full flex flex-col gap-10 text-white sm:gap-6">
        <div className="flex flex-col gap-1 items-start justify-center w-full pb-5 border-b border-neutral-700">
          <div className="flex gap-1 items-center justify-center w-full">
            <div className="flex flex-col w-full h-full text-base">
              <span className="font-extrabold text-2xl sm:text-lg flex gap-2 items-center justify-center w-fit">
                <IdentificationCard weight="bold" className="text-3xl" />
                Meus dados
              </span>

              <span className="flex text-neutral-500 text-base sm:text-sm sm:mt-1">
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
