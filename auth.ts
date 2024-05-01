import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { signinAPI } from './api'

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: { type: 'text' },
                password: { type: 'text' },
            },
            authorize: async (credentials) => {
                let response = await signinAPI({
                    email: credentials?.email || '',
                    password: credentials?.password,
                })

                if (!response?.id) {
                    throw new Error('User not found.')
                }

                return response
            },
        }),
    ],
})
