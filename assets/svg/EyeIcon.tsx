import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const EyeIcon = (props: SvgProps) => (
  <Svg
    width={16}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M8 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 5.333a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666ZM8 0C4.667 0 1.82 2.073.667 5c1.153 2.927 4 5 7.333 5 3.334 0 6.18-2.073 7.334-5-1.154-2.927-4-5-7.334-5Z"
    />
  </Svg>
)
export default EyeIcon
