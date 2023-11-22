'use client'

import { useMemo, useState } from 'react'
import CoursesPlatformContext from './Context'
import { IChildren } from '@/interfaces'

export const ContextCoursesPlatform = ({ children }: IChildren) => {
  const [loginInputs, setLoginInputs] = useState({
    emailInput: '',
    passwordInput: '',
    remember: false,
  })

  const [headerSearch, setHeaderSearch] = useState({
    headerInput: '',
  })

  const context = useMemo(
    () => ({
      headerSearch,
      setHeaderSearch,
      loginInputs,
      setLoginInputs,
    }),
    [headerSearch, loginInputs],
  )

  return (
    <CoursesPlatformContext.Provider value={context}>
      {children}
    </CoursesPlatformContext.Provider>
  )
}
