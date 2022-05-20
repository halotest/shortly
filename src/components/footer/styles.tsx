import { StyleSheet } from 'react-native'
import { FOOTER_HEIGHT, SPACING } from '../../config/constants'
import { theme } from '../../config/theme'

export const styles = StyleSheet.create({
    footer: {
        height: FOOTER_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary.dark_violet,
        paddingHorizontal: SPACING,
    },
    shape: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
})
