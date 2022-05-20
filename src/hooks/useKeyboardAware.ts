import { useEffect, useRef, useState } from 'react'
import {
    EmitterSubscription,
    Keyboard,
    KeyboardEventName,
    ViewStyle,
} from 'react-native'
import {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated'
import { isIOS } from '../config/constants'

interface IKeyboardStatus {
    visible: boolean
    height: number
}

interface IAnimatedStyle {
    style: ViewStyle
}

const initialStatus: IKeyboardStatus = { height: 0, visible: false }
const showEvent: KeyboardEventName = 'keyboardWillShow'
const hideEvent: KeyboardEventName = 'keyboardWillHide'

export const useKeyboardAware = (): IAnimatedStyle => {
    const [status, setStatus] = useState<IKeyboardStatus>(initialStatus)
    const y = useSharedValue(status.height)
    const showEventRef = useRef<EmitterSubscription>()
    const hideEventRef = useRef<EmitterSubscription>()

    useEffect(() => {
        const { height, visible } = status
        y.value = withTiming(visible ? -height : 0, {
            duration: 250,
        })
    }, [status, y])

    const style = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: y.value,
            },
        ],
    }))

    useEffect(() => {
        if (isIOS) {
            if (!showEventRef.current) {
                showEventRef.current = Keyboard.addListener(
                    showEvent,
                    ({ endCoordinates }) => {
                        setStatus({
                            height: endCoordinates.height,
                            visible: true,
                        })
                    }
                )

                if (!hideEventRef.current && isIOS) {
                    hideEventRef.current = Keyboard.addListener(
                        hideEvent,
                        ({ endCoordinates }) => {
                            setStatus({
                                height: endCoordinates.height,
                                visible: false,
                            })
                        }
                    )
                }
            }
        }
    })

    return { style }
}
