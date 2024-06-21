import React from 'react'

export default function GenericButton({
  textContent,
  className,
  type,
  onclick,
}: HTMLButtonElement) {
  return (
    <button onClick={() => onclick} type={type} className={className}>
      {textContent}
    </button>
  )
}
