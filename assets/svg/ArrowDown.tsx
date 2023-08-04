import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowDown = (props: SvgProps) => (
  <Svg
    width={10}
    height={5}
    fill="none"
    {...props}
  >
    <Path
      fill="#50A040"
      d="M9.666.78a.667.667 0 0 1-.246.52l-4 3.22a.667.667 0 0 1-.847 0l-4-3.333A.667.667 0 1 1 1.426.16L5 3.14 8.573.26a.667.667 0 0 1 1.093.52Z"
    />
  </Svg>
)
export default ArrowDown
