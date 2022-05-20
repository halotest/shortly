import * as Clipboard from 'expo-clipboard'
import { useState } from 'react'

interface IClipboard {
    value: string | null
    write: (value: string) => Promise<boolean>
}

export const useClipboard = (): IClipboard => {
    const [value, setValue] = useState<string | null>(null)

    const write = async (text: string): Promise<boolean> => {
        setValue(text)
        return await Clipboard.setStringAsync(text)
    }

    return {
        value,
        write,
    }
}
