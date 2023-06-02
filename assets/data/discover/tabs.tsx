
import { FontAwesome5, Feather } from "@expo/vector-icons";

import colors from "@twikkl/configs/colors";
import Size from "@twikkl/utility/useResponsiveSize";

interface Tabs {
    title: string;
    icon: JSX.Element;
    route: string;
  }
  
  export const discoverTabs: Tabs[] = [
    {
      title: "For you",
      icon: <FontAwesome5 name="user-friends" size={Size.calcAverage(22)} color={colors.white200} />,
      route: "",
    },
    {
      title: "Your Groups",
      icon:   <Feather name="users" size={Size.calcAverage(22)} color={colors.white100} />,
      route: "",
    },
    {
      title: "Favourites",
      icon: <Feather name="star" size={Size.calcAverage(22)} color={colors.white200} />,
      route: "",
    },
  ];