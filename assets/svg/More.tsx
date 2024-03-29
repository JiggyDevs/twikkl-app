import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const MoreIcon = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#041105"
      d="M10 19.143A9.143 9.143 0 1 0 10 .857a9.143 9.143 0 0 0 0 18.286Z"
    />
    <Path
      fill="#041105"
      stroke="#F1FCF2"
      d="M10.643 10c0 .123-.067.288-.21.432-.145.145-.31.211-.433.211s-.287-.066-.431-.21c-.144-.144-.21-.31-.21-.433s.066-.288.21-.432c.144-.144.308-.21.431-.21s.288.066.432.21c.144.144.211.31.211.432Zm-4.571 0c0 .123-.067.288-.211.432-.144.145-.31.211-.432.211-.123 0-.288-.066-.432-.21-.143-.144-.21-.31-.21-.433s.067-.288.21-.432c.144-.144.309-.21.432-.21s.288.066.432.21c.144.144.21.31.21.432Zm9.143 0c0 .123-.067.288-.211.432-.144.145-.31.211-.432.211-.123 0-.288-.066-.432-.21-.143-.144-.21-.31-.21-.433s.067-.288.21-.432c.144-.144.309-.21.432-.21s.288.066.432.21c.144.144.21.31.21.432Z"
    />
  </Svg>
)
export default MoreIcon
