'use server'

import { redirect } from 'next/navigation'
import { signIn } from '../../../../../auth'
import { AuthError } from 'next-auth'

export const myAction = async (formData: FormData) => {
  const { email, password } = Object.fromEntries(formData.entries())

  try {
    await signIn('credentials', { email, password })
  } catch (error) {
    if (error instanceof AuthError) {
      error.message = 'O email ou a senha inseridos estão incorretos.'
    }
    throw error
  }

  redirect('/minha-conta')
}
