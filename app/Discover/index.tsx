import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Pressable, FlatList } from "react-native";
import { Octicons, AntDesign, Ionicons, FontAwesome5, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// import AppScreen from "@twikkl/components/AppScreen";
// import colors from "@twikkl/configs/colors";
// import fonts from "@twikkl/configs/fonts";
// import Size from "@twikkl/utility/useResponsiveSize";
// import Card from "../../src/components/discover/Card";
// import AppText from "@twikkl/components/AppText";
import Highlights from "@twikkl/components/Discover/Highlights";

import Card from "@twikkl/components/Discover/Card";
// import { discoverTabs } from "@assets/data/discover/tabs";

export const colors = {
  green100: "#041105",
  green200: "#143615",
  green300: "#50a040",
  white100: "#F1FCF2",
  white200: "#ffffff",
};

interface Tabs {
  title: string;
  icon: JSX.Element;
  route: string;
}

export const discoverTabs: Tabs[] = [
  {
    title: "For you",
    icon: <FontAwesome5 name="user-friends" size={22} color={colors.white200} />,
    route: "",
  },
  {
    title: "Your Groups",
    icon: <Feather name="users" size={22} color={colors.white100} />,
    route: "",
  },
  {
    title: "Favourites",
    icon: <Feather name="star" size={22} color={colors.white200} />,
    route: "",
  },
];

const Discover = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const router = useRouter();
  return (
    <View style={{ backgroundColor: "#000" }}>
      <View style={styles.header}>
        <TouchableOpacity onPressOut={() => router.back()} style={styles.iconContainer}>
          <Octicons name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.text}>Groups</Text>

        <AntDesign name="search1" size={24} color={colors.white100} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.add}>
          <Ionicons name="add-outline" size={30} color={colors.green300} />
        </TouchableOpacity>
        <ScrollView contentContainerStyle={{ alignItems: "center" }} horizontal>
          {discoverTabs.map(({ icon, title }, index) => {
            return (
              <TouchableOpacity
                onPressIn={() => setActiveTabIndex(index)}
                key={index}
                style={[
                  styles.tab,
                  activeTabIndex === index && {
                    backgroundColor: colors.green300,
                  },
                ]}
              >
                {icon}
                <Text style={styles.navText}>{title}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <FlatList
        data={Array(20)}
        ListHeaderComponent={() => (
          <>
            <Highlights />
            <Text style={styles.forYou}>For you</Text>
          </>
        )}
        renderItem={() => {
          return <Card />;
        }}
      />
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  add: {
    backgroundColor: colors.white200,
    height: 34,
    width: 34,
    borderRadius: 34,
    marginVertical: 10,
    marginRight: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    backgroundColor: colors.white100,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  forYou: {
    fontWeight: "500",
    marginLeft: 12,
    marginVertical: 10,
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 18,
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 100,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 25,
  },
  text: {
    color: colors.white100,
    fontFamily: "axiforma",
    fontSize: 20,
    fontWeight: "700",
  },
  navText: {
    color: colors.white100,
    fontFamily: "axiforma",
    fontWeight: "300",
    fontSize: 14,
    marginLeft: 10,
  },
});
