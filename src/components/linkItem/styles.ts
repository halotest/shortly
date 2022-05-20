import { StyleSheet } from 'react-native'
import { MAIN_FONT_SIZE, MAIN_TEXT_COLOR } from '../../config/constants'
import { theme } from '../../config/theme'

const MAIN_SPACING = 23

export const styles = StyleSheet.create({
    item: {
        height: 176,
        borderRadius: 8,
        backgroundColor: theme.colors.bg.white,
        marginBottom: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: theme.colors.neutral.light_gray,
        borderBottomWidth: 1,
        paddingHorizontal: MAIN_SPACING,
        paddingTop: MAIN_SPACING,
        paddingBottom: 12,
    },
    main: {
        paddingHorizontal: MAIN_SPACING,
    },
    original_link: {
        fontSize: MAIN_FONT_SIZE,
        color: MAIN_TEXT_COLOR,
        flexGrow: 1,
        width: 0,
    },
    short_link: {
        fontSize: MAIN_FONT_SIZE,
        color: theme.colors.primary.cyan,
        paddingVertical: 12,
    },
    del: {
        marginLeft: 10,
    },
})
