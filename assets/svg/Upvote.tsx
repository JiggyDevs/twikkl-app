import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Upvote = (props: SvgProps) => (
  <Svg
    width={13}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#F1FCF2"
      d="M4.956 1.745C5.021.81 5.908.087 6.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51.147-.02.295-.037.443-.051.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.16 3.16 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C11.1 15.522 10.437 16 9.5 16H6c-.605 0-1.07-.081-1.466-.218a4.818 4.818 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C.682 14.464 0 13.846 0 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59v-.001Z"
    />
  </Svg>
)
export default Upvote
