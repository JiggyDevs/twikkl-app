import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PlayUpload = (props: SvgProps) => (
  <Svg
    width={19}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M9.5 17.5c-3.935 0-7.125-3.358-7.125-7.5 0-4.142 3.19-7.5 7.125-7.5M9.5 2.5c3.935 0 7.125 3.358 7.125 7.5 0 4.142-3.19 7.5-7.125 7.5M9.5 13.333v-6.25"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12.27 10 9.5 7.083 6.73 10"
    />
  </Svg>
)
export default PlayUpload
