import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PlayUpload = (props: SvgProps) => (
  <Svg
    width={60}
    height={35}
    fill="none"
    {...props}
  >
    <Path
      stroke="#041105"
      strokeLinecap="round"
      strokeWidth={2}
      d="M49.5 32a7.5 7.5 0 1 1 0-15M49.5 17a7.5 7.5 0 1 1 0 15M49.5 27.833v-6.25"
    />
    <Path
      stroke="#041105"
      strokeLinecap="round"
      strokeWidth={2}
      d="M52.416 24.5 49.5 21.583 46.583 24.5"
    />
    <Path
      fill="#50A040"
      fillRule="evenodd"
      d="M15.5.5C7.216.5.5 7.216.5 15.5c0 8.284 6.716 15 15 15h24.928a10.54 10.54 0 0 1-1.987-6.177c0-5.847 4.74-10.588 10.588-10.588 3.289 0 6.227 1.5 8.17 3.851.094-.681.143-1.378.143-2.086 0-8.284-6.716-15-15-15H15.5Z"
      clipRule="evenodd"
    />
    <Path
      fill="#F1FCF2"
      d="M26.52 20.32a.732.732 0 0 1-.81.03.76.76 0 0 1-.41-.71v-8.28c0-.32.136-.557.41-.71a.733.733 0 0 1 .81.03l6.52 4.14c.24.16.36.387.36.68a.77.77 0 0 1-.36.68l-6.52 4.14Z"
    />
  </Svg>
)
export default PlayUpload
