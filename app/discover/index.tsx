import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Pressable, FlatList } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import AppScreen from "@twikkl/components/AppScreen";
import colors from "@twikkl/configs/colors";
import fonts from "@twikkl/configs/fonts";
import Size from "@twikkl/utility/useResponsiveSize";
import Card from "../../src/components/discover/Card";
import AppText from "@twikkl/components/AppText";
import Highlights from "@twikkl/components/discover/Highlights";
import { discoverTabs } from "@assets/data/discover/tabs";

const Discover = (): JSX.Element => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const router = useRouter();
  return (
    <AppScreen isScrollable={false}>
      <View style={styles.header}>
        <TouchableOpacity onPressOut={() => router.back()} style={styles.iconContainer}>
          <Octicons name="chevron-left" size={Size.calcAverage(24)} color="black" />
        </TouchableOpacity>
        <AppText style={styles.text}>Groups</AppText>

        <AntDesign name="search1" size={Size.calcAverage(24)} color={colors.white100} />
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.add}>
          <Ionicons name="add-outline" size={Size.calcAverage(30)} color={colors.green300} />
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
            <AppText style={styles.forYou}>For you</AppText>
          </>
        )}
        renderItem={() => {
          return <Card />;
        }}
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  add: {
    backgroundColor: colors.white200,
    height: Size.calcAverage(34),
    width: Size.calcAverage(34),
    borderRadius: Size.calcAverage(34),
    marginVertical: Size.calcHeight(10),
    marginRight: Size.calcWidth(13),
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    backgroundColor: colors.white100,
    height: Size.calcAverage(30),
    width: Size.calcAverage(30),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Size.calcAverage(100),
  },
  forYou: {
    fontWeight: "500",
    marginLeft: Size.calcWidth(12),
    marginVertical: Size.calcHeight(10),
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: Size.calcAverage(18),
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Size.calcAverage(100),
    paddingHorizontal: Size.calcWidth(15),
    paddingVertical: Size.calcHeight(10),
    marginRight: Size.calcWidth(25),
  },
  text: {
    color: colors.white100,
    fontFamily: fonts.axiforma,
    fontSize: Size.calcAverage(20),
    fontWeight: "700",
  },
  navText: {
    color: colors.white100,
    fontFamily: fonts.axiforma,
    fontWeight: "300",
    fontSize: Size.calcAverage(14),
    marginLeft: Size.calcWidth(10),
  },
});

export default Discover;
