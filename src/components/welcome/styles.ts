import { StyleSheet } from 'react-native'
import {
    BIG_FONT_SIZE,
    FONT_FAMILY,
    HEADER_PADDING,
    MAIN_FONT_SIZE,
    MAIN_TEXT_COLOR,
} from '../../config/constants'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: HEADER_PADDING,
    },
    text_bold: {
        textAlign: 'center',
        color: MAIN_TEXT_COLOR,
        fontFamily: FONT_FAMILY.BOLD,
        fontSize: BIG_FONT_SIZE,
    },
    text: {
        textAlign: 'center',
        fontFamily: FONT_FAMILY.MAIN,
        color: MAIN_TEXT_COLOR,
        fontSize: MAIN_FONT_SIZE,
    },
})
