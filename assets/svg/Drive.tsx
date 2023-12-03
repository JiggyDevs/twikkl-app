import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Drive = (props: SvgProps) => (
  <Svg
    width={24}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#F1FCF2"
      fillRule="evenodd"
      d="M13.4.2H12a5.603 5.603 0 0 0-5.424 4.2H6.4a5.6 5.6 0 0 0 0 11.2h11.2a5.6 5.6 0 0 0 1.258-11.06A5.603 5.603 0 0 0 13.4.2ZM7.66 5.8l.27-1.05A4.203 4.203 0 0 1 12 1.6h1.4a4.203 4.203 0 0 1 4.093 3.254l.196.854.854.198a4.201 4.201 0 0 1-.943 8.293H6.4a4.2 4.2 0 0 1 0-8.4H7.66Z"
      clipRule="evenodd"
    />
    <Path
      fill="#F1FCF2"
      d="M13.4 19.098a.7.7 0 1 1-1.4 0v-10.5a.7.7 0 1 1 1.4 0v10.5Z"
    />
    <Path
      fill="#F1FCF2"
      d="M9.637 11.945a.7.7 0 0 1-.874-1.092l3.5-2.8a.7.7 0 0 1 .874 1.092l-3.5 2.8Z"
    />
    <Path
      fill="#F1FCF2"
      d="M16.637 10.854a.7.7 0 0 1-.874 1.091l-3.5-2.8a.7.7 0 1 1 .874-1.091l3.5 2.8Z"
    />
  </Svg>
)
export default Drive
