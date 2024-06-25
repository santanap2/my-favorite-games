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
      <title>{`${pageTitle} - Meus dados`}</title>
      <LateralMyAccount />
      <div className="w-full h-full flex flex-col gap-10 text-white sm:gap-6">
        <div className="flex gap-1 w-full items-center justify-start">
          <IdentificationCard
            weight="fill"
            className="text-indigo-600 sm:text-3xl text-5xl"
          />
          <h1 className="font-regular text-xl font-semibold">Meus dados</h1>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <MyDataForm name={user.name} email={user.email} phone={user.phone} />
        </div>
      </div>
    </div>
  )
}
