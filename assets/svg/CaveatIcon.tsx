import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CaveatIcon = (props: SvgProps) => (
  <Svg
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <Path
      fill="#50A040"
      d="M28.685 9.786a1.5 1.5 0 0 1 2.64 0l19.5 36a1.5 1.5 0 0 1-1.32 2.217H10.5a1.5 1.5 0 0 1-1.32-2.214L28.685 9.786Zm5.274-1.428c-1.7-3.144-6.21-3.144-7.91 0l-19.507 36a4.5 4.5 0 0 0 3.954 6.645h39.01a4.5 4.5 0 0 0 3.956-6.645l-19.5-36h-.003ZM31.5 22.5a1.5 1.5 0 0 0-3 0v12a1.5 1.5 0 1 0 3 0v-12Zm.75 18.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
    />
  </Svg>
)
export default CaveatIcon
