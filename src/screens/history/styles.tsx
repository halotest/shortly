import {
    FONT_FAMILY,
    HEADER_PADDING,
    MAIN_FONT_SIZE,
} from '../../config/constants'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontFamily: FONT_FAMILY.MAIN,
        fontSize: MAIN_FONT_SIZE,
        textAlign: 'center',
        marginBottom: 20,
    },
    list: {
        paddingTop: HEADER_PADDING,
    },
    topShadow: {
        position: 'absolute',
        top: 0,
        zIndex: 1,
    },
    bottomShadow: {
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
    },
})
