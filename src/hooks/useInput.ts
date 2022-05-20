import { createRef, useState } from 'react'
import { TextInput } from 'react-native'

export interface IInputProps {
    value?: string
    onChangeText: React.Dispatch<React.SetStateAction<string>>
    ref: React.RefObject<TextInput>
}

export interface IInput {
    props: IInputProps
    reset: () => void
}

export type TInputValue = Pick<IInputProps, 'value'>

export const useInput = (): IInput => {
    const ref = createRef<TextInput>()
    const [value, onChangeText] = useState('')

    const reset = () => {
        onChangeText('')
    }

    return {
        props: {
            ref,
            value: value.toLowerCase(),
            onChangeText,
        },
        reset,
    }
}
