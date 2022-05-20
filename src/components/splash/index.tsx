import Animated from 'react-native-reanimated'
import { Logo } from '../svgs'
import { useFadeIn } from '../../hooks/useFadeIn'
import { View } from 'react-native'
import { styles } from './styles'
import { SPLASH_ANIMATION_DURATION } from '../../config/constants'

export const Splash = () => {
    const fadeIn = useFadeIn({ duration: SPLASH_ANIMATION_DURATION })
    return (
        <View testID="splash" style={styles.container}>
            <Animated.View {...fadeIn}>
                <Logo />
            </Animated.View>
        </View>
    )
}
