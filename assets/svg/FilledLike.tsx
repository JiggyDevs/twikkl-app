import * as React from "react"
import Svg, { SvgProps, G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const FilledLike = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#E20000"
        fillRule="evenodd"
        d="M12 1.971c6.657-6.843 23.3 5.132 0 20.53C-11.301 7.103 5.343-4.873 12 1.97Z"
        clipRule="evenodd"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default FilledLike
