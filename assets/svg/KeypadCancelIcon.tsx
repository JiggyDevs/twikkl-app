import Svg, { SvgProps, Path } from "react-native-svg"
const KeyboardCancelIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      fill="#041105"
      d="M1.797 9.025a2 2 0 0 1 0-3.05L8.837 0v15l-7.04-5.975Z"
    />
    <Path
      fill="#041105"
      d="M8.836 0h13a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-13V0Z"
    />
    <Path
      stroke="#C0CCC1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m19.834 4.002-6.995 6.993m6.997.005-7-7"
    />
  </Svg>
)
export default KeyboardCancelIcon
