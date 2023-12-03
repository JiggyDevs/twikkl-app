import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CopyIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#F1FCF2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.5 6.216v-2.31A1.407 1.407 0 0 1 7.907 2.5h12.186A1.406 1.406 0 0 1 21.5 3.906v12.188a1.406 1.406 0 0 1-1.407 1.406H17.76"
    />
    <Path
      stroke="#F1FCF2"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.094 6.5H3.905A1.407 1.407 0 0 0 2.5 7.907v12.186A1.406 1.406 0 0 0 3.906 21.5h12.188a1.406 1.406 0 0 0 1.406-1.407V7.907A1.407 1.407 0 0 0 16.093 6.5h.001Z"
    />
  </Svg>
)
export default CopyIcon
