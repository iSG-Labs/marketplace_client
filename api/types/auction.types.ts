export interface CreateAuctionBody {
    arg: {
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
