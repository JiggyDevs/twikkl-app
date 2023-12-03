import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Lock = (props: SvgProps) => (
  <Svg
    width={20}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.857 9.43H3.143c-.947 0-1.714.767-1.714 1.714V21.43c0 .947.767 1.714 1.714 1.714h13.714c.947 0 1.714-.767 1.714-1.714V11.144c0-.947-.767-1.714-1.714-1.714ZM16 9.429V6.857a6 6 0 1 0-12 0V9.43"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 17.144a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714Z"
    />
  </Svg>
)
export default Lock
