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
    alignItems: "center",
  },
  buttonText: {
    color: "#F1FCF2",
    fontSize: 15,
    fontWeight: "700",
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#F1FCF2",
    paddingTop: 60,
  },
});
