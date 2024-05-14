// signup types
export interface SignupPayload {
    arg: {
        body: {
            email: string
            password: string
            firstname: string
            lastname: string
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

// signin types
export interface SigninPayload {
    email: any
    password: any
}

export interface SigninSuccess {
    id: string
    name: string
    email: string
    token: {
        accessToken: string
        refreshToken: string
    }
}

export interface SigninError {
    message: string
    error: string
    statusCode: string
}
