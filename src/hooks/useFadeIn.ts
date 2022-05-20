import { useEffect } from 'react'
import { ViewStyle } from 'react-native'
import {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated'

interface IProps {
    duration: number
    delay?: number
}

interface IFadeIn {
    style: ViewStyle
}

export const useFadeIn = ({ duration = 1 }: IProps): IFadeIn => {
    const opacity = useSharedValue(0.1)
    const style = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }))

    useEffect(() => {
        opacity.value = withTiming(1, {
            duration,
        })
    })

    return { style }
}
