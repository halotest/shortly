import { StyleSheet } from 'react-native'
import {
    BIG_FONT_SIZE,
    BUTTON_BORDER_RADIUS,
    FONT_FAMILY,
} from '../../config/constants'
import { theme } from '../../config/theme'

export const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: theme.colors.primary.cyan,
        borderRadius: BUTTON_BORDER_RADIUS,
        marginTop: 10,
    },
    button_active: {
        backgroundColor: theme.colors.primary.dark_violet,
    },
    text: {
        color: theme.colors.bg.white,
        fontFamily: FONT_FAMILY.BOLD,
        fontSize: BIG_FONT_SIZE,
        textTransform: 'uppercase',
    },
})
