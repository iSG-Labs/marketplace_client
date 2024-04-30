// signup types
export interface SignupPayload {
    arg: {
        body: {
            email: string
            password: string
        }
    }
}

export interface SignupSuccess {
    accessToken: string
    refreshToken: string
}

export interface SignupError {
    message: string
    error: string
    statusCode: string
}
