import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Help = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M9.95 16c.35 0 .646-.121.888-.363s.363-.538.362-.887c0-.35-.12-.646-.362-.888a1.202 1.202 0 0 0-.888-.362c-.35 0-.646.121-.887.363a1.212 1.212 0 0 0-.363.887c0 .35.121.646.363.888s.538.363.887.362Zm.05 4a9.733 9.733 0 0 1-3.9-.788 10.114 10.114 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.755 9.755 0 0 1 0 10c0-1.383.263-2.683.788-3.9a10.114 10.114 0 0 1 2.137-3.175c.9-.9 1.958-1.612 3.175-2.137A9.755 9.755 0 0 1 10 0c1.383 0 2.683.263 3.9.788a10.114 10.114 0 0 1 3.175 2.137c.9.9 1.613 1.958 2.138 3.175A9.72 9.72 0 0 1 20 10a9.733 9.733 0 0 1-.788 3.9 10.114 10.114 0 0 1-2.137 3.175c-.9.9-1.958 1.613-3.175 2.138A9.72 9.72 0 0 1 10 20Zm0-2c2.233 0 4.125-.775 5.675-2.325C17.225 14.125 18 12.233 18 10c0-2.233-.775-4.125-2.325-5.675C14.125 2.775 12.233 2 10 2c-2.233 0-4.125.775-5.675 2.325C2.775 5.875 2 7.767 2 10c0 2.233.775 4.125 2.325 5.675C5.875 17.225 7.767 18 10 18Zm.1-12.3c.417 0 .78.133 1.088.4.309.267.463.6.462 1 0 .367-.112.692-.337.975-.225.283-.479.55-.763.8-.383.333-.72.7-1.012 1.1-.291.4-.437.85-.438 1.35 0 .233.088.43.263.588a.88.88 0 0 0 .612.237c.25 0 .463-.083.638-.25.175-.167.288-.375.337-.625a2.01 2.01 0 0 1 .45-.938c.233-.275.483-.538.75-.787.383-.367.713-.767.988-1.2.275-.433.413-.917.412-1.45 0-.85-.346-1.546-1.038-2.087-.692-.541-1.496-.812-2.412-.813-.633 0-1.237.133-1.812.4a2.801 2.801 0 0 0-1.313 1.225.905.905 0 0 0-.113.638.733.733 0 0 0 .338.512c.233.133.475.175.725.125a.996.996 0 0 0 .625-.425c.183-.25.413-.442.688-.575.275-.133.563-.2.862-.2Z"
    />
  </Svg>
)
export default Help
