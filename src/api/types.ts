export interface IApiResponse {
    code: string
    full_share_link: string
    full_short_link: string
    full_short_link2: string
    full_short_link3: string
    original_link: string
    share_link: string
    short_link: string
    short_link2: string
    short_link3: string
}

export interface ISuccessResponseResult {
    result: IApiResponse
}

interface IErrorResponseResult {
    error?: string
    error_code?: number
}

export type IResponseResult = ISuccessResponseResult | IErrorResponseResult

export type TResponse = IResponseResult & {
    ok: boolean
}
