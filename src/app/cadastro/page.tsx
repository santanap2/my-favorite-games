'use client'

import RegisterSuccess from '@/components/RegisterSuccess'
import RegisterUser from '@/components/RegisterUser'
import ReturnLogin from '@/components/ReturnLogin'
import CoursesPlatformContext from '@/context/Context'
import React, { useContext } from 'react'

export default function Page() {
  const { registerSuccess } = useContext(CoursesPlatformContext)
  return (
    <div>
      {registerSuccess ? (
        <div className="mt-24 flex flex-col gap-10">
          <RegisterSuccess />
          <ReturnLogin />
        </div>
      ) : (
        <RegisterUser />
      )}
    </div>
  )
}
