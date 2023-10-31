import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SendIcon = (props: SvgProps) => (
  <Svg
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <Path
      fill="#143615"
      d="M27.937 1.2A.876.876 0 0 0 26.8.064L1.342 10.246h-.001l-.791.315a.875.875 0 0 0-.144 1.553l.718.455.001.003 8.742 5.562 5.561 8.74.004.004.455.718a.875.875 0 0 0 1.55-.145l10.5-26.25ZM24.73 4.509 11.615 17.623l-.376-.592a.874.874 0 0 0-.27-.27l-.591-.376L23.492 3.271l2.062-.824-.823 2.061h-.002Z"
    />
  </Svg>
)
export default SendIcon
