import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const GroupSettings = (props: SvgProps) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#041105"
      fillRule="evenodd"
      d="M15 1a1 1 0 0 0-2 0v1H1a1 1 0 0 0 0 2h12v1a1 1 0 0 0 2 0V4h2a1 1 0 1 0 0-2h-2V1ZM1 8a1 1 0 0 0 0 2h2v1a1 1 0 1 0 2 0v-1h12a1 1 0 1 0 0-2H5V7a1 1 0 0 0-2 0v1H1Zm-1 7a1 1 0 0 1 1-1h12v-1a1 1 0 0 1 2 0v1h2a1 1 0 0 1 0 2h-2v1a1 1 0 0 1-2 0v-1H1a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default GroupSettings
