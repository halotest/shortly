import { StyleSheet } from 'react-native'
import {
    BUTTON_BORDER_RADIUS,
    BUTTON_SIZE,
    FONT_FAMILY,
    MAIN_CONTAINER_WIDTH,
    MAIN_FONT_SIZE,
} from '../../config/constants'
import { theme } from '../../config/theme'

export const styles = StyleSheet.create({
    input: {
        height: BUTTON_SIZE.LARGE,
        width: MAIN_CONTAINER_WIDTH,
        fontFamily: FONT_FAMILY.MAIN,
        fontSize: MAIN_FONT_SIZE,
        backgroundColor: theme.colors.bg.white,
        borderRadius: BUTTON_BORDER_RADIUS,
        textAlign: 'center',
    },
})
