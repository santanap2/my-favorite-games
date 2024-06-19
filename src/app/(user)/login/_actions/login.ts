'use server'

import { signIn } from '../../../../../auth'
import { AuthError } from 'next-auth'

export const myAction = async (formData: FormData) => {
  const { email, password } = Object.fromEntries(formData.entries())

  try {
    await signIn('credentials', {
      email,
      password,
      redirect: true,
      redirectTo: '/minha-conta',
    })
  } catch (error) {
    if (error instanceof AuthError) {
      error.message = 'O email ou a senha inseridos estão incorretos.'
    }
    throw error
  }
}
