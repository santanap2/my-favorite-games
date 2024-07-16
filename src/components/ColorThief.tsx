'use client'

import { usePalette } from 'color-thief-react'
import React from 'react'

export default function ColorThief({ imageUrl }: { imageUrl: string }) {
  // const { data, loading, error } = useColor(imageUrl, 'rgbArray', {
  //   crossOrigin: 'Anonymous',
  // })

  const { data, loading, error } = usePalette(imageUrl, 2, 'rgbArray', {
    crossOrigin: 'Anonymous',
  })

  if (loading) return <p className="text-white">Carregando...</p>
  if (error || !data)
    return <p className="text-white">Ocorreu um erro ao carregar a cor.</p>

  // const color1 = `rgba(${data[0]}, ${data[1]}, ${data[2]}, 0.75)`
  // const color1 = `rgba(${data[0][0]}, ${data[0][1]}, ${data[0][2]}, 1)`
  const color2 = `rgba(${data[1][0]}, ${data[1][1]}, ${data[1][2]}, 1)`

  // console.log(color1)

  return (
    <div
      className="absolute inset-0"
      // style={{
      //   background: `radial-gradient(circle 300px at center center, ${color}, transparent`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center center',
      //   backgroundRepeat: 'unset',
      //   position: 'absolute',
      //   top: '-150px',
      //   left: '-150px',
      //   width: '600px',
      //   height: '700px',
      //   zIndex: -1,
      //   borderRadius: '6px',
      // }}
      style={{
        background: color2,
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
