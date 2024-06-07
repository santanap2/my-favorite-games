'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export default function RegisterButton() {
  const router = useRouter()
  return (
    <button
      type="button"
      className="w-48 h-10 bg-emerald-500 text-slate-50 rounded text-sm font-light shadow hover:bg-emerald-600 transition-all"
      onClick={() => router.push('/cadastro')}
    >
      Crie sua conta
    </button>
  )
}
