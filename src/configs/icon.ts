import { createIconSetFromIcoMoon } from "@expo/vector-icons";

export const TwikklIcon = createIconSetFromIcoMoon(
  require("@assets/fonts/twikkl-icons-v1.0/selection.json"),
  "TwikkLIconFonts",
  "twikkl-icons.ttf",
);

export enum Icon {
  TIMER_24 = "fluentui-timer-24",
  BELL = "bell",
}
