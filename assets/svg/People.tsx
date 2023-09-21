import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const People = (props: SvgProps) => (
  <Svg
    width={18}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M9.833 8.833a3.333 3.333 0 0 1 3.333 3.334v1.25a1.25 1.25 0 0 1-1.25 1.25h-10a1.25 1.25 0 0 1-1.25-1.25v-1.25A3.333 3.333 0 0 1 4 8.833h5.833Zm5 0a2.5 2.5 0 0 1 2.5 2.5v1.25a1.25 1.25 0 0 1-1.25 1.25h-1.25v-1.666a4.16 4.16 0 0 0-1.667-3.334h1.667ZM6.916.5a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5ZM14 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
    />
  </Svg>
)
export default People
