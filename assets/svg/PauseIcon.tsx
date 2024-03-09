import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PauseIcon = (props: SvgProps) => (
  <Svg
    width={64}
    height={64}
    fill="#fff"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M6 3h2v18H6V3Zm10 0h2v18h-2V3Z" />
  </Svg>
)
export default PauseIcon
