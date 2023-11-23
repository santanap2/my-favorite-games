import { createContext } from 'react'

const initialValueContext = {
  headerSearch: {
    headerInput: '',
  },

  loginInputs: {
    emailLogin: '',
    passwordLogin: '',
    remember: false,
  },

  resetPassword: {
    emailReset: '',
  },

  registerUser: {
    emailRegister: '',
    passwordRegister: '',
  },

  registerSuccess: false,

  logged: false,

  cart: [],
}

const CoursesPlatformContext = createContext(initialValueContext)

export default CoursesPlatformContext
