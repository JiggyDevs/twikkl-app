import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { BottomTabProps } from "./Back"
const LiveIcon = (props: BottomTabProps) => (
  <Svg
    width={20}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill={props.dark || "#fff"}
      d="M3.99.928a.75.75 0 0 1 0 1.06 8.5 8.5 0 0 0 0 12.021.75.75 0 0 1-1.061 1.06C-.976 11.164-.976 4.833 2.929.93a.75.75 0 0 1 1.06 0Zm13.08 0c3.906 3.905 3.906 10.236 0 14.142a.75.75 0 0 1-1.06-1.06 8.502 8.502 0 0 0 0-12.022.751.751 0 1 1 1.06-1.06ZM6.819 3.756a.75.75 0 0 1 0 1.06 4.5 4.5 0 0 0 0 6.365.75.75 0 0 1-1.06 1.06 6 6 0 0 1 0-8.485.75.75 0 0 1 1.06 0Zm7.425 0a6 6 0 0 1 0 8.485.752.752 0 0 1-1.07.01.75.75 0 0 1 .009-1.07 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 1.06-1.06ZM10 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
    />
  </Svg>
)
export default LiveIcon
