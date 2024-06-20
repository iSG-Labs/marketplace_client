import axios, { AxiosResponse } from 'axios'

import { API } from '../utils/'
import {
    Product,
    Auction,
    CreateAuctionArg,
    ErrorRes,
    AddProductBody,
} from './types'

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

export async function viewAllAuctionAPI(url: string, token: string) {
    try {
        const res = await axios.get<any, AxiosResponse<Array<Auction>>>(
            `${API}/${url}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        )
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error((error.response?.data as ErrorRes).message)
        }
    }
}

export async function viewAuctionProductsAPI(url: string, token: string) {
    try {
        const res = await axios.get<any, AxiosResponse<Array<Product>>>(
            `${API}/${url}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        )
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error((error.response?.data as ErrorRes).message)
        }
    }
}

export async function addProductToAuction(
    url: string,
    token: string,
    body: AddProductBody,
) {
    try {
        const res = await axios.post(`${API}/${url}`, body, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error((error.response?.data as ErrorRes).message)
        }
    }
}
export async function bidOnProductAPI(url: string, token: string) {
    try {
        const res = await axios.post(
            `${API}/${url}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        )
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error((error.response?.data as ErrorRes).message)
        }
    }
}
