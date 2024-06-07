'use server'

import { signIn } from '../../../../../auth'

export const myAction = async (formData: FormData) => {
  const { email, password } = Object.fromEntries(formData.entries())
  await signIn('credentials', { email, password })
}
