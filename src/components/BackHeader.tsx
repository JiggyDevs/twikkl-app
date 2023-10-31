import { View, Text, StyleSheet } from "react-native";
import Back from "@assets/svg/Back";

const BackHeader = ({ onPress, title }: { onPress: () => void; title: string }) => {
  return (
    <View style={styles.topHeader}>
      <Back onPress={onPress} dark="#041105" />
      <Text style={styles.boldText}>{title}</Text>
      <View style={{ width: 20 }} />
    </View>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  topHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  boldText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
