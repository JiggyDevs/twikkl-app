import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const DriveBackupIcon = (props: SvgProps) => (
  <Svg
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <Path
      fill="#041105"
      fillRule="evenodd"
      d="M15.4 4.2H14a5.603 5.603 0 0 0-5.423 4.2h-.176a5.6 5.6 0 0 0 0 11.2h11.2a5.6 5.6 0 0 0 1.258-11.06 5.603 5.603 0 0 0-5.458-4.34ZM9.663 9.8l.27-1.05a4.203 4.203 0 0 1 4.069-3.15h1.4a4.203 4.203 0 0 1 4.093 3.254l.196.854.854.198a4.201 4.201 0 0 1-.943 8.293H8.4a4.2 4.2 0 0 1 0-8.4h1.261Z"
      clipRule="evenodd"
    />
    <Path
      fill="#041105"
      d="M15.4 23.098a.7.7 0 1 1-1.4 0v-10.5a.7.7 0 1 1 1.4 0v10.5Z"
    />
    <Path
      fill="#041105"
      d="M11.638 15.945a.7.7 0 0 1-.873-1.092l3.5-2.8a.7.7 0 0 1 .873 1.092l-3.5 2.8Z"
    />
    <Path
      fill="#041105"
      d="M18.637 14.854a.7.7 0 0 1-.873 1.091l-3.5-2.8a.698.698 0 0 1-.136-1.003.7.7 0 0 1 1.01-.088l3.5 2.8Z"
    />
  </Svg>
)
export default DriveBackupIcon
