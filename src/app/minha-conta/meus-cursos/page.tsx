/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import LateralMenu from '@/components/LateralMenu'
import UserOrderCard from '@/components/UserOrderCard'
import CoursesPlatformContext from '@/context/Context'
import orders from '@/data/userOrders'
import { ICartItem } from '@/interfaces'
import { Books } from '@phosphor-icons/react'
import React, { useContext, useEffect } from 'react'

export default function MeusCursos() {
  const { showMenu, setShowMenu } = useContext(CoursesPlatformContext)

  const allCourses: ICartItem[] = []
  const concludedOrders = orders.filter((item) => item.status === 'concluded')
  concludedOrders.forEach((order) =>
    order.items.forEach((course) => allCourses.push(course)),
  )

  useEffect(() => setShowMenu({ ...showMenu, myAccount: true }), [])

  return (
    <div className="mt-24 w-full h-full">
      <LateralMenu />
      <div className=" w-full h-full flex flex-col gap-10 text-zinc-800">
        <div className="flex gap-1 w-fit items-center justify-center">
          <Books weight="fill" size={56} className="text-sky-500" />
          <h1 className="font-regular text-xl font-semibold">Meus cursos</h1>
        </div>

        <div className="flex flex-wrap gap-8 w-fit pb-4 items-center">
          {allCourses.length > 0 ? (
            allCourses.map(({ name, id, image }: ICartItem) => (
              <UserOrderCard
                key={id}
                name={name}
                image={image}
                courseId={id}
                productId={id}
                isCourse
              />
            ))
          ) : (
            <span>Você não possui nenhum curso comprado.</span>
          )}
        </div>
      </div>
    </div>
  )
}
