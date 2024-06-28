import { Heart } from '@phosphor-icons/react/dist/ssr'
import React from 'react'
import { pageTitle } from '@/helpers'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'
import { getServerSession } from 'next-auth'
import MyFavoritesForm from '@/components/general/MyFavoritesForm'
import AllFavorites from '@/components/general/AllFavorites'
import { getAllFavorites } from '@/services/favorites.requests'

export default async function MeusFavoritos() {
  const session = await getServerSession(nextAuthOptions)
  const email = session?.user?.email as string

  const {
    data: { favorites },
  } = await getAllFavorites(email)

  return (
    <div className="w-full h-full  border-l border-neutral-800 pl-4 md:border-none md:pl-0">
      <title>{`Meus favoritos - ${pageTitle}`}</title>

      <div className=" w-full h-full flex flex-col gap-10 text-white sm:gap-6 animation-opacity transition-all">
        <div className="flex flex-col gap-1 items-start justify-center w-full pb-5 border-b border-neutral-800">
          <div className="flex gap-1 items-center justify-center w-full">
            <div className="flex flex-col w-full h-full text-base">
              <span className="font-extrabold text-2xl sm:text-lg flex gap-2 items-center justify-center w-fit">
                <Heart weight="bold" className="text-3xl" />
                Meus favoritos
              </span>

              <span className="flex text-neutral-500 text-base sm:text-sm sm:mt-1">
                Confira todos os games que você favoritou
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full items-center">
          <MyFavoritesForm />

          <div className="w-full grid grid-cols-6 gap-6 sm:gap-x-1 sm:gap-y-3 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 lg:gap-y-6">
            <AllFavorites email={email} allFavorites={favorites?.products} />
          </div>
        </div>
      </div>
    </div>
  )
}
