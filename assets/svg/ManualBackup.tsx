import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ManualBackup = (props: SvgProps) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#F1FCF2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.986 3.295 1.73-1.732a1.923 1.923 0 0 1 2.72 2.72L5.7 19.02c-.542.542-1.21.94-1.945 1.16L1 21l.82-2.754a4.615 4.615 0 0 1 1.16-1.945L15.987 3.295h-.002Zm0 0L18.692 6"
    />
  </Svg>
)
export default ManualBackup
