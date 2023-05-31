import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Send = (props: SvgProps) => (
  <Svg
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <Path
      stroke="#50A040"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.2}
      d="m7.75 14 5.357 4.464 7.143-8.928M14 26.5a12.5 12.5 0 1 1 0-25 12.5 12.5 0 0 1 0 25Z"
    />
  </Svg>
)
export default Send
