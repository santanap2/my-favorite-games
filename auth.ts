/* eslint-disable @typescript-eslint/no-explicit-any */

import { IUser } from '@/interfaces'
import { requestLogin } from '@/services'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  unstable_update: unstableUpdate,
} = NextAuth({
  pages: {
    signIn: '/login',
    signOut: '/logout',
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
        const response = await requestLogin({ email, password })

        if (response && response.status === 200)
          return {
            id: response.data.userData.id,
            email: response.data.userData.email,
            name: response.data.userData.name,
          }

        return null
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },

    async session({ session, token }) {
      return {
        ...session,
        user: token,
      }
    },
  },
})
