import * as React from 'react'
import Svg, {
    SvgProps,
    Path,
    Defs,
    LinearGradient,
    Stop,
} from 'react-native-svg'

export const TopShadow = (props: SvgProps) => (
    <Svg width={375} height={65} fill="none" {...props}>
        <Path fill="url(#a)" d="M0 0h375v65H0z" />
        <Defs>
            <LinearGradient
                id="a"
                x1={187.5}
                y1={32}
                x2={187.5}
                y2={65}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#F0F1F6" />
                <Stop offset={1} stopColor="#F0F1F6" stopOpacity={0} />
            </LinearGradient>
        </Defs>
    </Svg>
)
