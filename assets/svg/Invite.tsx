import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Invite = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 1.5a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm7.5 7.5v-2.25a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25V21A.75.75 0 1 1 3 21v-2.25A3.75 3.75 0 0 1 6.75 15h10.5A3.75 3.75 0 0 1 21 18.75V21a.75.75 0 1 1-1.5 0Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3.009 9-.006 4M1 11h4"
    />
  </Svg>
)
export default Invite
