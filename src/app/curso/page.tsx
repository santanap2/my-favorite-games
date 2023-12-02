'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Curso() {
  const router = useRouter()

  useEffect(() => {
    router.push('/home')
  }, [router])
}
