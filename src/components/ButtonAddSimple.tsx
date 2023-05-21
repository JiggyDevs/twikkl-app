import { View, StyleSheet } from "react-native";
import { useColors } from "@twikkl/hooks";
import { TwikklIcon, EIcon } from "@twikkl/configs";

export default function ButtonAddSimple() {
  const { dark, light } = useColors();

  return (
    <View style={{ ...styles.container, backgroundColor: light }}>
      <TwikklIcon name={EIcon.PLUS} size={35} color={dark} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    padding: 5,
  },
});
