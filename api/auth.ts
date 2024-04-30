import axios from 'axios'

import { API } from '../utils/'
import { SignupPayload, SignupSuccess, SignupError } from './types'

export async function signupAPI(url: string, { arg }: SignupPayload) {
    try {
        const res = await axios.post<SignupSuccess>(`${API}/${url}`, arg.body)
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error((error.response?.data as SignupError).message)
        }
    }
}
