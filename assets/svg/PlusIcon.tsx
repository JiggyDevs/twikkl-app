import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PlusIcon = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#50A040"
      fillRule="evenodd"
      d="M4.57.687c3.609-.4 7.251-.4 10.86 0 2 .224 3.612 1.798 3.846 3.803.428 3.66.428 7.359 0 11.02a4.357 4.357 0 0 1-3.845 3.803c-3.61.401-7.252.401-10.862 0a4.356 4.356 0 0 1-3.845-3.804 47.427 47.427 0 0 1 0-11.018A4.356 4.356 0 0 1 4.568.688l.001-.001ZM10 4.175a.875.875 0 0 1 .875.875v4.075h4.075a.875.875 0 1 1 0 1.75h-4.075v4.075a.875.875 0 1 1-1.75 0v-4.075H5.05a.875.875 0 0 1 0-1.75h4.075V5.05A.875.875 0 0 1 10 4.175Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default PlusIcon
