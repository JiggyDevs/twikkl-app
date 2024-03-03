import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ManualBackupIcon = (props: SvgProps) => (
  <Svg
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <Path
      stroke="#041105"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.986 6.295 1.73-1.732a1.923 1.923 0 0 1 2.72 2.72L8.7 22.02c-.542.542-1.21.94-1.945 1.16L4 24l.82-2.754a4.615 4.615 0 0 1 1.16-1.945L18.987 6.295h-.002Zm0 0L21.692 9"
    />
  </Svg>
)
export default ManualBackupIcon
