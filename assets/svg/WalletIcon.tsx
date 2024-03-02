import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const WalletIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#041105"
      d="M16.125 13a.624.624 0 1 0 0 1.25h2.25a.624.624 0 1 0 0-1.25h-2.25ZM3 5v12.875A3.125 3.125 0 0 0 6.125 21h12.25a3.125 3.125 0 0 0 3.125-3.125v-8.75A3.126 3.126 0 0 0 19 6.062v-.937A2.125 2.125 0 0 0 16.875 3H5.125a2.125 2.125 0 0 0-2.122 2H3Zm14.75.125V6H5.125a.875.875 0 0 1 0-1.75h11.75c.483 0 .875.392.875.875ZM4.25 7.25h14.125a1.875 1.875 0 0 1 1.875 1.875v8.75a1.875 1.875 0 0 1-1.875 1.875H6.125a1.875 1.875 0 0 1-1.875-1.875V7.25Z"
    />
  </Svg>
)
export default WalletIcon
