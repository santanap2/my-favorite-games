import { pageTitle } from '@/helpers'
import { UserCircle, EnvelopeSimple } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React from 'react'
import LateralMyAccount from '../menus/MyAccountMenu'

import SingleOrderSkeleton from './SingleOrderSkeleton'
import UserProductCardSkeleton from './UserProductCardSkeleton'
import WelcomeUserSkeleton from './WelcomeUserSkeleton'

export default function MyAccountSkeleton() {
  return (
    <div className="w-full">
      <title>{`Minha conta - ${pageTitle}`}</title>

      <div className="w-full h-full mt-24 xxl:mt-20  flex flex-col items-start justify-start animation-opacity transition-all">
        <div className="w-full h-full flex flex-col gap-10 text-white items-start lg:gap-6">
          <div className="flex flex-col gap-1 items-start justify-center w-full md:h-32">
            <div className="flex gap-1 items-start justify-center w-full">
              <UserCircle weight="fill" className="text-indigo-600 text-6xl" />
              <div className="flex flex-col w-full">
                <div className="font-regular text-xl lg:text-base md:text-base w-full flex flex-col gap-1">
                  <WelcomeUserSkeleton />
                </div>
              </div>
            </div>
            <h2 className="hidden md:flex text-sm font-light">
              <EnvelopeSimple
                weight="fill"
                className="h-8 md:h-6 text-indigo-600 text-2xl"
              />

              <span className="h-8 md:h-6 text-transparent bg-neutral-200 rounded-md loading-skeleton flex items-center justify-center">
                emaildousuario@email.com
              </span>
            </h2>
          </div>

          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold text-xl lg:text-base w-full flex items-start justify-start">
                Seu último pedido
              </span>
              <Link
                href="/minha-conta/meus-pedidos"
                className="font-semibold text-lg min-w-fit text-indigo-600 hover:underline lg:text-base"
              >
                Ver todos
              </Link>
            </div>
            <SingleOrderSkeleton />
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold text-xl lg:text-base w-full flex items-start justify-start">
                Seus últimos games comprados
              </span>
              <Link
                href="/minha-conta/meus-games"
                className="font-semibold text-lg min-w-fit text-indigo-600 hover:underline lg:text-base"
              >
                Ver todos
              </Link>
            </div>
            <div
              className={`w-full grid grid-cols-5 gap-x-8 gap-y-6 xs:grid-cols-2 sm:gap-x-1 sm:gap-y-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-y-6 xl:grid-cols-5 xxl:grid-cols-4`}
            >
              <>
                <UserProductCardSkeleton />
                <UserProductCardSkeleton />
                <UserProductCardSkeleton />
                <UserProductCardSkeleton />
                <UserProductCardSkeleton />
                <UserProductCardSkeleton />
                <UserProductCardSkeleton />
                <UserProductCardSkeleton />
                <UserProductCardSkeleton />
                <UserProductCardSkeleton />
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
