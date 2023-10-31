import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CancelIcon = (props: SvgProps) => (
  <Svg
    width={8}
    height={8}
    fill="none"
    {...props}
  >
    <Path
      fill="#041105"
      d="M.465.465a.875.875 0 0 1 1.237 0L4 2.763 6.298.465a.875.875 0 1 1 1.237 1.237L5.237 4l2.298 2.298a.875.875 0 0 1-1.237 1.237L4 5.237 1.702 7.535A.875.875 0 0 1 .465 6.298L2.763 4 .465 1.702a.875.875 0 0 1 0-1.237Z"
    />
  </Svg>
)
export default CancelIcon
