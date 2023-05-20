import { MD3DarkTheme as DefaultTheme, configureFonts } from "react-native-paper";

const fontConfig = {
  // ...DefaultTheme.fonts,
  titleMedium: {
    fontFamily: "axiforma",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 33,
    textAlign: "center",
  },
} as const;

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,

    // recognized
    primary: "#50A040",
    secondary: "#F8CF75",
    tertiary: "#F1FCF2",

    // custom
    light: "#FFFFFF",
    brand: "#041105",
    brandTint: "#143615",
    red: "#A20000",
    green: "#017906",
    dark: "#010301",
    inactive: "#C0CCC1",
    errorMsg: "#E20000",
    whiteTint: "#FFFFFF72",
    blackTint: "#00000072",
  },
  fonts: configureFonts({ config: fontConfig }),
};

type AppTheme = typeof theme;

export { theme, AppTheme };
