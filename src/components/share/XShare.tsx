import Link from 'next/link'
import React from 'react'

export default function XShare({ shareText }: { shareText: string }) {
  return (
    <Link
      href={`https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}`}
      className="transition-all rounded-lg p-1 hover:scale-110 border border-stone-900 bg-black"
      target="_blank"
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        fill="white"
      >
        <title>X</title>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    </Link>
  )
}
