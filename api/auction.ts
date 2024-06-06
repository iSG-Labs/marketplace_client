import axios from 'axios'

import { API } from '../utils/'
import { CreateAuctionBody, ErrorRes } from './types'

export async function createAuctionAPI(
    url: string,
    { arg }: CreateAuctionBody,
) {
    try {
        const res = await axios.post(`${API}/${url}`, arg.body)
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error((error.response?.data as ErrorRes).message)
        }
    }
}
