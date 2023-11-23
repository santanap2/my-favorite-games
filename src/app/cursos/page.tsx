import React from 'react'
import Card from '@/components/Card'
import { courses } from '@/data/courses'
import LateralFilters from '@/components/LateralFilters'

export default function Cursos() {
  return (
    <div className="mt-32">
      <LateralFilters />
      <div className="ml-32 flex flex-wrap gap-6 justify-center items-center">
        {courses.map(({ name, area, price, id, image }) => (
          <Card
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
