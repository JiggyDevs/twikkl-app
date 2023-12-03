import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const InfoIcon = (props: SvgProps) => (
  <Svg
    width={20}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      stroke="#50A040"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M10.125 1a8.626 8.626 0 1 0 .001 17.251A8.626 8.626 0 0 0 10.125 1Z"
    />
  </Svg>
)
export default InfoIcon
