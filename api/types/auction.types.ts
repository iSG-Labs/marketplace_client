export interface CreateAuctionArg {
    arg: {
        token: string
        body: {
            title: string
            description: string
        }
    }
}

export interface ErrorRes {
    message: string
    error: string
    statusCode: string
}

export interface Auction {
    id: string
    title: string
    status: string
    description: string
    startDate: string
    endDate: string
}
