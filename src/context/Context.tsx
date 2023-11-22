/* eslint-disable @typescript-eslint/no-empty-function */
import { IInitialValueContext } from '@/interfaces'
import { createContext } from 'react'

const initialValueContext = {
  headerSearch: {
    headerInput: '',
  },

  loginInputs: {
    emailInput: '',
    passwordInput: '',
    remember: false,
  },
}

const CoursesPlatformContext = createContext(
  initialValueContext as IInitialValueContext,
)

export default CoursesPlatformContext
