import { Platform } from 'react-native'
import { Dimensions } from 'react-native'
import { theme } from './theme'
import Constants from 'expo-constants'
import { RFValue } from 'react-native-responsive-fontsize'

interface IFontFamily {
    MAIN: keyof typeof FONTS
    BOLD: keyof typeof FONTS
}

const { height, width } = Dimensions.get('window')

export const isIOS = Platform.OS === 'ios'
export const CACHE_LINKS_KEY = '@links'
export const API_URL = 'https://api.shrtco.de/v2/shorten?url'

// SIZES
export const MAIN_FONT_SIZE = RFValue(17)
export const BIG_FONT_SIZE = RFValue(20)
export const HEADER_PADDING = Constants.statusBarHeight + height * 0.03
export const FOOTER_HEIGHT = height * 0.25
export const MAIN_CONTAINER_HEIGHT = height - FOOTER_HEIGHT
export const SPACING = 25
export const MAIN_CONTAINER_WIDTH = width - SPACING * 2
export const BUTTON_BORDER_RADIUS = 4
export const BUTTON_VERTICAL_PADDING = 14
export const ITEM_HEIGHT = 176
export const enum BUTTON_SIZE {
    MEDIUM = 39,
    LARGE = 49,
}
export const SPLASH_ANIMATION_DURATION = 1000

// COLORS
export const MAIN_TEXT_COLOR = theme.colors.neutral.grayish_violet
export const SECONDARY_TEXT_COLOR = theme.colors.primary.cyan

// STRINGS
export const PLACEHOLDER_TEXT = 'Shorten a link here ...'
export const MISSING_TEXT_ERROR = 'Please add a link here'
export const INVALID_TEXT_ERROR = 'Invalid link'

// FONTS
export const FONT_FAMILY: IFontFamily = {
    MAIN: 'Poppins-Medium',
    BOLD: 'Poppins-Bold',
}
export const FONTS = {
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
}
