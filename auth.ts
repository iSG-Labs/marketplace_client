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
                // logic to verify if user exists
                let response = await signinAPI({
                    email: credentials?.email || '',
                    password: credentials?.password,
                })

                if (!response?.id) {
                    // No user found, so this is their first attempt to login
                    // meaning this is also the place you could do registration
                    throw new Error('User not found.')
                }

                // return user object with the their profile data
                return response
            },
        }),
    ],
})
