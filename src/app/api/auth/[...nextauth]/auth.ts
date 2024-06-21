/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from '@/interfaces'
import { requestLogin } from '@/services'
import NextAuth, { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const nextAuthOptions: NextAuthOptions = {
  pages: {
    signIn: '/login',
  },

  session: {
    strategy: 'jwt',
  },

  providers: [
    Credentials({
      name: 'credentials',

      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' },
      },

      async authorize(credentials) {
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
      user && (token.user = user)
      return token
    },

    async session({ session, token }) {
      return { ...session, user: token.user } as any
    },
  },
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }
