import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PlayIcon = (props: SvgProps) => (
  <Svg
    width={64}
    height={64}
    fill="#fff"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M6 20.196V3.804a1 1 0 0 1 1.53-.848l13.113 8.196a1 1 0 0 1 0 1.696L7.53 21.044A1 1 0 0 1 6 20.196Z" />
  </Svg>
)
export default PlayIcon
