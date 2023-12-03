import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Account = (props: SvgProps) => (
  <Svg
    width={18}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M9 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 1.5a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm7.5 7.5v-2.25a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25V20A.75.75 0 1 1 0 20v-2.25A3.75 3.75 0 0 1 3.75 14h10.5A3.75 3.75 0 0 1 18 17.75V20a.75.75 0 1 1-1.5 0Z"
    />
  </Svg>
)
export default Account

// F1FCF2