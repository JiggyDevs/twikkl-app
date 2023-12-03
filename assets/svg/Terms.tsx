import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Terms = (props: SvgProps) => (
  <Svg
    width={21}
    height={23}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 11V4.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 13.252 1H1.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H10M5 9h8M5 5h4m-4 8h3"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 1v3.4a.6.6 0 0 0 .6.6H17m-.008 9.125 2.556.649c.266.068.453.31.445.584C19.821 21.116 16.5 22 16.5 22s-3.321-.884-3.493-6.642a.588.588 0 0 1 .445-.584l2.556-.649c.323-.082.661-.082.984 0Z"
    />
  </Svg>
)
export default Terms
