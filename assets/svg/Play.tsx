import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { BottomTabProps } from "./Back"
const Play = (props: BottomTabProps) => (
  <Svg
    width={20}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      fill={props.dark || "#fff"}
      d="M3.4.1a3 3 0 0 0-3 3v10.8a3 3 0 0 0 3 3h13.2a3 3 0 0 0 3-3V3.1a3 3 0 0 0-3-3H3.4Zm5.118 4.89 4.8 3.003a.601.601 0 0 1 .014 1.008l-4.8 3.179a.6.6 0 0 1-.932-.5V5.5a.6.6 0 0 1 .918-.51Z"
    />
  </Svg>
)
export default Play
