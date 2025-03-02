import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import Credentials from "next-auth/providers/credentials";
import { hashPassword, prisma } from '@/lib'
import Google from 'next-auth/providers/google';

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials) {
        const passHash = await hashPassword(credentials.password as string)

        const user = await prisma.user.findUniqueOrThrow({
          where: {
            email: credentials.email as string,
            password: passHash,
          }
        })

        return user
      }
    }),
    Google
  ]
})