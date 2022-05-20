import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useLayoutEffect, useState } from 'react'
import { FONTS } from '../config/constants'

export const usePrepareApp = () => {
    const [isAppReady, setIsAppReady] = useState(false)

    useLayoutEffect(() => {
        async function prepare() {
            try {
                await SplashScreen.hideAsync()
                await Font.loadAsync(FONTS)
                await new Promise((resolve) => setTimeout(resolve, 1000))
                setIsAppReady(true)
            } catch (error) {}
        }
        prepare()
    })

    return isAppReady
}
