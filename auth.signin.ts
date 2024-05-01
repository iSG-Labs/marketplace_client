'use server'

import { signIn as authSignIn } from './auth'
import { SigninPayload } from './api/types'

export const signInAction = async (data: SigninPayload) => {
    return authSignIn('credentials', {
        ...data,
        redirectTo: '/dashboard',
    })
}
