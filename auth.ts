import { IUser } from '@/interfaces'
import { requestLogin } from '@/services'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  unstable_update: unstableUpdate,
} = NextAuth({
  pages: {
    signIn: '/login',
  },
  providers: [
    Credentials({
      credentials: {
        email: { name: 'email' },
        password: { name: 'password' },
      },
      async authorize(credentials) {
        // fazer chamada pro backend, e deve retornar os dados do usuario ou um erro (null) para autorizar a aplicacao ou nao (2:12:00 video cestari)

        const { email, password } = credentials as IUser
        const response = await requestLogin({ email, password }).catch(
          (error) => {
            if (error) {
              return null
              // throw new Error(error.response.data.message)
            }
          },
        )

        if (response && response.status === 200) {
          console.log('Login autorizado', response.data)
          return {
            id: response.data.userData.id,
            email: response.data.userData.email,
            name: response.data.userData.name,
          }
          // redirect('/minha-conta')
        }

        return null
      },
    }),
  ],
})
