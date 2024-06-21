import { signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'

export const myAction = async (formData: FormData) => {
  const { email, password } = Object.fromEntries(formData.entries())

  const result = await signIn('credentials', {
    email,
    password,
    redirect: false,
  })

  if (result?.error)
    throw new Error('O email ou a senha inseridos estão incorretos.')

  redirect('/minha-conta')
}
