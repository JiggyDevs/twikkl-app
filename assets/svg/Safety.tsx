import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Safety = (props: SvgProps) => (
  <Svg
    width={22}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M2.41 4.638v8.92c0 4.857 3.846 8.793 8.59 8.793s8.59-3.936 8.59-8.792V4.643l-8.642-2.908L2.41 4.638ZM10.946 0 21.2 3.449v10.11C21.2 19.325 16.633 24 11 24 5.367 24 .8 19.325.8 13.559V3.449L10.946 0Zm5.303 7.782a.792.792 0 0 0-1.138.068l-5.179 5.963-3.346-3.702a.793.793 0 0 0-1.137-.045.838.838 0 0 0-.045 1.165l3.948 4.368a.792.792 0 0 0 1.194-.012l5.769-6.641a.838.838 0 0 0-.066-1.164Z"
    />
  </Svg>
)
export default Safety
