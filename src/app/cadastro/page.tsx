'use client'

import RegisterSucess from '@/components/RegisterSucess'
import RegisterUser from '@/components/RegisterUser'
import ReturnLogin from '@/components/ReturnLogin'
import CoursesPlatformContext from '@/context/Context'
import React, { useContext } from 'react'

export default function Page() {
  const { registerSuccess } = useContext(CoursesPlatformContext)
  return (
    <div>
      {registerSuccess ? (
        <div className="flex flex-col gap-10">
          <RegisterSucess />
          <ReturnLogin />
        </div>
      ) : (
        <RegisterUser />
      )}
    </div>
  )
}
