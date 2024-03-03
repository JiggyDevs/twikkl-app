import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"
const CopyIconWithWrapper = (props: SvgProps) => (
  <Svg
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <Circle cx={24} cy={24} r={24} fill="#C0CCC1" />
    <Path
      stroke="#041105"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.5 18.216v-2.31a1.406 1.406 0 0 1 1.407-1.406h12.186a1.406 1.406 0 0 1 1.407 1.406v12.188a1.406 1.406 0 0 1-1.407 1.406h-2.335"
    />
    <Path
      stroke="#041105"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M28.094 18.5H15.905a1.407 1.407 0 0 0-1.405 1.407v12.186a1.406 1.406 0 0 0 1.406 1.407h12.188a1.406 1.406 0 0 0 1.406-1.407V19.907a1.407 1.407 0 0 0-1.407-1.407h.001Z"
    />
  </Svg>
)
export default CopyIconWithWrapper
