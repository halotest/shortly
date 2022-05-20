import { Pressable, Text, ViewStyle } from 'react-native'
import Animated from 'react-native-reanimated'
import { theme } from '../../config/theme'
import { BUTTON_SIZE } from '../../config/constants'
import { styles } from './styles'
const AnimatedButton = Animated.createAnimatedComponent(Pressable)

interface IProps {
    text: string
    activeText?: string
    isActive?: boolean
    size?: 'md' | 'lg'
    onPress: () => void
}

export const Button = ({
    text,
    size = 'md',
    activeText,
    isActive,
    onPress,
}: IProps) => {
    const { cyan, dark_violet } = theme.colors.primary
    const style: ViewStyle = {
        ...styles.button,
        backgroundColor: isActive ? dark_violet : cyan,
        height: size === 'lg' ? BUTTON_SIZE.LARGE : BUTTON_SIZE.MEDIUM,
    }

    return (
        <AnimatedButton testID={'btn'} style={style} onPress={onPress}>
            <Text style={styles.text}>{isActive ? activeText : text}</Text>
        </AnimatedButton>
    )
}
