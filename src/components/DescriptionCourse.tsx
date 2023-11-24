import React from 'react'

export default function DescriptionCourse({
  text,
  name,
}: {
  text: string
  name: string
}) {
  return (
    <div className="tracking-wide pb-8">
      <h1 className=" font-normal text-lg">{name}</h1>
      <p className="font-light text-base">{text}</p>
    </div>
  )
}
