import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { handleTapFeedback } from '../../utils'
import { Button } from '../../components/button'
import {
    INVALID_TEXT_ERROR,
    MISSING_TEXT_ERROR,
    PLACEHOLDER_TEXT,
} from '../../config/constants'
import { theme } from '../../config/theme'
import { useInput } from '../../hooks'
import { validateURL } from '../../utils'
import { styles } from './styles'
import { ValidationError } from '../../utils/validateURL'

interface IProps {
    shorten(url: string): Promise<boolean>
}

export const Form = ({ shorten }: IProps) => {
    const [errorMsg, setErrorMsg] = useState<string | null>(null)
    const { props, reset } = useInput()
    const { secondary, neutral } = theme.colors

    const handleSubmit = async () => {
        const validation = validateURL(props.value)

        if ('error' in validation) {
            handleTapFeedback(true)
            const msg =
                validation.error === ValidationError.EMPTY
                    ? MISSING_TEXT_ERROR
                    : INVALID_TEXT_ERROR
            setErrorMsg(msg)
            reset()
            return
        }

        handleTapFeedback()
        const success = await shorten(props.value!)

        if (!success) {
            setErrorMsg('Could not generate a short link')
            return
        }

        if (errorMsg) {
            clearError()
        }
        reset()
    }

    const clearError = () => {
        if (errorMsg) {
            setErrorMsg(null)
        }
    }

    const placeholder = errorMsg ?? PLACEHOLDER_TEXT
    const placeholderTextColor = errorMsg ? secondary.red : neutral.light_gray

    return (
        <>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                style={styles.input}
                onFocus={clearError}
                {...props}
            />
            <Button size="lg" text="shorten it!" onPress={handleSubmit} />
        </>
    )
}
