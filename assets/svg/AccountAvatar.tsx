import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const AccountAvatar = (props: SvgProps) => (
  <Svg
    width={51}
    height={70}
    fill="none"
    {...props}
  >
    <Path
      fill="#041105"
      d="M26.019 29.41c7.947 0 14.389-6.439 14.389-14.382 0-7.944-6.442-14.383-14.39-14.383-7.946 0-14.389 6.44-14.389 14.383 0 7.943 6.443 14.383 14.39 14.383Z"
    />
    <Path
      fill="#000"
      d="M25.819 69.356C39.726 69.356 51 62.916 51 54.973 51 47.029 39.726 40.59 25.82 40.59 11.912 40.59.638 47.03.638 54.973c0 7.944 11.274 14.383 25.18 14.383Z"
    />
  </Svg>
)
export default AccountAvatar
