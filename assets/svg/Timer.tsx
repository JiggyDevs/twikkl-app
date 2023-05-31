import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { BottomTabProps } from "./Speed"
const Timer = (props: BottomTabProps) => (
  <Svg
    width={18}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={props.focused || 0.45}
      strokeWidth={2}
      d="m16 5-1.343 1.343M9 8v4M6 1h6m2.657 5.343A8 8 0 1 0 3.343 17.657 8 8 0 0 0 14.657 6.343v0Z"
    />
  </Svg>
)
export default Timer
