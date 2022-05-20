import * as React from 'react'
import Svg, {
    SvgProps,
    Path,
    Defs,
    LinearGradient,
    Stop,
} from 'react-native-svg'

export const BottomShadow = (props: SvgProps) => (
    <Svg width={375} height={65} fill="none" {...props}>
        <Path
            transform="rotate(-180 375 65)"
            fill="url(#a)"
            d="M375 65h375v65H375z"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={562.5}
                y1={97}
                x2={562.5}
                y2={130}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#F0F1F6" />
                <Stop offset={1} stopColor="#F0F1F6" stopOpacity={0} />
            </LinearGradient>
        </Defs>
    </Svg>
)
