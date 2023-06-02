import colors from "@twikkl/configs/colors";
import fonts from "@twikkl/configs/fonts";
import Size from "@twikkl/utility/useResponsiveSize";
import { Text, TextProps } from "react-native";

/**
 * @default fontsize-16__fontweight-700__fontfamily-axiforma
 */
const AppText = ({ children, style, ...otherProps }: TextProps) => {
  return (
    <Text
      style={[
        {
          fontSize: Size.calcWidth(16),
          fontFamily: fonts.axiforma,
          fontWeight: "700",
          color: colors.white100,
        },
        style,
      ]}
      {...otherProps}
    >
      {children}
    </Text>
  );
};

export default AppText;
