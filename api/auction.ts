import axios from 'axios'

import { API } from '../utils/'
import { CreateAuctionArg, ErrorRes } from './types'

export async function createAuctionAPI(url: string, { arg }: CreateAuctionArg) {
    try {
        const res = await axios.post(`${API}/${url}`, arg.body, {
            headers: {
                Authorization: `Bearer ${arg.token}`,
            },
        })
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error((error.response?.data as ErrorRes).message)
        }
    }
}
