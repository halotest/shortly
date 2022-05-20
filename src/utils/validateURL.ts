export enum ValidationError {
    INVALID,
    EMPTY,
}

interface ISuccess {
    success: true
}

interface IError {
    error: ValidationError
}

type TValidateResult = ISuccess | IError

export const validateURL = (value?: string): TValidateResult => {
    if (!value?.length) {
        return {
            error: ValidationError.EMPTY,
        }
    }
    const isValid =
        // eslint-disable-next-line no-useless-escape
        /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
            value
        )

    if (!isValid) {
        return {
            error: ValidationError.INVALID,
        }
    }

    return {
        success: true,
    }
}
