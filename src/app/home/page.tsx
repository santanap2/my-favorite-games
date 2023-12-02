/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useContext, useEffect } from 'react'
import ProductCard from '@/components/ProductCard'
import { courses } from '@/data/courses'
import LateralMenu from '@/components/LateralMenu'
import CoursesPlatformContext from '@/context/Context'

export default function Home() {
  const { showMenu, setShowMenu } = useContext(CoursesPlatformContext)

  useEffect(() => setShowMenu({ ...showMenu, filters: true }), [])
  return (
    <div className="mt-24 w-full">
      <LateralMenu />
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {courses.map(({ name, area, price, id, image }) => (
          <ProductCard
            key={id}
            name={name}
            id={id}
            area={area}
            price={price}
            image={image}
          />
        ))}
      </div>
    </div>
  )
}
