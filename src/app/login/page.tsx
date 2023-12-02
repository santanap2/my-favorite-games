'use client'

import React, { useContext, useEffect } from 'react'
import UnloggedUser from '@/components/UnloggedUser'
import CreateAccount from '@/components/CreateAccount'
import CoursesPlatformContext from '@/context/Context'
import { useRouter } from 'next/navigation'

export default function Login() {
  const { logged } = useContext(CoursesPlatformContext)
  const router = useRouter()

  useEffect(() => {
    if (logged) router.push('/minha-conta')
  }, [logged, router])

  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 mt-24">
      <UnloggedUser />
      <CreateAccount />
    </div>
  )
}
