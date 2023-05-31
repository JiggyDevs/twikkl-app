import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { BottomTabProps } from "./Speed"
const Effect = (props: BottomTabProps) => (
  <Svg
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={props.focused || 0.45}
      strokeWidth={2}
      d="m17.089 17.027 4 3.982m-9.614-.829 2.733-5.995 6.344-1.86-4.883-4.44.184-6.581-5.751 3.251-6.23-2.208 1.329 6.45-4.035 5.217 6.572.735 3.737 5.431h0Z"
    />
  </Svg>
)
export default Effect
