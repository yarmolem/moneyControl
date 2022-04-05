import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

export const IconPlus = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    strokeWidth={2}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <Path d="M12 5v14M5 12h14" />
  </Svg>
)
