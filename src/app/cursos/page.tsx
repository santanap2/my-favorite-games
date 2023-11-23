import React from 'react'
import Card from '@/components/Card'
import { courses } from '@/data/courses'

export default function Cursos() {
  return (
    <div className="mt-32 flex justify-between items-center gap-10 flex-wrap">
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
  )
}
