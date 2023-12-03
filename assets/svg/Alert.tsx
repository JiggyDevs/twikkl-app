import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Alert = (props: SvgProps) => (
  <Svg
    width={18}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#50A040"
      d="m17.72 13.027-6.493-11.96a2 2 0 0 0-3.513 0l-6.5 11.96a2 2 0 0 0 1.76 2.974H15.96a2 2 0 0 0 1.76-2.954v-.02Zm-1.186 1.294a.667.667 0 0 1-.573.326H2.973a.665.665 0 0 1-.587-.986L8.88 1.7a.667.667 0 0 1 1.174 0l6.493 11.96a.667.667 0 0 1-.013.66Z"
    />
  </Svg>
)
export default Alert
