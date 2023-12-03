import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Downvote = (props: SvgProps) => (
  <Svg
    width={13}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M5.456 14.533c.065.936.952 1.66 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.21.518-.174.994-.68 1.2-1.273a1.897 1.897 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.093 2.093 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.161 3.161 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C11.6.756 10.937.28 10 .28H6.5c-.605 0-1.07.08-1.466.217-.34.125-.666.288-.97.485l-.048.03c-.504.307-.999.61-2.068.722C1.182 1.814.5 2.433.5 3.278v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591Z"
    />
  </Svg>
)
export default Downvote
