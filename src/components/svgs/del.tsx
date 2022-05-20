import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

export const Del = (props: SvgProps) => (
    <Svg width={14} height={18} fill="none" {...props}>
        <Path
            d="M1 16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4H1v12ZM14 1h-3.5l-1-1h-5l-1 1H0v2h14V1Z"
            fill="#35323E"
        />
    </Svg>
)
