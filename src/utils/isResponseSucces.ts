import { IResponseResult, ISuccessResponseResult } from '../api/types'

export const isSuccessFulResponse = (
    response: IResponseResult
): response is ISuccessResponseResult => {
    return 'result' in response
}
