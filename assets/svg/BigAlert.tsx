import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const BigAlert = (props: SvgProps) => (
  <Svg
    width={48}
    height={45}
    fill="none"
    {...props}
  >
    <Path
      fill="#F8CF75"
      d="M22.686 3.786a1.5 1.5 0 0 1 2.64 0l19.5 36a1.5 1.5 0 0 1-1.32 2.217H4.5a1.5 1.5 0 0 1-1.32-2.214L22.686 3.786Zm5.274-1.428c-1.701-3.144-6.21-3.144-7.911 0l-19.506 36a4.5 4.5 0 0 0 3.954 6.645h39.009a4.5 4.5 0 0 0 3.957-6.645l-19.5-36h-.003ZM25.5 16.5a1.5 1.5 0 1 0-3 0v12a1.5 1.5 0 1 0 3 0v-12Zm.75 18.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
    />
  </Svg>
)
export default BigAlert
