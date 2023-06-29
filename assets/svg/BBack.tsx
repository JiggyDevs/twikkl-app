import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#041105"
      d="M9.75 20C4.365 20 0 15.634 0 10.25 0 4.865 4.365.5 9.75.5c5.384 0 9.75 4.365 9.75 9.75 0 5.384-4.366 9.75-9.75 9.75Zm1.655-13.72a.75.75 0 1 0-1.06-1.06l-4.5 4.5a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06l-3.97-3.97 3.97-3.97Z"
    />
  </Svg>
)
export default SvgComponent
