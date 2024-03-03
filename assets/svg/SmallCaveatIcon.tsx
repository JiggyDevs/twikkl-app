import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const SmallCaveatIcon = (props: SvgProps) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <G fill="#50A040" clipPath="url(#a)">
      <Path d="M12.5 14.213a.866.866 0 0 0 .866-.866V9.333a.867.867 0 0 0-1.733 0v4a.867.867 0 0 0 .867.88ZM12.467 17.18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <Path d="m20.72 17.027-6.493-11.96a2 2 0 0 0-3.513 0l-6.5 11.96a2 2 0 0 0 1.76 2.974H18.96a2 2 0 0 0 1.76-2.954v-.02Zm-1.186 1.294a.667.667 0 0 1-.573.326H5.973a.665.665 0 0 1-.587-.986L11.881 5.7a.667.667 0 0 1 1.173 0l6.493 11.96a.667.667 0 0 1-.013.66Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h24v24H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SmallCaveatIcon
