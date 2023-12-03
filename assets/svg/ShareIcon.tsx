import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ShareIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#C0CCC1"
      d="M16.5 15a3.722 3.722 0 0 0-2.681 1.135L9.497 13.36a3.778 3.778 0 0 0 0-2.72l4.322-2.774A3.75 3.75 0 1 0 12.75 5.25c.002.465.087.926.253 1.36L8.681 9.385a3.75 3.75 0 1 0 0 5.23l4.322 2.776A3.75 3.75 0 1 0 16.5 15Zm0-12a2.25 2.25 0 1 1-2.25 2.25A2.26 2.26 0 0 1 16.5 3ZM6 14.25A2.25 2.25 0 1 1 8.25 12 2.26 2.26 0 0 1 6 14.25ZM16.5 21a2.25 2.25 0 1 1 2.25-2.25A2.26 2.26 0 0 1 16.5 21Z"
    />
  </Svg>
)
export default ShareIcon
