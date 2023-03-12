import { StyleSheet } from "react-native";

export const ViewVariant = StyleSheet.create({
  page: {
    flex: 1,
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },
  rowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
