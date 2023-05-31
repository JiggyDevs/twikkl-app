import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Effect1 = (props: SvgProps) => (
  <Svg
    width={14}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillOpacity={0.45}
      d="M12.25 0H1.75a1.5 1.5 0 0 0-1.5 1.5V18a.76.76 0 0 0 .384.656.73.73 0 0 0 .366.094.713.713 0 0 0 .394-.113L7 15.131l5.606 3.506A.75.75 0 0 0 13.75 18V1.5a1.5 1.5 0 0 0-1.5-1.5Zm0 16.65-4.856-3.037a.75.75 0 0 0-.788 0L1.75 16.65V1.5h10.5v15.15Z"
    />
  </Svg>
)
export default Effect1
