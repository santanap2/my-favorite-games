/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import LateralMenu from '@/components/LateralMenu'
import CoursesPlatformContext from '@/context/Context'
import { Heart } from '@phosphor-icons/react'
import React, { useContext, useEffect } from 'react'
import { courses } from '@/data/courses'
import UserOrderCard from '@/components/UserOrderCard'
import { ICartItem } from '@/interfaces'

export default function MeusFavoritos() {
  const { showMenu, setShowMenu } = useContext(CoursesPlatformContext)

  useEffect(() => {
    setShowMenu({ ...showMenu, myAccount: true })
  }, [])

  return (
    <div className="mt-24 w-full h-full">
      <LateralMenu />
      <div className=" w-full h-full flex flex-col gap-10 text-zinc-800">
        <div className="flex gap-1 w-fit items-center justify-center">
          <Heart weight="fill" size={56} className="text-sky-500" />
          <h1 className="font-regular text-xl font-semibold">Meus favoritos</h1>
        </div>

        <div className="flex flex-wrap gap-8 w-fit pb-4 items-center">
          {courses.length > 0 ? (
            courses.map(({ image, name, id }: ICartItem) => (
              <UserOrderCard
                key={id}
                image={image}
                name={name}
                isFavorite
                orderId={id}
                productId={id}
                courseId={id}
              />
            ))
          ) : (
            <span>Você não possui nenhum favorito no momento.</span>
          )}
        </div>
      </div>
    </div>
  )
}
