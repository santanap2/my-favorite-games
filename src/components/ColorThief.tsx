'use client'

import { usePalette } from 'color-thief-react'
import React from 'react'

export default function ColorThief({ imageUrl }: { imageUrl: string }) {
  const { data, loading, error } = usePalette(imageUrl, 2, 'rgbArray', {
    crossOrigin: 'Anonymous',
  })

  if (loading) return <p className="hidden">Carregando...</p>
  if (error || !data)
    return <p className="hidden">Ocorreu um erro ao carregar a cor.</p>

  const calculateLuminance = ([r, g, b]: number[]) =>
    0.2126 * r + 0.7152 * g + 0.0722 * b

  const rgbToString = ([r, g, b]: number[]) => `rgb(${r}, ${g}, ${b})`

  const luminance1 = calculateLuminance(data[0])
  const luminance2 = calculateLuminance(data[1])
  const mainColor = luminance1 > luminance2 ? data[0] : data[1]

  return (
    <div
      className="absolute inset-0"
      style={{
        background: rgbToString(mainColor),
        filter: 'blur(150px)',
        width: '300px',
        height: '400px',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  )
}
