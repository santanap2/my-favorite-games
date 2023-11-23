'use client'

import { useMemo, useState } from 'react'
import CoursesPlatformContext from './Context'
import { IChildren } from '@/interfaces'

export const ContextCoursesPlatform = ({ children }: IChildren) => {
  const [loginInputs, setLoginInputs] = useState({
    emailLogin: '',
    passwordLogin: '',
    remember: false,
  })

  const [headerSearch, setHeaderSearch] = useState({
    headerInput: '',
  })

  const [resetPassword, setResetPassword] = useState({
    emailReset: '',
  })

  const [registerUser, setRegisterUser] = useState({
    emailRegister: '',
    passwordRegister: '',
  })

  const [registerSuccess, setRegisterSuccess] = useState(false)

  const [logged, setLogged] = useState(false)

  const context = useMemo(
    () => ({
      headerSearch,
      setHeaderSearch,

      loginInputs,
      setLoginInputs,

      resetPassword,
      setResetPassword,

      registerUser,
      setRegisterUser,

      registerSuccess,
      setRegisterSuccess,

      logged,
      setLogged,
    }),
    [
      headerSearch,
      loginInputs,
      resetPassword,
      registerUser,
      registerSuccess,
      logged,
    ],
  )

  return (
    <CoursesPlatformContext.Provider value={context}>
      {children}
    </CoursesPlatformContext.Provider>
  )
}
