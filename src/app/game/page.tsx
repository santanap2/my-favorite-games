'use client'

import { useRouter } from 'next/navigation'

export default function Game() {
  const router = useRouter()
  router.push('/home')
}
