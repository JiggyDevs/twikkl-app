import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SetAmountIcon = (props: SvgProps) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#C0CCC1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.5 7h.001M3.5 11.172V5a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586l8 8a2 2 0 0 1 0 2.828l-6.172 6.172a2 2 0 0 1-2.828 0l-8-8a2 2 0 0 1-.586-1.414v0Z"
    />
  </Svg>
)
export default SetAmountIcon
