'use client'

import React, { useEffect, useState } from 'react'
import LoggedUser from '@/components/LoggedUser'
import UnloggedUser from '@/components/UnloggedUser'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [logged, setLogged] = useState(false)
  const router = useRouter()
  useEffect(() => {
    if (logged) router.push('/minha-conta')
  }, [logged, router])

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <button
        className="border-zinc-700 border border-solid bg-sky-300 p-4 rounded mb-20"
        type="button"
        onClick={() => setLogged(!logged)}
      >
        {logged ? 'Deslogar' : 'Logar'}
      </button>
      <UnloggedUser />
    </div>
  )
}
