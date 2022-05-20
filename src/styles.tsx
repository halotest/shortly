import { StyleSheet } from 'react-native'
import { SPACING } from './config/constants'
import { theme } from './config/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        flexGrow: 1,
        backgroundColor: theme.colors.bg.off_white,
        paddingHorizontal: SPACING,
    },
})
