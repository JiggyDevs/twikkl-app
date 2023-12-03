import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const SeedPhraseIcon = (props: SvgProps) => (
  <Svg
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <G
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <Path d="M14 27c7.18 0 13-5.82 13-13S21.18 1 14 1 1 6.82 1 14s5.82 13 13 13Z" />
      <Path d="M14 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14 15v4" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h28v28H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SeedPhraseIcon
